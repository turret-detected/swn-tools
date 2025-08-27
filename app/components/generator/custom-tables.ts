
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

// map of mineral to price per ton
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
    "TMA",
    "OWL",
    "WOLF",
]

export const StarPostfixes: string[] = [
    "Androma",
    "Cepheus",
    "Dracos",
    "Geminora",
    "Hydrae",
    "Imperi",
    "Nordae",
    "Pegasi",
    "Scorpii",
    "Tauri",
]

export const PlanetNames: string[] = [
    "Achea",
    "Alpena",
    "Arion",
    "Asyrea",
    "Aya",
    "Babylon",
    "Breton",
    "Delmarn",
    "Dunmore",
    "Ellii",
    "Fawlon",
    "Fremor",
    "Grimil",
    "Gullia",
    "Hana",
    "Hund",
    "Irena",
    "Kral",
    "Luft",
    "Lyonov",
    "Markova",
    "Medas",
    "Miria",
    "Morsa",
    "Morta",
    "Mylara",
    "Naron",
    "Parlin",
    "Pola",
    "Prestia",
    "Quenta",
    "Rego",
    "Retala",
    "Silon",
    "Stocklin",
    "Thrace",
    "Trinity",
    "Ugora",
    "Veles",
    "Vernol",
]

// https://en.wikipedia.org/wiki/List_of_Latin_names_of_countries
// might be some more good ones in here
export const PlanetNamesPostfixLatin: string[] = [
    "Achaea",
    "Arcadia",
    "Athena",
    "Austria",
    "Bohemia",
    "Britannia",
    "Bulgaria",
    "Caledonia",
    "Catalonia",
    "Europa",
    "Francia",
    "Germania",
    "Iberia",
    "Italia",
    "Mesia",
    "Olympia",
    "Polonia",
    "Prussia",
    "Romania",
    "Titania",
]

export const PlanetNamesPrefixLatin: string[] = [
    "Alta",
    "Astra",
    "Boreal",
    "Civitas",
    "Colonia",
    "Gloria",
    "Magna",
    "Nova",
    "Porta",
    "Prima",
    "Provincia",
    "Silva",
    "", // allow planets without prefixes
]

export const UppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export const AsteroidSpecials: string[] = [
    "Abandoned mine: 50% chance of finding pretech salvage",
    "Active listening station: 25% chance of a patrol ship intercept",
    "Ancient outpost: 80% chance of finding pretech salvage",
    "Ancient ship wreckage: 80% chance of finding pretech salvage",
    "Hazardous minerals: Dangerous radiation forces 1 save per hour while outside a ship or harvesting minerals",
    "Hidden mine: Miners are not willing to share their riches",
    "Hidden mine: Miners will trade minerals for supplies",
    "Isolated asteroid base: Inhabitants have something special to sell",
    "Isolated asteroid base: Inhabitants act according to a Reaction roll",
    "Isolated asteroid base: Inhabitants died decades or centuries ago",
    "Isolated asteroid base: Inhabitants are suffering from a disaster",
    "Secret pirate base: Roll Int/Program check to avoid being detected",
    "Trapped asteroid: Roll Dex/Pilot check to avoid 1d6 damage to your ship",
    "Trapped asteroid: Hostile pirates arrive within 1d6 hours"
]

export const CargoCommonOres: string[] = [
    "Copper",
    "Iron",
    "Tin",
    "Zinc",
    "Aluminum",
]

export const CargoUncommonOres: string[] = [
    "Cobalt",
    "Silver",
    "Gold",
    "Platinum"
]

export const PretechPrefix: string[] = [
    "Axion",
    "Chromatic",
    "Dimensional",
    "Entropic",
    "Gravitic",
    "Graviton",
    "Meson",
    "Metadimensional",
    "Nanotech",
    "Nanite",
    "Neutron",
    "Polymorphic",
    "Protonic",
    "Quantum",
    "Tachyon",
]

export const PretechSuffix: string[] = [
    "Capacitor",
    "Circuit",
    "Condenser",
    "Dynamo",
    "Lattice",
    "Lens",
    "Loom",
    "Manifold",
    "Matrix",
    "Multiplex",
    "Oscillator",
    "Projector",
    "Relay",
    "Transceiver",
]
