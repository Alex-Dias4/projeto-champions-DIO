import { Request, response, Response } from "express";
import * as services from "../services/clubs-services";

export const getClubs = async (req:Request, res: Response) => {
    const Response = await services.getClubsService()
    res.status(Response.statusCode).json(Response.body)
}