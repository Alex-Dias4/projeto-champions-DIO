import * as data from "../data/players-database";
import { PlayerModel } from "../models/player-model";
import { StaticsModel } from "../models/statics-model";


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return data.loadDatabase();
}

export const findPlayersById = async (id: number): Promise<PlayerModel | undefined> => {
    const db = data.loadDatabase();
    return db.find((player) => player.id === id);
}

export const insertPlayer = async (player: PlayerModel): Promise<boolean>  => {
    const db = await findAllPlayers()
    const id = (await db).some((db) => db.id == player.id)
    if (id === false) {
        db.push(player);
        await data.insertPlayerInDatabase(db)
        console.log("Jogador inserido:", player)
        return true
    }else{
        console.log("Id ja existente")
        return false
    }

}

export const deleteOnePlayer = async (id:number) => {
    const db = await findAllPlayers()
    const index = db.findIndex(player => player.id === id)

    if(index !== -1){
        db.splice(index, 1)
        data.deletePlayerById(db)
        return true
    }else{
        return false
    }
}

export const findAndModifyPlayer = async (id: number, statics:StaticsModel):Promise<false | PlayerModel> =>{
    const db = await findAllPlayers()
    const playerIndex = db.findIndex(player => player.id ===id)

    if(playerIndex !== -1){
        db[playerIndex].statics = statics
        data.updatePlayerById(db)
        return db[playerIndex]
    }else{
        return false
    }
}
