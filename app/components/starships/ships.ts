import { startCase, trimEnd } from "lodash";
import { ShipHulls } from "../generator/official-ships";
import { type Component, AttachmentType, type Effect, type Ship, type Weapon, type Nameable } from "./types";
import { collapseDuplicates, isAboveMinClass, scaleCostToShipSize, scaleMassOrPowerToShipSize } from "./utils";

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
    const scaledPower = scaleMassOrPowerToShipSize(attachment.power, ship.class, attachment.power_scales)
    const scaledMass = scaleMassOrPowerToShipSize(attachment.mass, ship.class, attachment.mass_scales)
    const scaledCost = scaleCostToShipSize(attachment.cost, ship.class, attachment.cost_scales)

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
            ship.defenses.push(attachment)
            break;
        case AttachmentType.Fitting:
            ship.fittings.push(attachment)
            break;
        case AttachmentType.Mod:
            break;
    }

    return ship
}

export function GenerateWeaponDescString(ship: Ship): string[] {
    const weapon_strings: string[] = []

    ship.weapons.forEach(weapon => {
        const str = startCase(weapon.name!.replaceAll("_", " ")) + " (" + weapon.dmg + ", " + wepPropsToStr(weapon) + ")"
        weapon_strings.push(str)
    });

    return collapseDuplicates(weapon_strings)
}

export function GenerateDefenseDescString(ship: Ship): string[] {
    const defense_strings: string[] = []

    ship.defenses.forEach(defense => {
        defense_strings.push(startCase(defense.name!.replace("_", " "))
        )
    });

    return collapseDuplicates(defense_strings)
}

export function GenerateFittingDescString(ship: Ship): string[] {
    const fitting_strings: string[] = []

    ship.fittings.forEach(fitting => {
        fitting_strings.push(startCase(fitting.name!.replace("_", " "))
        )
    });

    return collapseDuplicates(fitting_strings)
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