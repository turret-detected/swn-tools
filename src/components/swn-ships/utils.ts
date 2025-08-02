import { ShipClass } from "./types";

export function arrayToDictionary<T, K extends keyof T>(array: T[], key: K): Record<string, T> {
    return array.reduce<Record<string, T>>((obj, item) => {
        // console.log(obj)
        const objKey = item[key] as string
        obj[objKey.replace(" ", "_").toLowerCase()] = item;
        return obj;
    }, {});
}

export function scaleCostToShipSize(cost: number, size: ShipClass): Number {
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

export function scaleMassOrPowerToShipSize(cost: number, size: ShipClass): Number {
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
