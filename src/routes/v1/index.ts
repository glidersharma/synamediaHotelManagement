import express from "express";
import healthCheckRouter from "./healthCheck.routes";
import hotelRouter from "./hotel.routes";

const router = express.Router();

router.use("", healthCheckRouter);
router.use("/bookings", hotelRouter);



export default router;
