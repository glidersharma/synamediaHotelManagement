import { NextFunction, Request, Response } from "express";
import joi from "joi";
import { sendErrorResponse } from "../response/responseHandler";
import { STATUS_MESSAGES } from "../constant/errorConstant";

const { SERVER_MSG, BAD_REQUEST } = STATUS_MESSAGES;

const handleError = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  console.error(
    {
      message: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      method: request.method,
      url: request.url,
      body: request.body,
      query: request.query,
      params: request.params,
    },
    "::ERROR"
  );

  if (error && error.isJoi) {
    sendErrorResponse(
      request,
      response,
      error.details?.map((detail: joi.ValidationErrorItem) => detail.message).join(", ") || "Validation error",
      BAD_REQUEST.status_code,
      BAD_REQUEST.status
    );
  } else {
    sendErrorResponse(
      request,
      response,
      error,
      SERVER_MSG.status_code,
      SERVER_MSG.status
    );
  }
};

export default handleError;

export { handleError };
