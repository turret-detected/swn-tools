import type { RangeResult } from "./dice";

// 1d20
export const PlanetNameTable: RangeResult<string>[] = [
    { min: 1, max: 1, result: "Luft" },
    { min: 2, max: 2, result: "Pola" },
    { min: 3, max: 3, result: "Gullia" },
    { min: 4, max: 4, result: "Morta" },
    { min: 5, max: 5, result: "Grimil" },
    { min: 6, max: 6, result: "Retala" },
    { min: 7, max: 7, result: "Stocklin" },
    { min: 8, max: 8, result: "Quenta" },
    { min: 9, max: 9, result: "Mylara" },
    { min: 10, max: 10, result: "Lyonov" },
    { min: 11, max: 11, result: "Delmarn" },
    { min: 12, max: 12, result: "Europa" },
    { min: 13, max: 13, result: "Parlin" },
    { min: 14, max: 14, result: "Fawlon" },
    { min: 15, max: 15, result: "Fremor" },
    { min: 16, max: 16, result: "Kral" },
    { min: 17, max: 17, result: "Vernol" },
    { min: 18, max: 18, result: "Renewal" },
    { min: 19, max: 19, result: "Hope" },
    { min: 20, max: 20, result: "Trinity" },
];

// 1d100
export const StarTypeTable: RangeResult<string>[] = [
    { min: 1, max: 3, result: "A-type" },
    { min: 4, max: 8, result: "F-type" },
    { min: 9, max: 30, result: "G-type" },
    { min: 31, max: 60, result: "K-type" },
    { min: 61, max: 95, result: "M-type" },
    { min: 96, max: 100, result: "Red Giant" },
]

// 1d10
export const NormalPlanetSizeTable: RangeResult<string>[] = [
    { min: 1, max: 1, result: "Tiny" },
    { min: 2, max: 4, result: "Small" },
    { min: 5, max: 9, result: "Medium" },
    { min: 10, max: 10, result: "Large" },
]

// 1d10
export const JovianPlanetSizeTable: RangeResult<string>[] = [
    { min: 1, max: 3, result: "Huge" },
    { min: 4, max: 7, result: "Giant" },
    { min: 8, max: 10, result: "Massive" },
]

// 1d100
export const ViableWorldTypeTable: RangeResult<string>[] = [
    { min: 1, max: 20, result: "Oceanic" },
    { min: 21, max: 69, result: "Terran" },
    { min: 70, max: 90, result: "Desert" },
    { min: 91, max: 94, result: "Barren" },
    { min: 95, max: 99, result: "Dysbaric" },
]

// 1d10
export const NonViableWorldTypeTable: RangeResult<string>[] = [
    { min: 1, max: 2, result: "Dysbaric" },
    { min: 3, max: 8, result: "Barren" },
    { min: 9, max: 10, result: "Jovian" },
]




