import { sendGetCommentRequest } from "../../services/commentServiceFx";
import CommentService from "../../services/commentServices";
import ApiResponseHandler from "../apiResponseHandler";

export default async (req, res, next) => {
    try {

    
        //class style
        const payload  = await new CommentService(req).getAllComments(req.query);

        //functional style

        // const payload = await sendGetCommentRequest().then(data => {
        //     return data;
        // })

        await ApiResponseHandler.success(req, res, payload);


    } catch (error) {
        await ApiResponseHandler.error(req, res, error);

    }
}