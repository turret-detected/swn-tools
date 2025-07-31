import Papa from 'papaparse';
import { ShipWeapon } from "./types";
import { arrayToDictionary } from "./utils";
import { ShipWeaponsCSV } from '../generator/official-tables';



function parseWeapons(csv: string): ShipWeapon[] {
    const parsed = Papa.parse(csv, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
    })

    if (parsed.errors.length > 0) {
        throw new Error(`CSV parse error: ${parsed.errors[0].message}`);
    }

    return parsed.data.map((row: any) => new ShipWeapon(row));
}

const weapons: ShipWeapon[] = parseWeapons(ShipWeaponsCSV)

export const WeaponMap = arrayToDictionary(weapons, 'Name');
