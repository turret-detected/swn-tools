import { AsteroidDepositCount, AsteroidSpecials, MineralRarity, UppercaseLetters } from "../generator/custom-tables"
import { RandInt, RollDice, RollOnList, RollOnTable } from "../generator/random"

export type Deposit = {
    rarity: string,
    volume: number, // tons for extraction
}

export type Asteroid = {
    name: string,
    deposits: Deposit[]
    special: string | null
}

export function GenerateDeposit(): Deposit {
    const rarity = RollOnTable(MineralRarity, 1, 20)

    let volume = RollDice(2, 6)

    if (rarity === "common") {
        volume = RollDice(6, 6)
    }

    return {
        "rarity": rarity,
        "volume": volume
    }
}

export function GenerateAsteroid(): Asteroid {
    const deposits: Deposit[] = []

    for (let index = 0; index < RollOnTable(AsteroidDepositCount, 2, 6); index++) {
        deposits.push(GenerateDeposit())
    }

    let special = null

    if (RollDice(1, 20) === 20) {
        special = RollOnList(AsteroidSpecials)
    }

    return {
        name: GenerateAsteroidName(),
        deposits: deposits,
        special: special
    }
}

export function GenerateAsteroidName(): string {
    return RollOnList(UppercaseLetters) + RollOnList(UppercaseLetters) + RollOnList(UppercaseLetters) + "-" + RandInt(99999)
}