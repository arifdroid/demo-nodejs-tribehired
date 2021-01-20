import ApiResponseHandler from "../api/apiResponseHandler";
import CommentService from "../services/commentServices";

const findTotalComment = require('../controller/findTotalComment').findTotalComment;

export async function commentMiddleware(req, res, next) {

    try {

        const payload = await (await new CommentService(req).getAllComments(req.query)).data;

        let data = findTotalComment(payload);

        // console.log(' \n\n data with total comment', data[0])

        req.totalComment = data;

        return next();
    }
    catch (error) {

        await ApiResponseHandler.error(
            req,
            res,
            error,
          );

    }
}