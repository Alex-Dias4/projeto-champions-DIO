import { PlayerModel } from "../models/player-model";
import { readFileSync, writeFileSync } from "fs";

const filePath = "./src/data/player-database.json"
export const loadDatabase = (): PlayerModel[] => {
  const raw = readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
};

export const saveDatabase = (data: PlayerModel[]) => {
  writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export const insertPlayerInDatabase = (db: PlayerModel[]) => {;
  saveDatabase(db);
};

export const deletePlayerById = async (db:PlayerModel[]) => {
  saveDatabase(db)
}

export const updatePlayerById = (db:PlayerModel[]) =>{
  saveDatabase(db)
}
