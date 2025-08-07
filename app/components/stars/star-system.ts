import { AtmosphereTable, TemperatureTable, BiosphereTable, PopulationTable, TechLevelTable } from "../generator/official-tables";
import { NonViableWorldTypeTable, PlanetNames, StarTypeTable } from "../generator/custom-tables";
import { RollDie, RollOnList, RollOnTable } from "../generator/random";
import { StarType } from "../generator/types";


export class StarSystem {
    Name: string;
    StarType: StarType;
    Planets: Planet[];

    constructor(name: string) {
        this.Name = name;
        this.StarType = new StarType("unset", "white")
        this.Planets = [];
    }

    public Generate() {
        this.StarType = RollOnTable(StarTypeTable, 1, 100)

        const beforePlanetCount = RollDie(4)

        // Generate 1-4 planets before
        for (let index = 0; index < beforePlanetCount; index++) {
            this.Planets.push(GenerateNonViablePlanet())
        }

        // Generate viable planet
        this.Planets.push(GeneratePlanet())

        const afterPlanetCount = RollDie(4)

        // Generate 1-4 planets after
        for (let index = 0; index < afterPlanetCount; index++) {
            this.Planets.push(GenerateNonViablePlanet())
        }

        // TODO HANDLE DUPLICATE PLANET NAMES HERE
    }
}

// class SystemRender {
//     System: System;

//     constructor(system: System) {
//         this.System = system;
//     }
// }

export class ViablePlanet {
    Name: string;
    Temperate: string;
    Atmosphere: string;
    Biosphere: string;
    Population: string;
    TechLevel: string;

    constructor(
        name: string,
        temperate: string,
        atmosphere: string,
        biosphere: string,
        population: string,
        techLevel: string,
    ) {
        this.Name = name
        this.Temperate = temperate
        this.Atmosphere = atmosphere
        this.Biosphere = biosphere
        this.Population = population
        this.TechLevel = techLevel
    }
}



export function GeneratePlanet(): ViablePlanet {
    return new ViablePlanet(
        RollOnList(PlanetNames),
        RollOnTable(TemperatureTable, 2, 6),
        RollOnTable(AtmosphereTable, 2, 6),
        RollOnTable(BiosphereTable, 2, 6),
        RollOnTable(PopulationTable, 2, 6),
        RollOnTable(TechLevelTable, 2, 6),
    );
}


export class NonViablePlanet {
    Name: string;
    Type: string;

    constructor(name: string, type: string) {
        this.Name = name;
        this.Type = type;
    }
}

export function GenerateNonViablePlanet(): NonViablePlanet {
    return new NonViablePlanet(
        RollOnList(PlanetNames),
        RollOnTable(NonViableWorldTypeTable, 1, 10),
    )
}

export type Planet = ViablePlanet | NonViablePlanet

// class PlanetRender {
//     Planet: Planet;
//     // Orbit: number;
//     // Size: number;
//     // Type: string;

//     constructor(planet: Planet) {
//         this.Planet = planet;
//     }
// }
