export type RangeResult<T> = {
    min: number; // inclusive
    max: number; // inclusive
    result: T;
};

function rollDie(sides: number): number {
    return Math.floor(Math.random() * sides) + 1;
}

function rollDice(count: number, sides: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
        total += rollDie(sides);
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

export function RollOnTable(table: RangeResult<string>[], diceCount: number, sides: number): string {
    const roll = rollDice(diceCount, sides);
    return getResultFromRangeTable(roll, table);
}

export function RollOnList(list: string[]): string {
    return list[Math.floor(Math.random() * list.length)]
}
