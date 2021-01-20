import ExpressRateLimit from 'express-rate-limit';

export function createRateLimiter({
    max, windowMs, message
}:{
    max:number,
    windowMs:number,
    message:string
}){

    return new ExpressRateLimit({
        max,windowMs,message
    })

}