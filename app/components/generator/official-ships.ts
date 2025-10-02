import { ShipClass } from "./types"

// The below data is ©2017 Sine Nomine Publishing, Inc.
// Taken from Stars Without Number Revised Free Edition, available here:
// https://www.drivethrurpg.com/en/product/230009/stars-without-number-revised-edition-free-version

// TODO: check stats for accuracy, OCR tool made some mistakes

export type ShipHull = {
    cost: number;
    speed: number;
    armor: number;
    hp: number;
    crew_min: number;
    crew_max: number;
    ac: number;
    power: number;
    mass: number;
    hardpoints: number;
    class: ShipClass;
};

export const ShipHulls: Record<string, ShipHull> = {
    "strike_fighter": {
        "cost": 200000,
        "speed": 5,
        "armor": 5,
        "hp": 8,
        "crew_min": 1,
        "crew_max": 1,
        "ac": 16,
        "power": 5,
        "mass": 2,
        "hardpoints": 1,
        "class": ShipClass.Fighter
    },
    "shuttle": {
        "cost": 200000,
        "speed": 3,
        "armor": 0,
        "hp": 15,
        "crew_min": 1,
        "crew_max": 10,
        "ac": 11,
        "power": 3,
        "mass": 5,
        "hardpoints": 1,
        "class": ShipClass.Fighter
    },
    "free_merchant": {
        "cost": 500000,
        "speed": 3,
        "armor": 2,
        "hp": 20,
        "crew_min": 1,
        "crew_max": 6,
        "ac": 14,
        "power": 10,
        "mass": 15,
        "hardpoints": 2,
        "class": ShipClass.Frigate
    },
    "patrol_boat": {
        "cost": 2500000,
        "speed": 4,
        "armor": 5,
        "hp": 25,
        "crew_min": 5,
        "crew_max": 20,
        "ac": 14,
        "power": 15,
        "mass": 10,
        "hardpoints": 4,
        "class": ShipClass.Frigate
    },
    "corvette": {
        "cost": 4000000,
        "speed": 2,
        "armor": 10,
        "hp": 40,
        "crew_min": 10,
        "crew_max": 40,
        "ac": 13,
        "power": 15,
        "mass": 15,
        "hardpoints": 6,
        "class": ShipClass.Frigate
    },
    "heavy_frigate": {
        "cost": 7000000,
        "speed": 1,
        "armor": 10,
        "hp": 50,
        "crew_min": 30,
        "crew_max": 120,
        "ac": 15,
        "power": 25,
        "mass": 20,
        "hardpoints": 8,
        "class": ShipClass.Frigate
    },
    "bulk_freighter": {
        "cost": 5000000,
        "speed": 0,
        "armor": 0,
        "hp": 40,
        "crew_min": 10,
        "crew_max": 40,
        "ac": 11,
        "power": 15,
        "mass": 25,
        "hardpoints": 2,
        "class": ShipClass.Cruiser
    },
    "fleet_cruiser": {
        "cost": 10000000,
        "speed": 1,
        "armor": 15,
        "hp": 60,
        "crew_min": 50,
        "crew_max": 200,
        "ac": 14,
        "power": 50,
        "mass": 30,
        "hardpoints": 10,
        "class": ShipClass.Cruiser
    },
    "battleship": {
        "cost": 50000000,
        "speed": 0,
        "armor": 20,
        "hp": 100,
        "crew_min": 200,
        "crew_max": 1000,
        "ac": 16,
        "power": 75,
        "mass": 50,
        "hardpoints": 15,
        "class": ShipClass.Capital
    },
    "carrier": {
        "cost": 60000000,
        "speed": 0,
        "armor": 10,
        "hp": 75,
        "crew_min": 300,
        "crew_max": 1500,
        "ac": 14,
        "power": 50,
        "mass": 100,
        "hardpoints": 4,
        "class": ShipClass.Capital
    },
    "small_station": {
        "cost": 5000000,
        "speed": -1,
        "armor": 5,
        "hp": 120,
        "crew_min": 20,
        "crew_max": 200,
        "ac": 11,
        "power": 50,
        "mass": 40,
        "hardpoints": 10,
        "class": ShipClass.Cruiser
    },
    "large_station": {
        "cost": 40000000,
        "speed": -1,
        "armor": 20,
        "hp": 120,
        "crew_min": 100,
        "crew_max": 1000,
        "ac": 17,
        "power": 125,
        "mass": 75,
        "hardpoints": 30,
        "class": ShipClass.Capital
    }
}

export type ShipWeapon = {
    cost: number;
    dmg: string;
    ap: number;
    power: number;
    mass: number;
    hardpoints: number;
    min_class: ShipClass;
    tech_level: number;
    clumsy: boolean;
    flak: boolean;
    cloud: boolean;
    ammo?: number;
    ammo_cost?: number;
};

export const ShipWeapons: Record<string, ShipWeapon> = {
    "multifocal_laser": {
        "cost": 100000,
        "dmg": "1d4",
        "power": 5,
        "mass": 1,
        "hardpoints": 1,
        "min_class": ShipClass.Fighter,
        "tech_level": 4,
        "ap": 20,
        "clumsy": false,
        "flak": false,
        "cloud": false
    },
    "reaper_battery": {
        "cost": 100000,
        "dmg": "3d4",
        "power": 4,
        "mass": 1,
        "hardpoints": 1,
        "min_class": ShipClass.Fighter,
        "tech_level": 4,
        "ap": 0,
        "clumsy": true,
        "flak": false,
        "cloud": false
    },
    "fractal_impact_charge": {
        "cost": 200000,
        "ammo_cost": 500,
        "dmg": "2d6",
        "power": 5,
        "mass": 1,
        "hardpoints": 1,
        "min_class": ShipClass.Fighter,
        "tech_level": 4,
        "ap": 15,
        "clumsy": false,
        "ammo": 4,
        "flak": false,
        "cloud": false
    },
    "polyspectral_mes_beam": {
        "cost": 2000000,
        "dmg": "2d4",
        "power": 5,
        "mass": 1,
        "hardpoints": 1,
        "min_class": ShipClass.Fighter,
        "tech_level": 5,
        "ap": 25,
        "clumsy": false,
        "flak": false,
        "cloud": false
    },
    "sandthrower": {
        "cost": 50000,
        "dmg": "2d4",
        "power": 3,
        "mass": 1,
        "hardpoints": 1,
        "min_class": ShipClass.Fighter,
        "tech_level": 4,
        "ap": 0,
        "clumsy": false,
        "flak": true,
        "cloud": false
    },
    "flak_emitter_battery": {
        "cost": 500000,
        "dmg": "2d6",
        "power": 5,
        "mass": 3,
        "hardpoints": 1,
        "min_class": ShipClass.Frigate,
        "tech_level": 4,
        "ap": 20,
        "clumsy": false,
        "flak": true,
        "cloud": false
    },
    "torpedo_launcher": {
        "cost": 500000,
        "ammo_cost": 2500,
        "dmg": "3d8",
        "power": 10,
        "mass": 3,
        "hardpoints": 1,
        "min_class": ShipClass.Frigate,
        "tech_level": 4,
        "ap": 0,
        "clumsy": false,
        "ammo": 4,
        "flak": false,
        "cloud": false
    },
    "charged_particle_caster": {
        "cost": 800000,
        "dmg": "3d6",
        "power": 10,
        "mass": 2,
        "hardpoints": 1,
        "min_class": ShipClass.Frigate,
        "tech_level": 4,
        "ap": 15,
        "clumsy": true,
        "flak": false,
        "cloud": false
    },
    "plasma_beam": {
        "cost": 700000,
        "dmg": "3d6",
        "power": 5,
        "mass": 2,
        "hardpoints": 1,
        "min_class": ShipClass.Frigate,
        "tech_level": 4,
        "ap": 20,
        "clumsy": false,
        "flak": false,
        "cloud": false
    },
    "mag_spike_array": {
        "cost": 1000000,
        "ammo_cost": 5000,
        "dmg": "2d6+2",
        "power": 5,
        "mass": 2,
        "hardpoints": 1,
        "min_class": ShipClass.Frigate,
        "tech_level": 4,
        "ap": 10,
        "clumsy": false,
        "ammo": 5,
        "flak": true,
        "cloud": false
    },
    "nuclear_missiles": {
        "cost": 50000,
        "ammo_cost": 5000,
        "dmg": "Special",
        "power": 5,
        "mass": 1,
        "hardpoints": 2,
        "min_class": ShipClass.Frigate,
        "tech_level": 4,
        "ap": 0,
        "clumsy": false,
        "ammo": 5,
        "flak": false,
        "cloud": false
    },
    "spinal_beam_cannon": {
        "cost": 1500000,
        "dmg": "3d10",
        "power": 10,
        "mass": 5,
        "hardpoints": 2,
        "min_class": ShipClass.Cruiser,
        "tech_level": 4,
        "ap": 15,
        "clumsy": true,
        "flak": false,
        "cloud": false
    },
    "smart_cloud": {
        "cost": 2000000,
        "dmg": "3d10",
        "power": 10,
        "mass": 5,
        "hardpoints": 2,
        "min_class": ShipClass.Cruiser,
        "tech_level": 5,
        "ap": 0,
        "clumsy": true,
        "flak": false,
        "cloud": true
    },
    "gravcannon": {
        "cost": 2000000,
        "dmg": "4d6",
        "power": 15,
        "mass": 4,
        "hardpoints": 3,
        "min_class": ShipClass.Cruiser,
        "tech_level": 4,
        "ap": 20,
        "clumsy": false,
        "flak": false,
        "cloud": false
    },
    "spike_inversion_projector": {
        "cost": 2500000,
        "dmg": "3d8",
        "power": 20,
        "mass": 5,
        "hardpoints": 2,
        "min_class": ShipClass.Cruiser,
        "tech_level": 4,
        "ap": 15,
        "clumsy": false,
        "flak": false,
        "cloud": false
    },
    "vortex_tunnel_inductor": {
        "cost": 5000000,
        "dmg": "3d20",
        "power": 20,
        "mass": 10,
        "hardpoints": 3,
        "min_class": ShipClass.Capital,
        "tech_level": 4,
        "ap": 20,
        "clumsy": true,
        "flak": false,
        "cloud": false
    },
    "mass_cannon": {
        "cost": 5000000,
        "ammo_cost": 50000,
        "dmg": "2d20",
        "power": 10,
        "mass": 5,
        "hardpoints": 2,
        "min_class": ShipClass.Capital,
        "tech_level": 4,
        "ap": 20,
        "clumsy": false,
        "ammo": 4,
        "flak": false,
        "cloud": false
    },
    "lightning_charge_mantle": {
        "cost": 4000000,
        "dmg": "1d20",
        "power": 15,
        "mass": 5,
        "hardpoints": 2,
        "min_class": ShipClass.Capital,
        "tech_level": 4,
        "ap": 5,
        "clumsy": false,
        "flak": false,
        "cloud": true
    },
    "singularity_gun": {
        "cost": 20000000,
        "dmg": "5d20",
        "power": 25,
        "mass": 10,
        "hardpoints": 5,
        "min_class": ShipClass.Capital,
        "tech_level": 5,
        "ap": 25,
        "clumsy": false,
        "flak": false,
        "cloud": false
    }
}

export type ShipDefense = {
    min_class: ShipClass;
    cost: number,
    cost_scales?: boolean,
    mass: number,
    mass_scales?: boolean,
    power: number,
    power_scales?: boolean,
    effect: string,
};

export const ShipDefenses: Record<string, ShipDefense> = {
    "ablative_hull_compartments": {
        "cost": 100000,
        "cost_scales": true,
        "power": 5,
        "mass": 2,
        "mass_scales": true,
        "min_class": ShipClass.Capital,
        "effect": "+1 AC, +20 maximum hit points"
    },
    "augmented_plating": {
        "cost": 25000,
        "cost_scales": true,
        "power": 0,
        "mass": 1,
        "mass_scales": true,
        "min_class": ShipClass.Fighter,
        "effect": "+2 AC, -1 Speed"
    },
    "boarding_countermeasures": {
        "cost": 25000,
        "cost_scales": true,
        "power": 2,
        "mass": 1,
        "mass_scales": true,
        "min_class": ShipClass.Frigate,
        "effect": "Makes enemy boarding more difficult"
    },
    "burst_ecm_generator": {
        "cost": 25000,
        "cost_scales": true,
        "power": 2,
        "mass": 1,
        "mass_scales": true,
        "min_class": ShipClass.Frigate,
        "effect": "Negate one successful hit"
    },
    "foxer_drones": {
        "cost": 10000,
        "cost_scales": true,
        "power": 2,
        "mass": 1,
        "mass_scales": true,
        "min_class": ShipClass.Cruiser,
        "effect": "+2 AC for one round when fired, Ammo 5"
    },
    "grav_eddy_displacer": {
        "cost": 50000,
        "cost_scales": true,
        "power": 5,
        "mass": 2,
        "mass_scales": true,
        "min_class": ShipClass.Frigate,
        "effect": "1 in 6 chance of any given attack missing."
    },
    "hardened_polyceramic_overlay": {
        "cost": 25000,
        "cost_scales": true,
        "power": 0,
        "mass": 1,
        "mass_scales": true,
        "min_class": ShipClass.Fighter,
        "effect": "AP quality of attacking weapons reduced by 5"
    },
    "planetary_defense_array": {
        "cost": 50000,
        "cost_scales": true,
        "power": 4,
        "mass": 2,
        "mass_scales": true,
        "min_class": ShipClass.Frigate,
        "effect": "Anti-impact and anti-nuke surface defenses"
    },
    "point_defense_lasers": {
        "cost": 10000,
        "cost_scales": true,
        "power": 3,
        "mass": 2,
        "mass_scales": true,
        "min_class": ShipClass.Frigate,
        "effect": "+2 AC versus weapons that use ammo"
    }
}

export type ShipFitting = {
    min_class: ShipClass;
    cost: number,
    cost_scales?: boolean,
    mass: number,
    mass_scales?: boolean,
    power: number,
    power_scales?: boolean,
    effect: string,
};

export const ShipFittings: Record<string, ShipFitting> = {
    "advanced_lab": {
        "cost": 10000,
        "cost_scales": true,
        "power": 1,
        "power_scales": true,
        "mass": 2,
        "min_class": ShipClass.Frigate,
        "effect": "Skill bonus for analysis and research"
    },
    "advanced_nav_computer": {
        "cost": 10000,
        "cost_scales": true,
        "power": 1,
        "power_scales": true,
        "mass": 0,
        "min_class": ShipClass.Frigate,
        "effect": "Adds +2 for traveling familiar spike courses"
    },
    "amphibious_operation": {
        "cost": 25000,
        "power": 1,
        "mass": 1,
        "mass_scales": true,
        "min_class": ShipClass.Fighter,
        "effect": "Can land and can operate under water"
    },
    "armory": {
        "cost": 10000,
        "cost_scales": true,
        "power": 0,
        "mass": 0,
        "min_class": ShipClass.Frigate,
        "effect": "Weapons and armor for the crew"
    },
    "atmospheric_configuration": {
        "cost": 5000,
        "cost_scales": true,
        "power": 0,
        "mass": 1,
        "mass_scales": true,
        "min_class": ShipClass.Fighter,
        "effect": "Can land; frigates and fighters only."
    },
    "auto_targeting_system": {
        "cost": 50000,
        "power": 1,
        "mass": 0,
        "min_class": ShipClass.Fighter,
        "effect": "Fires one weapon system without a gunner"
    },
    "automation_support": {
        "cost": 10000,
        "cost_scales": true,
        "power": 2,
        "mass": 1,
        "min_class": ShipClass.Fighter,
        "effect": "Ship can use simple robots as crew"
    },
    "boarding_tubes": {
        "cost": 5000,
        "cost_scales": true,
        "power": 0,
        "mass": 1,
        "min_class": ShipClass.Frigate,
        "effect": "Allows boarding of a hostile disabled ship"
    },
    "cargo_lighter": {
        "cost": 25000,
        "power": 0,
        "mass": 2,
        "min_class": ShipClass.Frigate,
        "effect": "Orbit-to-surface cargo shuttle"
    },
    "cargo_space": {
        "cost": 0,
        "power": 0,
        "mass": 1,
        "min_class": ShipClass.Fighter,
        "effect": "Pressurized cargo space"
    },
    "cold_sleep_pods": {
        "cost": 5000,
        "cost_scales": true,
        "power": 1,
        "mass": 1,
        "min_class": ShipClass.Frigate,
        "effect": "Keeps occupants in stasis"
    },
    "colony_core": {
        "cost": 100000,
        "cost_scales": true,
        "power": 4,
        "mass": 2,
        "mass_scales": true,
        "min_class": ShipClass.Frigate,
        "effect": "Ship can be deconstructed into a colony base"
    },
    "drill_course_regulator": {
        "cost": 25000,
        "cost_scales": true,
        "power": 1,
        "power_scales": true,
        "mass": 1,
        "min_class": ShipClass.Frigate,
        "effect": "Common drill routes become auto-successes"
    },
    "drive_2_upgrade": {
        "cost": 10000,
        "cost_scales": true,
        "power": 1,
        "power_scales": true,
        "mass": 1,
        "mass_scales": true,
        "min_class": ShipClass.Fighter,
        "effect": "Upgrade a spike drive to drive-2 rating"
    },
    "drive_3_upgrade": {
        "cost": 20000,
        "cost_scales": true,
        "power": 2,
        "power_scales": true,
        "mass": 2,
        "mass_scales": true,
        "min_class": ShipClass.Frigate,
        "effect": "Upgrade a spike drive to drive-3 rating"
    },
    "drive_4_upgrade": {
        "cost": 40000,
        "cost_scales": true,
        "power": 2,
        "power_scales": true,
        "mass": 3,
        "mass_scales": true,
        "min_class": ShipClass.Frigate,
        "effect": "Upgrade a spike drive to drive-4 rating"
    },
    "drive_5_upgrade": {
        "cost": 100000,
        "cost_scales": true,
        "power": 3,
        "power_scales": true,
        "mass": 3,
        "mass_scales": true,
        "min_class": ShipClass.Frigate,
        "effect": "Upgrade a spike drive to drive-5 rating"
    },
    "drive_6_upgrade": {
        "cost": 500000,
        "cost_scales": true,
        "power": 3,
        "power_scales": true,
        "mass": 4,
        "mass_scales": true,
        "min_class": ShipClass.Cruiser,
        "effect": "Upgrade a spike drive to drive-6 rating"
    },
    "drop_pod": {
        "cost": 300000,
        "power": 0,
        "mass": 2,
        "min_class": ShipClass.Frigate,
        "effect": "Stealthed landing pod for troops"
    },
    "exodus_bay": {
        "cost": 250000,
        "power": 2,
        "mass": 4,
        "min_class": ShipClass.Capital,
        "effect": "Holds a thousand cold sleep passengers"
    },
    "extended_life_support": {
        "cost": 5000,
        "cost_scales": true,
        "power": 1,
        "power_scales": true,
        "mass": 1,
        "mass_scales": true,
        "min_class": ShipClass.Fighter,
        "effect": "Doubles maximum crew size"
    },
    "extended_medbay": {
        "cost": 5000,
        "cost_scales": true,
        "power": 1,
        "mass": 1,
        "min_class": ShipClass.Frigate,
        "effect": "Can provide medical care to more patients"
    },
    "extended_stores": {
        "cost": 2500,
        "cost_scales": true,
        "power": 0,
        "mass": 1,
        "min_class": ShipClass.Fighter,
        "effect": "Maximum life support duration is doubled"
    },
    "fuel_bunkers": {
        "cost": 2500,
        "cost_scales": true,
        "power": 0,
        "mass": 1,
        "min_class": ShipClass.Fighter,
        "effect": "Adds fuel for one more drill between refuelings"
    },
    "fuel_scoops": {
        "cost": 5000,
        "cost_scales": true,
        "power": 2,
        "mass": 1,
        "mass_scales": true,
        "min_class": ShipClass.Frigate,
        "effect": "Ship can scoop fuel from a gas giant or star"
    },
    "hydroponic_production": {
        "cost": 10000,
        "cost_scales": true,
        "power": 1,
        "power_scales": true,
        "mass": 2,
        "mass_scales": true,
        "min_class": ShipClass.Cruiser,
        "effect": "Ship produces life support resources"
    },
    "lifeboats": {
        "cost": 2500,
        "cost_scales": true,
        "power": 0,
        "mass": 1,
        "min_class": ShipClass.Frigate,
        "effect": "Emergency escape craft for a ship's crew"
    },
    "luxury_cabins": {
        "cost": 10000,
        "cost_scales": true,
        "power": 1,
        "mass": 1,
        "mass_scales": true,
        "min_class": ShipClass.Frigate,
        "effect": "10% of the max crew get luxurious quarters"
    },
    "mobile_extractor": {
        "cost": 50000,
        "power": 2,
        "mass": 1,
        "min_class": ShipClass.Frigate,
        "effect": "Space mining and refinery fittings"
    },
    "mobile_factory": {
        "cost": 50000,
        "cost_scales": true,
        "power": 3,
        "mass": 2,
        "mass_scales": true,
        "min_class": ShipClass.Cruiser,
        "effect": "Self-sustaining factory and repair facilities"
    },
    "precognitive_nav_chamber": {
        "cost": 100000,
        "cost_scales": true,
        "power": 1,
        "mass": 0,
        "min_class": ShipClass.Frigate,
        "effect": "Allows a precog to assist in navigation"
    },
    "psionic_anchorpoint": {
        "cost": -1,
        "power": 3,
        "mass": 0,
        "min_class": ShipClass.Frigate,
        "effect": "Focal point for allied psychics' powers"
    },
    "sensor_mask": {
        "cost": 10000,
        "cost_scales": true,
        "power": 1,
        "power_scales": true,
        "mass": 0,
        "min_class": ShipClass.Frigate,
        "effect": "At long distances, disguise ship as another"
    },
    "ship_bay_fighter": {
        "cost": 200000,
        "power": 0,
        "mass": 2,
        "min_class": ShipClass.Cruiser,
        "effect": "Carrier housing for a fighter"
    },
    "ship_bay_frigate": {
        "cost": 1000000,
        "power": 1,
        "mass": 4,
        "min_class": ShipClass.Capital,
        "effect": "Carrier housing for a frigate"
    },
    "ships_locker": {
        "cost": 2000,
        "cost_scales": true,
        "power": 0,
        "mass": 0,
        "min_class": ShipClass.Frigate,
        "effect": "General equipment for the crew"
    },
    "shiptender_mount": {
        "cost": 25000,
        "cost_scales": true,
        "power": 1,
        "mass": 1,
        "min_class": ShipClass.Frigate,
        "effect": "Allow another ship to hitch on a spike drive"
    },
    "smugglers_hold": {
        "cost": 2500,
        "cost_scales": true,
        "power": 0,
        "mass": 1,
        "min_class": ShipClass.Fighter,
        "effect": "Small amount of well-hidden cargo space"
    },
    "survey_sensor_array": {
        "cost": 5000,
        "cost_scales": true,
        "power": 2,
        "mass": 1,
        "min_class": ShipClass.Frigate,
        "effect": "Improved planetary sensory array"
    },
    "system_drive": {
        "cost": -1,
        "power": 1,
        "power_scales": true,
        "mass": 2,
        "mass_scales": true,
        "min_class": ShipClass.Fighter,
        "effect": "Replace spike drive with small system drive"
    },
    "teleportation_pads": {
        "cost": -1,
        "power": 1,
        "mass": 1,
        "min_class": ShipClass.Frigate,
        "effect": "Pretech teleportation to and from ship"
    },
    "tractor_beams": {
        "cost": 10000,
        "cost_scales": true,
        "power": 2,
        "mass": 1,
        "min_class": ShipClass.Frigate,
        "effect": "Manipulate objects in space at a distance"
    },
    "vehicle_transport_fittings": {
        "cost": 2500,
        "cost_scales": true,
        "power": 0,
        "mass": 1,
        "min_class": ShipClass.Fighter,
        "effect": "Halve tonnage space of carried vehicles"
    },
    "workshop": {
        "cost": 500,
        "cost_scales": true,
        "power": 1,
        "mass": 0,
        "mass_scales": true,
        "min_class": ShipClass.Frigate,
        "effect": "Automated tech workshops for maintenance"
    }
}
