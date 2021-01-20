import axios from 'axios';
import { getConfig } from '../config';

const sendGetCommentRequest = async () => {
    try {
        const resp = await axios.get(`${getConfig().URL_HOST}/comments`);
        return resp.data
    } catch (err) {
        
        throw err;
    }
};

export {sendGetCommentRequest};