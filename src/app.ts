import express, {Request, Response } from "express";
import { getPlayer } from "./controllers/players-controller";
import router from "./routes";
import cors from "cors"

function createApp() {
    const app = express()

    app.use(express.json())
    app.use("/api", router)

/* 
    const corsOpition = {
        origin: "http://alexandre.sistem.com",
        methods: ["GET"],
    }

    app.use(cors(corsOpition))
*/

    return app;
}

export default createApp;
