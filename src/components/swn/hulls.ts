import { CsvParser } from "@nolleh/simple-csv-parser";
import { ShipHull } from "./types"
import { arrayToDictionary } from "./utils";


const hullCSV: string = `
name,cost,speed,armor,hp,crew,ac,power,mass,hardp,class
Strike Fighter,200000,5,5,8,1/1,16,5,2,1,Fighter
Shuttle,200000,3,0,15,1/10,11,3,5,1,Fighter
Free Merchant,500000,3,2,20,1/6,14,10,15,2,Frigate
Patrol Boat,2500000,4,5,25,5/20,14,15,10,4,Frigate
Corvette,4000000,2,10,40,10/40,13,15,15,6,Frigate
Heavy Frigate,7000000,1,10,50,30/120,15,25,20,8,Frigate
Bulk Freighter,5000000,0,0,40,10/40,11,15,25,2,Cruiser
Fleet Cruiser,10000000,1,15,60,50/200,14,50,30,10,Cruiser
Battleship,50000000,0,20,100,200/1000,16,75,50,15,Capital
Carrier,60000000,0,10,75,300/1500,14,50,100,4,Capital
Small Station,5000000,-1,5,120,20/200,11,50,40,10,Cruiser
Large Station,40000000,-1,20,120,100/1000,17,125,75,30,Capital
`

const hulls: ShipHull[] = CsvParser.toObject<ShipHull>(hullCSV) // SO THIS DOESN'T WORK

export const hullMap = arrayToDictionary(hulls, 'Name');

