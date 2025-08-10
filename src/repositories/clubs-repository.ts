import { ClubModel } from "../models/club-models";
import fs from "fs/promises"

export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = await fs.readFile("./src/data/clubs-database.json", "utf-8")
    const clubs: ClubModel[] = JSON.parse(data)
    return clubs;
}