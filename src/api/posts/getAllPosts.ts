
import PostService from "../../services/postServices";
import ApiResponseHandler from "../apiResponseHandler";

export default async (req, res, next) => {
    try {

    
        //class style
        const payload  = await (await new PostService(req).getAllPosts(req.query)).data;

        //functional style

        // const payload = await sendGetCommentRequest().then(data => {
        //     return data;
        // })

        await ApiResponseHandler.success(req, res, payload);


    } catch (error) {
        await ApiResponseHandler.error(req, res, error);

    }
}