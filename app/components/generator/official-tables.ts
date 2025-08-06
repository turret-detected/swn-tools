import type { RangeResult } from "./random";

// The below tables are ©2017 Sine Nomine Publishing, Inc.
// Taken from Stars Without Number Revised Free Edition, available here:
// https://www.drivethrurpg.com/en/product/230009/stars-without-number-revised-edition-free-version

export const AtmosphereTable: RangeResult<string>[] = [
  { min: 2, max: 2, result: "Corrosive, damaging to foreign objects" },
  { min: 3, max: 3, result: "Inert gas, useless for respiration" },
  { min: 4, max: 4, result: "Airless or thin to the point of suffocation" },
  { min: 5, max: 9, result: "Breathable mix" },
  { min: 10, max: 10, result: "Thick, but breathable with a pressure mask" },
  { min: 11, max: 11, result: "Invasive, penetrating suit seals" },
  { min: 12, max: 12, result: "Both corrosive and invasive in its effects" },
];

export const TemperatureTable: RangeResult<string>[] = [
  { min: 2, max: 2, result: "Frozen, locked in perpetual ice" },
  { min: 3, max: 3, result: "Cold, dominated by glaciers and tundra" },
  { min: 4, max: 5, result: "Variable cold with temperate places" },
  { min: 6, max: 8, result: "Temperate, Earthlike in its ranges" },
  { min: 9, max: 10, result: "Variable warm, with temperate places" },
  { min: 11, max: 11, result: "Warm, tropical and hotter in places" },
  { min: 12, max: 12, result: "Burning, intolerably hot on its surface" },
];

export const BiosphereTable: RangeResult<string>[] = [
  { min: 2, max: 2, result: "Remnant biosphere" },
  { min: 3, max: 3, result: "Microbial life forms exist" },
  { min: 4, max: 5, result: "No native biosphere" },
  { min: 6, max: 8, result: "Human-miscible biosphere" },
  { min: 9, max: 10, result: "Immiscible biosphere" },
  { min: 11, max: 11, result: "Hybrid biosphere" },
  { min: 12, max: 12, result: "Engineered biosphere" },
];

export const PopulationTable: RangeResult<string>[] = [
  { min: 2, max: 2, result: "Failed colony" },
  { min: 3, max: 3, result: "Outpost" },
  { min: 4, max: 5, result: "Fewer than a million inhabitants" },
  { min: 6, max: 8, result: "Several million inhabitants" },
  { min: 9, max: 10, result: "Hundreds of millions of inhabitants" },
  { min: 11, max: 11, result: "Billions of inhabitants" },
  { min: 12, max: 12, result: "Alien inhabitants" },
];

export const TechLevelTable: RangeResult<string>[] = [
  { min: 2, max: 2, result: "TL0, neolithic-level technology" },
  { min: 3, max: 3, result: "TL1, medieval technology" },
  { min: 4, max: 5, result: "TL2, early Industrial Age tech" },
  { min: 6, max: 8, result: "TL4, modern postech" },
  { min: 9, max: 10, result: "TL3, tech like that of present-day Earth" },
  { min: 11, max: 11, result: "TL4+, postech with specialties" },
  { min: 12, max: 12, result: "TL5, pretech with surviving infrastructure" },
];

export const ShipHullsCSV: string = `
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

export const ShipWeaponsCSV: string = `
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