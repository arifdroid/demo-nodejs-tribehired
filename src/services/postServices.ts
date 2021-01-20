import axios from "axios";
import { getConfig } from "../config";
import { customAllPost } from "../controller/customAllPost";
import { findById } from "../controller/findById";
import { findTotalCommentById } from "../controller/findTotalCommentById";

export default class PostService{
    options:any

    constructor(options){
        this.options = options;
    }

    
    async getAllPosts(arg){
     
        try {

            return await axios.get(`${getConfig().URL_HOST}/posts`)
            
        } catch (error) {
            throw error
        }
        
        
    }

    async getAllPostsCustom(arg){
     
        try {

            let data_all_post =  await axios.get(`${getConfig().URL_HOST}/posts`);

            return await customAllPost(data_all_post?.data, this.options?.totalComment);

            
        } catch (error) {
            throw error
        }
        
        
    }

    async findPost(id){

    
     
        try {

            let data = await (await this.getAllPosts(this.options)).data;

            //massage the data:

            return await findById(data,id);

            // return  await findTotalCommentById(data_post, this.options?.totalComment);


            // return single_data;

            
            
        } catch (error) {
            throw error
        }
        
        
    }

    async findPostCustom(id){

    
     
        try {

            let data = await (await this.getAllPosts(this.options)).data;

            //massage the data:

            let data_post = await findById(data,id);

            return  await findTotalCommentById(data_post, this.options?.totalComment);


            // return single_data;

            
            
        } catch (error) {
            throw error
        }
        
        
    }
}