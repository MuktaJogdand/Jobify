import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err,req,res,next) => {
    console.log(err);
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    const msg = err.message || 'somethong went wrong, try again later'
    res.status(statusCode).json({msg: 'something went wrong'});
};

export default errorHandlerMiddleware;