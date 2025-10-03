export type StarType = {
    name: string, color: string
}

export enum ShipClass {
    Fighter = "fighter",
    Frigate = "frigate",
    Cruiser = "cruiser",
    Capital = "capital"
}

export type NPCCrew = {
    to_hit_bonus: number,
    skill_bonus: number,
    command_points: number,
}