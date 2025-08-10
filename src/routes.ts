import { Router } from "express";
import * as playerController from "./controllers/players-controller";
import * as clubsController from "./controllers/clubs-controllers";

const router = Router()

router.get("/players", playerController.getPlayer);
router.post("/players", playerController.postPlayer);
router.patch("/players/:id",playerController.updatePlayer);
router.delete("/players/:id", playerController.deletePlayer);
router.get("/players/:id", playerController.getPlayerById );

router.get("/clubs", clubsController.getClubs);



export default router;