import type { NPCCrew } from "./types";

export const NPCCrews: Record<string, NPCCrew> = {
    "civilian_normal": {
        "command_points": 4,
        "to_hit_bonus": 3,
        "skill_bonus": 1,
    },
    "civilian_elite": {
        "command_points": 5,
        "to_hit_bonus": 4,
        "skill_bonus": 2,
    },
    "military_fighter_trained": {
        "command_points": 4,
        "to_hit_bonus": 4,
        "skill_bonus": 2,
    },
    "military_fighter_ace": {
        "command_points": 5,
        "to_hit_bonus": 5,
        "skill_bonus": 3,
    },
    "pirate_fighter": {
        "command_points": 4,
        "to_hit_bonus": 4,
        "skill_bonus": 2,
    },
    "pirate_frigate": {
        "command_points": 5,
        "to_hit_bonus": 3,
        "skill_bonus": 1,
    },
    "pirate_king": {
        "command_points": 6,
        "to_hit_bonus": 4,
        "skill_bonus": 2,
    },
    "military_frigate": {
        "command_points": 5,
        "to_hit_bonus": 4,
        "skill_bonus": 2,
    },
    "military_cruiser": {
        "command_points": 5,
        "to_hit_bonus": 5,
        "skill_bonus": 2,
    },
    "military_capital": {
        "command_points": 6,
        "to_hit_bonus": 6,
        "skill_bonus": 3,
    },
    "military_elite": {
        "command_points": 7,
        "to_hit_bonus": 7,
        "skill_bonus": 3,
    },
}

// From SWN:Revised pg 114
//
// Fighters and civilian ships usually have 4 Com-
// mand Points, military or pirate ships have 5, native
// spacers and highly-trained warships have 6, and the
// finest NPC crews in space can muster 7 points
