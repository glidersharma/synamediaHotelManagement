import { BAD_REQUEST, CONTINUE, FORBIDDEN, INTERNAL_SERVER_ERROR, METHOD_NOT_ALLOWED, NOT_FOUND, OK, UNAUTHORIZED } from "./stringMsgs";

const STATUS_MESSAGES = {
    INFORMATION_MSG: { status_code: 100, status: CONTINUE },
    SUCCESS_MSG: { status_code: 200, status: OK },
    BAD_REQUEST: { status_code: 400, status: BAD_REQUEST },
    UNAUTHORIZED_MSG: { status_code: 401, status: UNAUTHORIZED },
    FORBIDDEN_MSG: { status_code: 403, status: FORBIDDEN },
    NOT_FOUND: { status_code: 404, status: NOT_FOUND },
    METHOD_NOT_ALLOWED: { status_code: 405, status: METHOD_NOT_ALLOWED },
    SERVER_MSG: { status_code: 500, status: INTERNAL_SERVER_ERROR },
};

const CUSTOM_EXCEPTIONS = {
    VALIDATION: {
        ERROR_CODE: 1
    },
    DUPLICATE: {
        ERROR_CODE: 2
    },
    RECORD: {
        ERROR_CODE: 404,
        MESSAGE: "{KEY} Not Found" // KEY is dynamicaly changed
    }
}

export const VALIDATION_ERRORS = {
    VALIDATION_ERROR_MESSAGE: "Validation Error"
}

export { STATUS_MESSAGES, CUSTOM_EXCEPTIONS };
