
import type { RangeResult } from "./random";
import { type StarType } from "./types";


// ----
// Dice Tables
// ----

// 1d100
export const StarTypeTable: RangeResult<StarType>[] = [
    { min: 1, max: 3, result: { "name": "A-type", "color": "#DDEFFF" } },
    { min: 4, max: 8, result: { "name": "F-type", "color": "#FAF9F0" } },
    { min: 9, max: 30, result: { "name": "G-type", "color": "#FFE17B" } },
    { min: 31, max: 60, result: { "name": "K-type", "color": "#FFB560" } },
    { min: 61, max: 95, result: { "name": "M-type", "color": "#FF785A" } },
    { min: 96, max: 100, result: { "name": "Red Giant", "color": "#FF6B3C" } },
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

// 1d20
export const MineralRarity: RangeResult<string>[] = [
    { min: 1, max: 14, result: "common" },
    { min: 15, max: 18, result: "uncommon" },
    { min: 18, max: 19, result: "rare" },
    { min: 20, max: 20, result: "exotic" },
]

// 2d6
export const AsteroidDepositCount: RangeResult<number>[] = [
    { min: 2, max: 4, result: 0 },
    { min: 5, max: 9, result: 1 },
    { min: 10, max: 11, result: 2 },
    { min: 12, max: 12, result: 3 },
]

export const MineralRarityToPricePerTon = {
    "common": 300,
    "uncommon": 1500,
    "rare": 3000,
    "exotic": 6000,
}

// ----
// Any length tables
// ----


export const StarPrefixes: string[] = [
    "HD",
    "WASP",
    "LHS",
    "HIP",
    "JLS",
    "SLR",
    "MAST",
    "TMA"
]

export const StarPostfixes: string[] = [
    "Hydrae",
    "Scorpii",
    "Pegasi",
    "Dracos",
    "Tauri",
    "Androma",
    "Nordae",
    "Imperi"
]

export const PlanetNames: string[] = [
    "Luft",
    "Pola",
    "Gullia",
    "Morta",
    "Grimil",
    "Retala",
    "Stocklin",
    "Quenta",
    "Mylara",
    "Lyonov",
    "Delmarn",
    "Europa",
    "Parlin",
    "Fawlon",
    "Fremor",
    "Kral",
    "Vernol",
    "Renewal",
    "Hope",
    "Trinity",
    "Morsa",
    "Miria",
    "Alpena",
    "Dunmore",
    "Prestia",
]

// Letters
export const UppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
