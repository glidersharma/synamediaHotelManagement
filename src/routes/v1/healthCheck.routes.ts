import express, { NextFunction, Request, Response } from "express";
import { sendSuccessResponse } from "../../response/responseHandler";
import { getLivenessStatusController, getReadinessStatusController } from "../../controllers/healthCheck.controller";

const healthCheckRouter = express.Router();

healthCheckRouter.get("/liveness", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getLivenessStatusController();
        sendSuccessResponse(req, res, result);
    }
    catch (err) {
        next(err);
    }
});

healthCheckRouter.get("/readiness", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getReadinessStatusController();
        sendSuccessResponse(req, res, result);
    }
    catch (err) {
        next(err);
    }
});

export default healthCheckRouter;