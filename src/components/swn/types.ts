

class Dice {
    Count: number;
    Die: number;
    Bonus: number;

    constructor(num: number, die: number, bonus: number) {
        this.Count = num;
        this.Die = die;
        this.Bonus = bonus;
    }
}

enum ShipClass {
    Fighter = "fighter",
    Frigate = "frigate",
    Cruiser = "cruiser",
    Capital = "capital"
}

function ToShipClass(shipClass: string): ShipClass {
    return shipClass.toLowerCase() as ShipClass
}

class ShipAttr {
    Max!: number;
    Free!: number;

    constructor(free: number, max: number) {
        this.Max = max
        this.Free = free
    }
}

class CrewAttr {
    Min!: number;
    Max!: number;

    constructor(s: string) {
        const arr = s.split("/")
        this.Max = Number(arr[1])
        this.Min = Number(arr[0])
    }
}

class NPCAttr {
    CommandPoints!: number;
    CrewSkill!: number;
}

export class ShipWeapon {
    Name!: string;
    Desc!: string;
    Cost!: number;
    Damage!: Dice;
    Power!: number;
    Mass!: number;
    TechLevel!: number;
    Hardpoints!: number;
    MinClass!: ShipClass;
    Qualities!: string[]

    // use this for reading csv rows
    constructor(obj: any) {
        this.Name = obj.name;
        this.Cost = obj.cost;
        this.Damage = obj.dmg;
        this.Power = obj.power;
        this.Mass = obj.mass;
        this.Hardpoints = obj.hardp;
        this.TechLevel = obj.tl;
        this.MinClass = ToShipClass(obj.class);

        // TODO ship qualities
    }
}

class ShipDefense {
    Name!: string;
    Desc!: string;
    Cost!: number;
    Power!: number;
    Mass!: number;
    CostMulti!: boolean;
    PowerMulti!: boolean;
    MassMulti!: boolean;
    MinClass!: ShipClass;
}

class ShipFitting {
    Name!: string;
    Desc!: string;
    Cost!: number;
    Power!: number;
    Mass!: number;
    CostMulti!: boolean;
    PowerMulti!: boolean;
    MassMulti!: boolean;
    MinClass!: ShipClass;
}

export class ShipHull {
    Name: string;
    Cost: number;
    Speed: number;
    Armor: number;
    HitPoints: number;
    Crew: CrewAttr;
    ArmorClass: number;
    Power: number;
    Mass: number;
    Hardpoints: number;
    Class: ShipClass

    // use this for reading csv rows
    constructor(obj: any) {
        this.Name = obj.name;
        this.Cost = obj.cost;
        this.Speed = obj.speed;
        this.Armor = obj.armor;
        this.HitPoints = obj.hp;
        this.Crew = new CrewAttr(obj.crew);
        this.ArmorClass = obj.ac;
        this.Power = obj.power;
        this.Mass = obj.mass;
        this.Hardpoints = obj.hardp;
        this.Class = ToShipClass(obj.class);
    }
}

// type ShipModifier = () => Ship;

export class Ship {
    Name!: string;
    Hull!: string;
    HitPoints!: number;
    Armor!: number;
    ArmorClass!: number;
    Speed!: number;
    Power!: ShipAttr;
    Mass!: ShipAttr;
    Hardpoints!: ShipAttr;
    Crew!: CrewAttr;
    NPC!: NPCAttr;
    Cost!: number;
    Weapons!: Array<ShipWeapon>;
    Defenses!: Array<ShipDefense>;
    Fittings!: Array<ShipFitting>;

    constructor(hull: ShipHull, weapons: Array<ShipWeapon>, defenses:Array<ShipDefense>, fittings:Array<ShipFitting>) {
        this.Hull = hull.Name
        this.HitPoints = hull.HitPoints
        this.Armor = hull.Armor
        this.ArmorClass = hull.ArmorClass
        this.Speed = hull.Speed
        this.Power = new ShipAttr(hull.Power, hull.Power)
        this.Mass = new ShipAttr(hull.Mass, hull.Mass)
        this.Hardpoints = new ShipAttr(hull.Hardpoints, hull.Hardpoints)
        this.Crew = hull.Crew
        this.Cost = hull.Cost
        
        for (var weapon of weapons) {
            this.applyWeapon(weapon)
        }
        this.Weapons = weapons

        for (var defense of defenses) {
            this.applyDefense(defense)
        }
        this.Defenses = defenses

        for (var fitting of fittings) {
            this.applyFitting(fitting)
        }
        this.Fittings = fittings

        console.log(hull)
        // TODO fill out fields based on hull, then adding attachments
    }

    applyWeapon(weapon: ShipWeapon): void {
        // TODO check min class size
        
        if (this.Hardpoints.Free < weapon.Hardpoints) {
            throw new Error("insufficent hardpoints")
        }
        if (this.Power.Free < weapon.Power) {
            throw new Error("insufficent power")
        }
        if (this.Mass.Free < weapon.Mass) {
            throw new Error("insufficent mass")
        }

        // javascript is so dumb that this is how i have to add numbers
        this.Cost -= -weapon.Cost
        this.Hardpoints.Free -= +weapon.Hardpoints
        this.Power.Free -= +weapon.Power
        this.Mass.Free -= +weapon.Mass
    }

    applyDefense(defense: ShipDefense): void {
        // TODO
    }

    applyFitting(fitting: ShipFitting): void {
        // TODO
    }

    // Raw json only, TODO: real export
    json(): string {
        return JSON.stringify(this)
    }
}
