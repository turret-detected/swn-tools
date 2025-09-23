import { ShipClass } from "../generator/types"

export enum AttachmentType {
    Weapon = "weapon",
    Defense = "defense",
    Fitting = "fitting",
    Mod = "mod"
}


export type Component = {
    cost: number,
    cost_scales?: boolean,
    mass: number,
    mass_scales?: boolean,
    power: number,
    power_scales?: boolean,
    min_class: ShipClass,
}

export type Weapon = {
    dmg: string,
    hardpoints: number,
    ap: number,
    ammo?: number,
    ammo_cost?: number,
    tech_level: number,
    clumsy: boolean,
    flak: boolean,
    cloud: boolean,
}

export type Effect = {
    effect: string,
}

export type Nameable = {
    name?: string,
}

// Ship

export type ShipAttr = {
    max: number,
    free: number,
}

export type Ship = {
    class: ShipClass,
    hull: string,
    hit_points: number,
    armor: number,
    armor_class: number,
    speed: number,
    power: ShipAttr,
    mass: ShipAttr,
    min_crew: number,
    max_crew: number,
    cost: number,
    hardpoints: ShipAttr,
    weapons: Array<any>,
    defenses: Array<any>,
    fittings: Array<any>,
}