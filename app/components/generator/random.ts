export type RangeResult<T> = {
    min: number; // inclusive
    max: number; // inclusive
    result: T;
};

export function RollDie(sides: number): number {
    return RandInt(sides) + 1;
}

function rollDice(count: number, sides: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
        total += RollDie(sides);
    }
    return total;
}

function getResultFromRangeTable<T>(roll: number, table: RangeResult<T>[]): T {
    for (const entry of table) {
        if (roll >= entry.min && roll <= entry.max) {
            return entry.result;
        }
    }
    throw new RangeError(`No matching range for roll: ${roll}`);
}

export function RollOnTable<T>(table: RangeResult<T>[], diceCount: number, sides: number): T {
    const roll = rollDice(diceCount, sides);
    return getResultFromRangeTable(roll, table);
}

export function RollOnList<T>(list: T[]): T {
    return list[RandInt(list.length)]!
}

// exclusive of max value
export function RandInt(max: number): number {
    return Math.floor(Math.random() * max)
}