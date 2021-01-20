
import PostService from "../../services/postServices";
import ApiResponseHandler from "../apiResponseHandler";

export default async (req, res, next) => {
    try {

    
        //class style
        const payload  = await new PostService(req).findPostCustom(req.params.id);

        await ApiResponseHandler.success(req, res, payload);


    } catch (error) {
        await ApiResponseHandler.error(req, res, error);

    }
}