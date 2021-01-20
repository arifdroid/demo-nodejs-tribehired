import express from "express";
import helmet from 'helmet';
import { createRateLimiter } from "./apiRateLimiter";
import { commentMiddleware } from "../middleware/commentMiddleware";

const app = express();


const defaultRateLimiter = createRateLimiter({
    max:300,
    windowMs:15*60*1000,
    message:'error too many request'
})

//avoid ddos, or too many request
app.use(defaultRateLimiter);

//security
app.use(helmet());

// app.use(express.json());

app.use(commentMiddleware);

const routes = express.Router();

require('./comments').default(routes);
require('./posts').default(routes);

app.use('/api',routes);



export default app;