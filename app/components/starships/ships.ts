import { startCase, trimEnd } from "lodash";
import { ShipHulls } from "../generator/official-ships";
import { type Component, AttachmentType, type Effect, type Ship, type Weapon, type Nameable, type NamedItemWithDesc } from "./types";
import { collapseDuplicates, isAboveMinClass, scaleCargoToShipSize, scaleCostToShipSize, scaleMassOrPowerToShipSize } from "./utils";

export function NewShipFromHullType(hull_type: string): Ship {
    const hull_base = ShipHulls[hull_type]!

    return {
        class: hull_base.class,
        hull: hull_type,
        hit_points: hull_base.hp,
        armor: hull_base.armor,
        armor_class: hull_base.ac,
        speed: hull_base.speed,
        power: { max: hull_base.power, free: hull_base.power },
        mass: { max: hull_base.mass, free: hull_base.mass },
        hardpoints: { max: hull_base.hardpoints, free: hull_base.hardpoints },
        min_crew: hull_base.crew_min,
        max_crew: hull_base.crew_max,
        cost: hull_base.cost,
        weapons: [],
        defenses: [],
        fittings: [],
    }
}

export function AddAttachment(
    ship: Ship,
    name: string,
    attachment: ((Component & Effect) | (Component & Weapon)) & Nameable,
    attachment_type: AttachmentType,
): Ship {
    let scaledPower = scaleMassOrPowerToShipSize(attachment.power, ship.class, attachment.power_scales)
    let scaledMass = scaleMassOrPowerToShipSize(attachment.mass, ship.class, attachment.mass_scales)
    let scaledCost = scaleCostToShipSize(attachment.cost, ship.class, attachment.cost_scales)

    if (name === "system_drive") {
        scaledCost = ShipHulls[ship.hull]!.cost * -0.1
        scaledPower = scaleMassOrPowerToShipSize(1, ship.class, true) * -1
        scaledMass = scaleMassOrPowerToShipSize(1, ship.class, true) * -2
    }

    if (name === "teleportation_pads" || name === "psionic_anchorpoint") {
        scaledCost = 0
    }
    
    // TODO handle the following attachments:
    // - ablative_hull_compartments
    // - augmented_plating
    // - extended_life_support

    if (attachment_type == AttachmentType.Weapon) {
        if (ship.hardpoints.free < (attachment as Weapon).hardpoints) {
            throw new Error("insufficient hardpoints")
        }
    }

    if (ship.power.free < scaledPower) {
        throw new Error("insufficient power")
    }

    if (ship.mass.free < scaledMass) {
        throw new Error("insufficient mass")
    }

    if (!isAboveMinClass(ship.class, attachment.min_class)) {
        throw new Error("hull type not large enough")
    }

    ship.power.free = ship.power.free - scaledPower
    ship.mass.free = ship.mass.free - scaledMass
    ship.cost += scaledCost

    if (attachment_type == AttachmentType.Weapon) {
        ship.hardpoints.free = ship.hardpoints.free - (attachment as Weapon).hardpoints
    }

    attachment.name = name

    switch (attachment_type) {
        case AttachmentType.Weapon:
            ship.weapons.push(attachment as (Component & Weapon & Nameable))
            break;
        case AttachmentType.Defense:
            ship.defenses.push(attachment as (Component & Effect & Nameable))
            break;
        case AttachmentType.Fitting:
            ship.fittings.push(attachment as (Component & Effect & Nameable))
            break;
        case AttachmentType.Mod:
            throw new Error("mods not yet supported")
    }

    return ship
}

export function RemoveAttachment(
    ship: Ship,
    attachment_name: string,
    attachment_type: AttachmentType,
) {
    let attachment: (((Component & Effect) | (Component & Weapon)) & Nameable) | undefined = undefined
    let index = -1

    switch (attachment_type) {
        case AttachmentType.Weapon:
            index = ship.weapons.findIndex(obj => { return attachment_name == obj.name })
            if (index < 0) {
                throw new Error("weapon not in array")
            }
            attachment = ship.weapons.splice(index, 1)[0]
            break;
        case AttachmentType.Defense:
            index = ship.defenses.findIndex(obj => { return attachment_name === obj.name })
            if (index < 0) {
                throw new Error("defense not in array")
            }
            attachment = ship.defenses.splice(index, 1)[0]
            break;
        case AttachmentType.Fitting:
            index = ship.fittings.findIndex(obj => { return attachment_name === obj.name })
            if (index < 0) {
                throw new Error("fitting not in array")
            }
            attachment = ship.fittings.splice(index, 1)[0]
            break;

        case AttachmentType.Mod:
            throw new Error("mods not yet supported")
    }

    if (attachment == undefined) {
        throw new Error("attachment was undefined. possibly not a supported attachment type")
    }

    let scaledPower = scaleMassOrPowerToShipSize(attachment.power, ship.class, attachment.power_scales)
    let scaledMass = scaleMassOrPowerToShipSize(attachment.mass, ship.class, attachment.mass_scales)
    let scaledCost = scaleCostToShipSize(attachment.cost, ship.class, attachment.cost_scales)

    if (attachment_name === "system_drive") {
        scaledCost = ShipHulls[ship.hull]!.cost * -0.1
        scaledPower = scaleMassOrPowerToShipSize(1, ship.class, true) * -1
        scaledMass = scaleMassOrPowerToShipSize(1, ship.class, true) * -2
    }

    if (attachment_name === "teleportation_pads" || attachment_name === "psionic_anchorpoint") {
        scaledCost = 0
    }

    // TODO handle the following attachments:
    // - ablative_hull_compartments
    // - augmented_plating
    // - extended_life_support

    ship.power.free = ship.power.free + scaledPower
    ship.mass.free = ship.mass.free + scaledMass
    ship.cost = ship.cost - scaledCost

    if (attachment_type == AttachmentType.Weapon) {
        ship.hardpoints.free = ship.hardpoints.free + (attachment as Weapon).hardpoints
    }

    return ship
}

export function GenerateWeaponDescString(ship: Ship): NamedItemWithDesc[] {
    const weapon_strings: NamedItemWithDesc[] = []

    ship.weapons.forEach(weapon => {
        const str = startCase(weapon.name!.replaceAll("_", " ")) + " (" + weapon.dmg + ", " + wepPropsToStr(weapon) + ")"
        weapon_strings.push({ name: weapon.name!, desc: str })
    });

    return collapseDuplicates(weapon_strings)
}

export function GenerateDefenseDescString(ship: Ship): NamedItemWithDesc[] {
    const defense_strings: NamedItemWithDesc[] = []

    ship.defenses.forEach(defense => {
        const str = startCase(defense.name!.replace("_", " "))
        defense_strings.push({ name: defense.name!, desc: str })
    });

    return collapseDuplicates(defense_strings)
}

export function GenerateFittingDescString(ship: Ship): NamedItemWithDesc[] {
    const fitting_strings: NamedItemWithDesc[] = []
    let cargo_count = 0
    let found_drive = false

    // TODO handle
    // - smugglers_hold

    ship.fittings.forEach(fitting => {
        const name = fitting.name!
        if (name === "cargo_space") {
            cargo_count++
        }
        let str = startCase(name.replace("_", " "))
        if (name.includes("system_drive") || (name.includes("drive") && name.includes("upgrade"))) {
            found_drive = true
            // TODO special text for drive
        }
        fitting_strings.push({ name: name, desc: str })
    });

    const result = collapseDuplicates(fitting_strings)
    const index = result.findIndex(obj => { return obj.name === "cargo_space" })
    if (index > -1) {
        result[index] = {
            name: "cargo_space",
            desc: "XX tons of cargo space".replace("XX", String(scaleCargoToShipSize(cargo_count, ship.class)))
        }
    }

    if (!found_drive) {
        result.unshift({
            "name": "default_drive",
            "desc": "Spike Drive 1"
        })
    }

    return result
}

function wepPropsToStr(weapon: Weapon) {
    let prop_str = ""

    if (weapon.ap > 0) {
        prop_str += "AP "
        prop_str += weapon.ap.toString()
        prop_str += ", "
    }

    if (weapon.cloud) {
        prop_str += "Cloud, "
    }

    if (weapon.ammo) {
        prop_str += "Ammo "
        prop_str += weapon.ammo!
        prop_str += ", "
    }

    if (weapon.clumsy) {
        prop_str += "Clumsy, "
    }

    if (weapon.flak) {
        prop_str += "Flak, "
    }

    prop_str = trimEnd(prop_str, ", ")

    return prop_str
}
