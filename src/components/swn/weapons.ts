import Papa from 'papaparse';
import { ShipWeapon } from "./types";
import { arrayToDictionary } from "./utils";


const weaponCSV: string = `
name,cost,dmg,power,mass,hardp,class,tl,qual_a,qual_b,qual_c,ammo_cost
Multifocal Laser,100000,1d4,5,1,1,Fighter,4,AP 20,,,
Reaper Battery,100000,3d4,4,1,1,Fighter,4,Clumsy,,,
Fractal Impact Charge,200000,2d6,5,1,1,Fighter,4,AP 15,Ammo 4,,500
Polyspectral MES Beam,2000000,2d4,5,1,1,Fighter,5,AP 25,,,
Sandthrower,50000,2d4,3,1,1,Fighter,4,Flak,,,
Flak Emitter Battery,500000,2d6,5,3,1,Frigate,4,AP 10,Flak,,
Torpedo Launcher,500000,3d8,10,3,1,Frigate,4,AP 20,Ammo 4,,2500
Charged Particle Caster,800000,3d6,10,1,2,Frigate,4,AP 15,Clumsy,,
Plasma Beam,700000,3d6,5,2,2,Frigate,4,AP 10,,,
Mag Spike Array,1000000,2d6+2,5,2,2,Frigate,4,Flak,AP 10,Ammo 5,5000
Nuclear Missiles,50000,Special,5,1,2,Frigate,4,Ammo 5,,,5000
Spinal Beam Cannon,15000000,3d10,10,5,3,Cruiser,4,AP 15,Clumsy,,
Smart Cloud,2000000,3d10,10,5,2,Cruiser,4,Cloud,Clumsy,,
Gravcannon,2000000,4d6,15,4,3,Cruiser,4,AP 20,,,
Spike Inversion Projector,25000000,3d8,10,3,3,Cruiser,4,AP 15,,,
Vortex Tunnel Inductor,5000000,3d20,20,10,4,Capital,4,AP 20,Clumsy,,
Mass Cannon,5000000,2d20,10,5,4,Capital,4,AP 20,Ammo 4,,50000
Lightning Charge Mantle,4000000,1d20,15,5,2,Capital,4,AP 5,Cloud,,
Singularity Gun,20000000,5d20,25,10,5,Capital,5,AP 25,,,
`

function parseWeapons(csv: string): ShipWeapon[] {
    const parsed = Papa.parse(csv, {
        header: true,
        skipEmptyLines: true,
    })

    if (parsed.errors.length > 0) {
        throw new Error(`CSV parse error: ${parsed.errors[0].message}`);
    }

    return parsed.data.map((row: any) => new ShipWeapon(row));
}

const weapons: ShipWeapon[] = parseWeapons(weaponCSV)

export const WeaponMap = arrayToDictionary(weapons, 'Name');
