// ========================== Load Modules Start ==========================
import { CUSTOM_EXCEPTIONS, VALIDATION_ERRORS } from "../constant/errorConstant";
import Exception from "../response/exception";
// import * as constants from "./constant";
// ========================== Load Modules End ============================


// ========================== Export Module Start ==========================
export = {
    completeCustomException: (errcode: number, errMsg: string, error?: any): Exception => {
        if (!error) {
            return new Exception(errcode, errMsg);
        } else {
            return new Exception(errcode, errMsg, error);
        }
    },
    validationException: (error?: any): Exception => {
        let errorCode = CUSTOM_EXCEPTIONS.VALIDATION.ERROR_CODE
        let errMsg = VALIDATION_ERRORS.VALIDATION_ERROR_MESSAGE
        return new Exception(errorCode, errMsg, error);
    },
    duplicacyException: (errMsg: string, error?: any): Exception => {
        let errorCode = CUSTOM_EXCEPTIONS.DUPLICATE.ERROR_CODE
        if (!error) {
            return new Exception(errorCode, errMsg);
        } else {
            return new Exception(errorCode, errMsg, error);
        }
    },
    notFound: (key: string, error?: any): Exception => {
        let errorCode = CUSTOM_EXCEPTIONS.RECORD.ERROR_CODE
        let errMsg= CUSTOM_EXCEPTIONS.RECORD.MESSAGE?.replace('{KEY}',key)

        if (!error) {
            return new Exception(errorCode, errMsg);
        } 
        else {
            return new Exception(errorCode, errMsg, error);
        }
    }
};
// ========================== Export Module   End ==========================
