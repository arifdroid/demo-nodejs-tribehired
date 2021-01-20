import ApiResponseHandler from "../api/apiResponseHandler";
import CommentService from "../services/commentServices";

const findTotalComment = require('../controller/findTotalComment').findTotalComment;

export async function commentMiddleware(req, res, next) {

    try {

        if(!req.url.includes('custom')){            
            return next(); //skip middleware if no custom in url
        }

        const payload = await (await new CommentService(req).getAllComments(req.query)).data;

        let data = findTotalComment(payload);

        req.totalComment = data; //insert middleware

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