import _ from 'lodash'

const filterComment = async (arg: any, array_comment: any) => {
 
    let filtered_data = array_comment.filter(el => {
        if (arg?.id) return el.id == arg.id
        else return el
    }).filter(el => {
        if (arg?.postId) return el.postId == arg.postId
        else return el
    }).filter(el => {
        if (arg?.title) return el.title == arg.title
        else return el
    }).filter(el => {
        if (arg?.body) {             
            if(el.body.includes(arg.body)){
                return el.body.includes(arg.body)
            }else{
                return 
            }
        }
        else return el
    }).filter(el => {
        if (arg?.email) {             
            if(el.email.includes(arg.email)){
                return el.email.includes(arg.email)
            }else{
                return 
            }
        }
        else return el
    })


    // console.log(' \n\n filtered_data', filtered_data)

    return filtered_data;

}

export { filterComment };