export type Planet = {
    name: string,
    environment: Environment,
    economy: Economy,
    society: Society,
}

export type Environment = {
    temperate: string,
    atmosphere: string,
    biosphere: string,
    hydrosphere: string,
    geology: string,
    geography: string,
}

export type Economy = {
    type: string
    population: string,
    tech: string,
    wealth: string,
    stability: string,
    situations: string,
    imports: string,
    exports: string,
}

export type Society = {
    government: string,
    capital: string,
    religion: string,
    traits: string,
    law: string,
    settlements: string,
    orbitals: string,
}
