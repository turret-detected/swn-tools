import { ShipClass } from "../generator/types";

export function arrayToDictionary<T, K extends keyof T>(array: T[], key: K): Record<string, T> {
    return array.reduce<Record<string, T>>((obj, item) => {
        // console.log(obj)
        const objKey = item[key] as string
        obj[objKey.replace(" ", "_").toLowerCase()] = item;
        return obj;
    }, {});
}

export function scaleCostToShipSize(cost: number, size: ShipClass, scales?: boolean): number {
    if (scales == null || scales == false) {
        return cost
    }

    switch (size) {
        case ShipClass.Fighter:
            return cost;

        case ShipClass.Frigate:
            return cost * 10;

        case ShipClass.Cruiser:
            return cost * 25;

        case ShipClass.Capital:
            return cost * 100;
    }
}

export function scaleMassOrPowerToShipSize(cost: number, size: ShipClass, scales?: boolean): number {
    if (scales == null || scales == false) {
        return cost
    }

    switch (size) {
        case ShipClass.Fighter:
            return cost;

        case ShipClass.Frigate:
            return cost * 2;

        case ShipClass.Cruiser:
            return cost * 3;

        case ShipClass.Capital:
            return cost * 4;
    }
}

export function isAboveMinClass(actual: ShipClass, minimum: ShipClass): boolean {
    switch (minimum) {
        case ShipClass.Fighter:
            return true;

        case ShipClass.Frigate:
            return actual != ShipClass.Fighter

        case ShipClass.Cruiser:
            return actual != ShipClass.Fighter && actual != ShipClass.Frigate;

        case ShipClass.Capital:
            return actual == ShipClass.Capital;
    }
}

export function collapseDuplicates(strings: string[]): string[] {
    const counts = new Map<string, number>();

    // Count occurrences
    for (const s of strings) {
        counts.set(s, (counts.get(s) ?? 0) + 1);
    }

    // Build result
    const result: string[] = [];
    for (const [key, count] of counts.entries()) {
        if (count === 1) {
            result.push(key);
        } else {
            result.push(`${count} ${key}`);
        }
    }

    return result;
}