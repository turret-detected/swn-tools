import Papa from 'papaparse';
import { ShipHull } from "./types";
import { arrayToDictionary } from "./utils";
import { ShipHullsCSV } from '../generator/official-tables';



function parseShipHulls(csv: string): ShipHull[] {
    const parsed = Papa.parse(csv, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
    })

    if (parsed.errors.length > 0) {
        throw new Error(`CSV parse error: ${parsed.errors[0].message}`);
    }

    return parsed.data.map((row: any) => new ShipHull(row));
}

const hulls: ShipHull[] = parseShipHulls(ShipHullsCSV)

export const HullMap = arrayToDictionary(hulls, 'Name');
