import { RandInt, RollOnList } from "./random"
import { StarPrefixes, StarPostfixes } from "./custom-tables"


export function GenerateStarName(): string {

    const flip = RandInt(2)

    if (flip > 0) {
        return RollOnList(StarPrefixes) + " " + (RandInt(10000) + 10)
    } else {
        return (1 + RandInt(99)) + " " + RollOnList(StarPostfixes)
    }
}