import type { RangeResult } from "./dice";

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

// all official ship defenses scale in cost and mass, but not power
// be careful for later when we want to add
// custom ship components that we don't hard code this somewhere

export const ShipDefensesCSV: string = `
name,cost,power,mass,class,desc
Ablative Hull Compartments,100000,5,2,Capital,"+1 AC, +20 maximum hit points"
Augmented Plating,25000,0,1,Fighter,"+2 AC, -1 Speed"
Boarding Countermeasures,25000,2,1,Frigate,"Makes enemy boarding more difficult"
Burst ECM Generator,25000,2,1,Frigate,"Negate one successful hit"
Foxer Drones,10000,2,1,Cruiser,"+2 AC for one round when fired, Ammo 5"
Grav Eddy Displacer,50000,5,2,Frigate,"1 in 6 chance of any given attack missing."
Hardened Polyceramic Overlay,25000,0,1,Fighter,"AP quality of attacking weapons reduced by 5"
Planetary Defense Array,50000,4,2,Frigate,"Anti-impact and anti-nuke surface defenses"
Point Defense Lasers,10000,3,2,Frigate,"+2 AC versus weapons that use ammo"
`

// TODO
//
// Need to separate or otherwise handle */# costs

export const ShipFittingsCSV: string = `
name,cost,power,mass,class,desc
Advanced lab,10k*,1,2,Frigate,"Skill bonus for analysis and research"
Advanced nav computer,10k*,1,0,Frigate,"Adds +2 for traveling familiar spike courses"
Amphibious operation,25k*,1,1#,Fighter,"Can land and can operate under water"
Armory,10k*,0,0,Frigate,"Weapons and armor for the crew"
Atmospheric configuration,5k*,0,1#,Fighter,"Can land: frigates and fighters only."
Auto-targeting system,50k,1,0,Fighter,"Fires one weapon system without a gunner"
Automation support,10k*,2,1,Fighter,"Ship can use simple robots as crew"
Boarding tubes,5k*,0,1,Frigate,"Allows boarding of a hostile disabled ship"
Cargo lighter,25k,0,1,Frigate,"Orbit-to-surface cargo shuttle"
Cargo space,No cost,0,2,Fighter,"Pressurized cargo space"
Cold sleep pods,5k*,1,1,Frigate,"Keeps occupants in stasis"
Colony core,100k*,4,2#,Frigate,"Ship can be deconstructed into a colony base"
Drill course regulator,25k*,1#,1,Frigate,"Common drill routes become auto-successes"
Drive-2 upgrade,10k*,1#,1#,Fighter,"Upgrade a spike drive to drive-2 rating"
Drive-3 upgrade,20k*,2#,2#,Frigate,"Upgrade a spike drive to drive-3 rating"
Drive-4 upgrade,40k*,2#,3#,Frigate,"Upgrade a spike drive to drive-4 rating"
Drive-5 upgrade,100k*,3#,3#,Cruiser,"Upgrade a spike drive to drive-5 rating"
Drive-6 upgrade,500k*,3#,4#,Frigate,"Upgrade a spike drive to drive-6 rating"
Drop pod,300k,0,2,Fighter,"Stealthed landing pod for troops"
Emissions dampers,25k*,1#,1#,Fighter,"Adds +2 to skill checks to avoid detection"
Exodus bay,50k*,1#,2#,Cruiser,"House vast numbers of cold sleep passengers"
Extended life support,5k*,1#,1#,Fighter,"Doubles maximum crew size"
Extended medbay,5k*,1,1,Frigate,"Can provide medical care to more patients"
Extended stores,2.5k*,0,1#,Fighter,"Maximum life support duration is doubled"
Fuel bunkers,2.5k*,0,1,Frigate,"Adds fuel for one more drill between fuelings"
Fuel scoops,5k*,2,1#,Fighter,"Ship can scoop fuel from a gas giant or star"
Hydroponic production,10k*,1#,2#,Frigate,"Ship produces life support resources"
Lifeboats,2.5k*,0,1#,Frigate,"Emergency escape craft for a ship's crew"
Luxury cabins,10k*,1,2#,Frigate,"10% of the max crew get luxurious quarters"
Mobile extractor,50k,2,0,Cruiser,"Space mining and refinery fittings"
Mobile factory,50k*,3,0,Frigate,"Self-sustaining factory and repair facilities"
Precognitive nav chamber,100k*,1,2,Frigate,"Allows a precog to assist in navigation"
Psionic anchorpoint,Special,3,4,Frigate,"Focal point for allied psychics' powers"
Sensor mask,10k*,1#,0,Capital,"At long distances, disguise ship as another"
Ship bay/fighter,200k,0,1,Frigate,"Carrier housing for a fighter"
Ship bay/frigate,1m,1,1,Fighter,"Carrier housing for a frigate"
Ship's locker,2k*,0,1,Frigate,"General equipment for the crew"
Shiptender mount,25k*,1,1,Fighter,"Allow another ship to hitch on a spike drive"
Smuggler's hold,2.5k*,0,1,Frigate,"Small amount of well-hidden cargo space"
Survey sensor array,5k*,2,1,Frigate,"Improved planetary sensory array"
System drive,Special,+1#,1#,Frigate,"Replace spike drive with small system drive"
Teleportation pads,Special,1,2#,Fighter,"Pretech teleportation to and from ship"
Tractor beams,10k*,2,0,Frigate,"Manipulate objects in space at a distance"
Vehicle transport fittings,2.5k*,0,1,Frigate,"Halve tonnage space of carried vehicles"
Workshop,500*,1,1,Frigate,"Automated tech workshops for maintenance"
`