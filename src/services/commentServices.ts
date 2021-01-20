import axios from "axios";
import { getConfig } from "../config";

export default class CommentService{
    options:any

    constructor(options){
        this.options = options;
    }

    
    async getAllComments(arg){
     
        try {

            return await axios.get(`${getConfig().URL_HOST}/comments`)
            
        } catch (error) {
            throw error
        }
        
        
    }
}