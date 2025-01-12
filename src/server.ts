import cors from "cors";
import "dotenv/config";
import express from "express";
import { SERVER_CONFIG } from "./config";
import router from "./routes";
import { handleError } from "./exceptions/exceptionHandler";

const port = SERVER_CONFIG.PORT;
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.use(handleError);

const server = app.listen(port, () => {
  console.log(`Server running at Port:${port}`);
});

// Handle server closure gracefully
process.on("SIGTERM", () => {
  console.info("Received SIGTERM signal. Closing server gracefully.");

  server.close(() => {
    console.log("Server closed. Cleaning up resources.");
    process.exit(0);
  });
});

// Handle Ctrl+C in the terminal for local development shutdowns
process.on("SIGINT", () => {
  console.info("Received SIGINT signal. Closing server gracefully.");

  server.close(() => {
    console.log("Server closed. Cleaning up resources.");
    process.exit(0);
  });
});
export { app, server };