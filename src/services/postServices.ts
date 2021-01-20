import axios from "axios";
import { getConfig } from "../config";
import { findById } from "../controller/findById";

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

    async findPost(id){

    
     
        try {

            let data = await (await this.getAllPosts(this.options)).data;

            //massage the data:

            return await findById(data,id);

            // return single_data;

            
            
        } catch (error) {
            throw error
        }
        
        
    }
}