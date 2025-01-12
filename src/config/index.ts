const ENV = process.env;

const SERVER_CONFIG = {
    PORT: ENV.PORT,
    ENVIRONMENT: ENV.ENVIRONMENT,
};

const API_BASE_PATH =  "/api";

export { SERVER_CONFIG, API_BASE_PATH };