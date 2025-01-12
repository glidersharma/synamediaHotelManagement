import { Request, Response } from "express";
import { STATUS_MESSAGES } from "../constant/errorConstant";
const { SUCCESS_MSG, BAD_REQUEST } = STATUS_MESSAGES;

export const sendSuccessResponse = (
    req: Request,
    res: Response,
    result: any = {},
    status_code = SUCCESS_MSG.status_code,
    status = SUCCESS_MSG.status
): void => {
    const json = {
        status_code,
        status,
        response_data: result,
    };
    res.status(status_code).json(json);
};

export const sendErrorResponse = (
    req: Request,
    res: Response,
    error: any,
    status_code = BAD_REQUEST.status_code,
    status = BAD_REQUEST.status
): void => {
    console.error({
        method: req.method,
        path: req.path,
        error: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : undefined,
    }, "::ERROR");

    const errorResponse = {
        status_code,
        status,
        error: typeof error === "string"
            ? error
            : error instanceof Error
                ? error.message
                : error,
    };

    res.status(status_code).json(errorResponse);
};

