// API Success Responce show
exports.responseSuccess = (successData, statusCode, statusMsg, res) => {
    res.status(statusCode).json({
        status: statusMsg,
        data: {
            data: successData,
        },
    });
};

// Success and Error Message show only
exports.responseSend = (resData, statusCode, statusMsg, res) => {
    res.status(statusCode).json({
        status: statusMsg,
        message: resData,
    });
};

// Express-Validator Error message show
exports.validations = (errorData, statusCode, res) => {
    res.status(statusCode).json({
        errors: errorData,
    });
};
