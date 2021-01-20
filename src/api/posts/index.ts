export default (app)=>{
    
    app.get(`/posts`, require('./getAllPosts').default);
    app.get(`/posts-custom`, require('./getAllPostsCustom').default);
    app.get(`/posts/:id`, require('./findPost').default);
    app.get(`/posts-custom/:id`, require('./findPostCustom').default);
}

