import { PlayerModel } from "../models/player-model";
import { StaticsModel } from "../models/statics-model";

export const isValidPlayer = (player:PlayerModel) => {
   return(
    typeof player.id === "number" &&
    typeof player.name === "string" &&
    typeof player.club === "string" &&
    typeof player.nationality === "string" &&
    typeof player.position === "string" &&
    typeof player.statics === "object" &&
    typeof player.statics.overall === "number" &&
    typeof player.statics.pace === "number" &&
    typeof player.statics.shooting === "number" &&
    typeof player.statics.passing === "number" &&
    typeof player.statics.dribbling === "number" &&
    typeof player.statics.defending === "number" &&
    typeof player.statics.physical === "number"
)
}

export const isValidStatics = (statics: StaticsModel): boolean => {
    return(
    typeof statics.overall === "number" &&
    typeof statics.pace === "number" &&
    typeof statics.shooting === "number" &&
    typeof statics.passing === "number" &&
    typeof statics.dribbling === "number" &&
    typeof statics.defending === "number" &&
    typeof statics.physical === "number"
    )
}

/* 
// export const isValidStatics = (statics: Partial<StaticsModel>): boolean => {
//  const validKeys = [
//     "overall", "pace", "shooting", "passing", "dribbling", "defending", "physical"
//   ];

//   for (const key of Object.keys(statics)) {
//     if (!validKeys.includes(key)) return false;
//     if (typeof statics[key as keyof StaticsModel] !== "number") return false;
//   }

//   return true;
// };*/
