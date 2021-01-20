const customAllPost = async (data_post, array_comment) => {
    let data =[];

    data = data_post.map(el=>{


        let data_quantity_post = array_comment.find(el_comment => el_comment?.postId == el?.id).quantity

        let data_here = {
                        "post_id":el?.id,
                        "post_title":el?.title,
                        "post_body":el?.body,
                        "total_number_of_comments":data_quantity_post,
        
                    }

        return data_here;
    })

    return data;


    // for (var j = 0; j < array_comment.length; j++) {
    //     if (array_comment[j]?.postId == data_post.id) {

    //         // data = array_data[j]
    //         data = {
    //             "post_id":data_post?.id,
    //             "post_title":data_post?.title,
    //             "post_body":data_post?.body,
    //             "total_number_of_comments":array_comment[j]?.quantity,

    //         }

    //         return data;
    //     }
    // }
    // return data;
}

export { customAllPost };