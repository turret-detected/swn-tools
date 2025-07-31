import { AtmosphereTable, TemperatureTable, BiosphereTable, PopulationTable, TechLevelTable } from "../generator/official-tables";
import { PlanetNameTable } from "../generator/custom-tables";
import { RollOnTable } from "../generator/dice";

// class System {
//     Name: string;

//     constructor(name: string) {
//         this.Name = name;
//     }
// }

// class SystemRender {
//     System: System;

//     constructor(system: System) {
//         this.System = system;
//     }
// }

export class Planet {
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

export function GeneratePlanet(): Planet {
    return new Planet(
        RollOnTable(PlanetNameTable, 1, 20),
        RollOnTable(TemperatureTable, 2, 6),
        RollOnTable(AtmosphereTable, 2, 6),
        RollOnTable(BiosphereTable, 2, 6),
        RollOnTable(PopulationTable, 2, 6),
        RollOnTable(TechLevelTable, 2, 6),
    );
}

// class PlanetRender {
//     Planet: Planet;
//     // Orbit: number;
//     // Size: number;
//     // Type: string;

//     constructor(planet: Planet) {
//         this.Planet = planet;
//     }
// }
