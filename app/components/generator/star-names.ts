import { RandInt, RollOnList } from "./dice"

const StarPrefixes: string[] = [
    "HD",
    "WASP",
    "LHS",
    "HIP",
]

const StarPostfixes: string[] = [
    "Hydrae",
    "Scorpii",
    "Pegasi",
    "Dracos",
    "Tauri",
    "Androma"
]

export function GenerateStarName(): string {

    const flip = RandInt(2)

    if (flip > 0) {
        return RollOnList(StarPrefixes) + " " + (RandInt(10000) + 10)
    } else {
        return RandInt(100) + " " + RollOnList(StarPostfixes)
    }
}