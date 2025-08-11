import { PlanetNames, StarTypeTable } from "../generator/custom-tables";
import { RollDie, RollOnTable, RollUniqueOnList } from "../generator/random";
import { GenerateStarName } from "../generator/star-names";
import type { StarType } from "../generator/types";
import { GenerateNonViablePlanet, GeneratePlanet, type Planet } from "./planet";

export type StarSystem = {
    name: string,
    planets: Planet[],
    type: StarType,
}

export function GenerateStarSystem(): StarSystem {
    let planets = [];

    const beforePlanetCount = RollDie(4)

    // Generate 1-4 planets before
    for (let index = 0; index < beforePlanetCount; index++) {
        planets.push(GenerateNonViablePlanet())
    }

    // Generate viable planet
    planets.push(GeneratePlanet())

    const afterPlanetCount = RollDie(4)

    // Generate 1-4 planets after
    for (let index = 0; index < afterPlanetCount; index++) {
        planets.push(GenerateNonViablePlanet())
    }

    // Fix duplicate planet names
    let names: string[] = []

    planets.forEach(planet => {
        if (names.includes(planet.name)) {
            planet.name = RollUniqueOnList(PlanetNames, names)
        }
        names.push(planet.name)
    });

    return {
        name: GenerateStarName(),
        type: RollOnTable(StarTypeTable, 1, 100),
        planets: planets,
    }
}