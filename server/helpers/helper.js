const { StatusCodes } = require("http-status-codes");
const APIFeatures = require("../utils/apiFeatures");
const catcheAsync = require("../utils/catcheAsync");
const sendResponse = require("../utils/sendResponse");

exports.findSingle = (Model) =>
    catcheAsync(async (req, res, next) => {
        let filter = {};
        const features = new APIFeatures(Model.findOne(filter), req.query).sort(
            {
                createdAt: -1,
            }
        );
        const docs = await features.query;
        sendResponse.responseSuccess(docs, StatusCodes.OK, res);
    });
