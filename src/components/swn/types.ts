

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

class ShipWeapon {
    Name!: string;
    Desc!: string;
    Cost!: number;
    Damage!: Dice;
    Power!: number;
    Mass!: number;
    Hardpoints!: number;
    MinClass!: ShipClass;
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
    Hull!: ShipHull;
    HitPoints!: number;
    Armor!: number;
    ArmorClass!: number;
    Speed!: number;
    Power!: ShipAttr;
    Mass!: ShipAttr;
    Hardpoints!: ShipAttr;
    Crew!: CrewAttr;
    NPC!: NPCAttr;
    Weapons!: Array<ShipWeapon>;
    Defenses!: Array<ShipDefense>;
    Fittings!: Array<ShipFitting>;

    constructor(hull: ShipHull, weapons: Array<ShipWeapon>, defenses:Array<ShipDefense>, fittings:Array<ShipFitting>) {
        console.log(hull)
        // TODO fill out fields based on hull, then adding attachments
    }
}
