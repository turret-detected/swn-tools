import { ShipDefenses, ShipFittings, ShipWeapons } from "../generator/official-ships";
import { AddAttachment, NewShipFromHullType } from "./ships";
import { AttachmentType, type Ship } from "./types";

// TODO
// make it so the user cannot permanently (without refreshing anyway) modify presets
export const ExampleShips: Record<string, Ship> = {
    "fighter_dogfighter": newFighterDogfighter(),
    "fighter_patrol": newFighterPatrol(),
    "fighter_bomber": newFighterBomber(),
    "shuttle_civilian": newShuttleCivilian(),
    "free_merchant_civilian": newFreeMerchantCivilian(),
    "patrol_boat_military": newPatrolBoatMilitary(),
    "corvette_military": newCorvetteMilitary(),
    "heavy_frigate_military": newHeavyFrigateMilitary(),
    "bulk_freighter_civilian": newBulkFreighterCivilian(),
    "fleet_cruiser_military": newFleetCruiserMilitary(),
}

function fastAddWeapon(ship: Ship, name: string): Ship {
    return AddAttachment(ship, name, ShipWeapons[name]!, AttachmentType.Weapon)
}

function fastAddDefense(ship: Ship, name: string): Ship {
    return AddAttachment(ship, name, ShipDefenses[name]!, AttachmentType.Defense)
}

function fastAddFitting(ship: Ship, name: string): Ship {
    return AddAttachment(ship, name, ShipFittings[name]!, AttachmentType.Fitting)
}

export function newFighterPatrol(): Ship {
    let ship = NewShipFromHullType("strike_fighter")
    ship = fastAddWeapon(ship, "reaper_battery")
    ship = fastAddFitting(ship, "atmospheric_configuration")

    return ship
}

export function newFighterDogfighter(): Ship {
    let ship = NewShipFromHullType("strike_fighter")
    ship = fastAddWeapon(ship, "multifocal_laser")
    ship = fastAddFitting(ship, "atmospheric_configuration")

    return ship
}

export function newFighterBomber(): Ship {
    let ship = NewShipFromHullType("strike_fighter")
    ship = fastAddWeapon(ship, "fractal_impact_charge")
    ship = fastAddFitting(ship, "atmospheric_configuration")

    return ship
}

export function newShuttleCivilian(): Ship {
    let ship = NewShipFromHullType("shuttle")
    ship = fastAddFitting(ship, "atmospheric_configuration")
    ship = fastAddFitting(ship, "extended_life_support")
    for (let index = 0; index < 3; index++) {
        console.log(ship)
        ship = fastAddFitting(ship, "cargo_space")
    }

    return ship
}

export function newFreeMerchantCivilian(): Ship {
    let ship = NewShipFromHullType("free_merchant")
    ship = fastAddWeapon(ship, "multifocal_laser")
    ship = fastAddWeapon(ship, "sandthrower")
    ship = fastAddFitting(ship, "atmospheric_configuration")
    ship = fastAddFitting(ship, "fuel_scoops")
    ship = fastAddFitting(ship, "fuel_bunkers")
    for (let index = 0; index < 8; index++) {
        ship = fastAddFitting(ship, "cargo_space")
    }

    return ship
}

export function newPatrolBoatMilitary(): Ship {
    let ship = NewShipFromHullType("patrol_boat")
    ship = fastAddWeapon(ship, "plasma_beam")
    ship = fastAddFitting(ship, "drive_2_upgrade")
    ship = fastAddFitting(ship, "atmospheric_configuration")
    ship = fastAddFitting(ship, "extended_stores")
    ship = fastAddFitting(ship, "boarding_tubes")
    ship = fastAddFitting(ship, "armory")
    ship = fastAddFitting(ship, "ships_locker")
    ship = fastAddFitting(ship, "survey_sensor_array")

    return ship
}

export function newCorvetteMilitary(): Ship {
    let ship = NewShipFromHullType("corvette")
    ship = fastAddWeapon(ship, "plasma_beam")
    ship = fastAddWeapon(ship, "plasma_beam")
    ship = fastAddWeapon(ship, "sandthrower")
    ship = fastAddDefense(ship, "hardened_polyceramic_overlay")
    ship = fastAddFitting(ship, "drive_2_upgrade")
    ship = fastAddFitting(ship, "extended_stores")
    ship = fastAddFitting(ship, "boarding_tubes")
    ship = fastAddFitting(ship, "armory")
    ship = fastAddFitting(ship, "ships_locker")
    ship = fastAddFitting(ship, "fuel_bunkers")

    return ship
}

export function newHeavyFrigateMilitary(): Ship {
    let ship = NewShipFromHullType("heavy_frigate")
    ship = fastAddWeapon(ship, "plasma_beam")
    ship = fastAddWeapon(ship, "plasma_beam")
    ship = fastAddWeapon(ship, "torpedo_launcher") // TODO add ammo
    ship = fastAddDefense(ship, "hardened_polyceramic_overlay")
    ship = fastAddFitting(ship, "drive_2_upgrade")
    ship = fastAddFitting(ship, "drop_pod")
    ship = fastAddFitting(ship, "fuel_scoops")
    ship = fastAddFitting(ship, "fuel_bunkers")
    ship = fastAddFitting(ship, "armory")
    ship = fastAddFitting(ship, "ships_locker")
    ship = fastAddFitting(ship, "boarding_tubes")

    return ship
}

export function newBulkFreighterCivilian(): Ship {
    let ship = NewShipFromHullType("bulk_freighter")
    ship = fastAddWeapon(ship, "plasma_beam")
    ship = fastAddFitting(ship, "drive_2_upgrade")
    ship = fastAddFitting(ship, "cargo_lighter")
    ship = fastAddFitting(ship, "fuel_bunkers")
    ship = fastAddFitting(ship, "ships_locker")
    for (let index = 0; index < 17; index++) {
        ship = fastAddFitting(ship, "cargo_space")
    }

    return ship
}

export function newFleetCruiserMilitary(): Ship {
    let ship = NewShipFromHullType("fleet_cruiser")
    ship = fastAddWeapon(ship, "gravcannon")
    ship = fastAddWeapon(ship, "smart_cloud")
    ship = fastAddWeapon(ship, "multifocal_laser")
    ship = fastAddWeapon(ship, "multifocal_laser")
    ship = fastAddDefense(ship, "hardened_polyceramic_overlay")
    ship = fastAddFitting(ship, "drive_3_upgrade")
    ship = fastAddFitting(ship, "drop_pod")
    ship = fastAddFitting(ship, "armory")
    ship = fastAddFitting(ship, "ships_locker")
    ship = fastAddFitting(ship, "boarding_tubes")
    ship = fastAddFitting(ship, "fuel_scoops")
    ship = fastAddFitting(ship, "advanced_nav_computer")
    for (let index = 0; index < 3; index++) {
        ship = fastAddFitting(ship, "cargo_space")
    }

    // TODO the cost and free mass to do not match the source book
    // figure out whose error this is
    // (assuming 60 tons of cargo should be 600 unless it's a smugglers hold?)
    // idk why a cruiser would have smuggler space though lol

    return ship
}