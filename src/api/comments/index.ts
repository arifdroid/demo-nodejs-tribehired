export default (app)=>{
    
    app.get(`/comments`, require('./getAllComments').default);
}

