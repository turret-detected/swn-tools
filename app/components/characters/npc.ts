import { NPCCareers, NPCEyeColor, NPCGender, NPCHairColor, NPCOutfitColor, NPCOutfitStyle, NPCSize, NPCSkinTone } from "../generator/custom-tables"
import { RollOnList } from "../generator/random"

export type NPCAttr = {
    Gender: string
    Career: string
    SkinTone: string
    EyeColor: string
    HairColor: string
    Size: string
    OutfitStyle: string
    OutfitColor: string
}

export function GenerateNPC(): NPCAttr {
    return {
        Gender: RollOnList(NPCGender),
        Career: RollOnList(NPCCareers),
        SkinTone: RollOnList(NPCSkinTone),
        EyeColor: RollOnList(NPCEyeColor),
        HairColor: RollOnList(NPCHairColor),
        Size: RollOnList(NPCSize),
        OutfitStyle: RollOnList(NPCOutfitStyle),
        OutfitColor: RollOnList(NPCOutfitColor),
    }
}
