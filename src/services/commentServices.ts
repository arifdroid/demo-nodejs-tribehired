import axios from "axios";
import { getConfig } from "../config";
import _ from 'lodash';
import { filterComment } from "../controller/filter/filterComment";
export default class CommentService {
    options: any

    constructor(options) {
        this.options = options;
    }


    async getAllComments(arg: any) {

        
        try {

            if (_.isEmpty(arg)) { return await (await axios.get(`${getConfig().URL_HOST}/comments`)).data }

            else {

                let data_before_filter = await (await axios.get(`${getConfig().URL_HOST}/comments`)).data
                let data_filtered = await filterComment(arg, data_before_filter)

                return data_filtered;

            }

        } catch (error) {
            throw error
        }


    }
}