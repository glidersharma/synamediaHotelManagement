class Exception {
    error_code: number;
    errorMessage: string;
    errors?: string[];

    constructor(error_code: number, message: string, errorStackTrace?: string[]) {
        this.error_code = error_code;
        this.errorMessage = message;
        if (errorStackTrace) {
            this.errors = errorStackTrace;
        }
    }
}

// ========================== Export Module Start ==========================
export = Exception;
// ========================== Export Module End ============================
