import { AtmosphereTable, TemperatureTable, BiosphereTable, PopulationTable, TechLevelTable, WorldTags } from "../generator/official-tables";
import { NonViableWorldTypeTable, PlanetNames, PlanetNamesPostfixLatin, PlanetNamesPrefixLatin } from "../generator/custom-tables";
import { RollOnList, RollOnTable, RollUniqueOnList } from "../generator/random";

// define structure of planet data

export type ViablePlanet = {
    name: string,
    temperate: string,
    atmosphere: string,
    biosphere: string,
    population: string,
    techLevel: string,
    tags: string[];
}

export type NonViablePlanet = {
    name: string,
    type: string;
}

export type Planet = ViablePlanet | NonViablePlanet

// define generators for planet data

export function GeneratePlanet(): ViablePlanet {
    const tag1 = RollOnList(WorldTags)
    const tag2 = RollUniqueOnList(WorldTags, [tag1])

    return {
        "name": (RollOnList(PlanetNamesPrefixLatin) + " " + RollOnList(PlanetNamesPostfixLatin)).trim(), // trim to allow "" for prefix
        "temperate": RollOnTable(TemperatureTable, 2, 6),
        "atmosphere": RollOnTable(AtmosphereTable, 2, 6),
        "biosphere": RollOnTable(BiosphereTable, 2, 6),
        "population": RollOnTable(PopulationTable, 2, 6),
        "techLevel": RollOnTable(TechLevelTable, 2, 6),
        "tags": [tag1, tag2],
    }
}

export function GenerateNonViablePlanet(): NonViablePlanet {
    return {
        "name": RollOnList(PlanetNames),
        "type": RollOnTable(NonViableWorldTypeTable, 1, 10),
    }
}
