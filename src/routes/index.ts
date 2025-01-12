import express from "express";
import { API_BASE_PATH } from "../config";
import v1 from "./v1"

const router = express.Router();

router.use(`${API_BASE_PATH}/v1`, v1);

export default router;
