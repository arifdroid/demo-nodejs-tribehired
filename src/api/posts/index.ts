export default (app)=>{
    
    app.get(`/posts`, require('./getAllPosts').default);
    app.get(`/posts/:id`, require('./findPost').default);
}

