import { NPCCareers, NPCEyeColor, NPCGender, NPCHairColor, NPCHairStyle, NPCOutfitColor, NPCOutfitStyle, NPCSize, NPCSkinTone } from "../generator/custom-tables"
import { RollOnList } from "../generator/random"
import { faker } from '@faker-js/faker'

export type NPCAttr = {
    Name: string
    Gender: string
    Career: string
    SkinTone: string
    EyeColor: string
    HairColor: string
    HairStyle: string
    Size: string
    OutfitStyle: string
    OutfitColor: string
}

export function GenerateNPC(): NPCAttr {
    const sex = faker.person.sexType()

    return {
        Name: faker.person.firstName(sex) + " " + faker.person.lastName(),
        Gender: sex,
        Career: RollOnList(NPCCareers),
        SkinTone: RollOnList(NPCSkinTone),
        EyeColor: RollOnList(NPCEyeColor),
        HairColor: RollOnList(NPCHairColor),
        HairStyle: RollOnList(NPCHairStyle),
        Size: RollOnList(NPCSize),
        OutfitStyle: RollOnList(NPCOutfitStyle),
        OutfitColor: RollOnList(NPCOutfitColor),
    }
}
