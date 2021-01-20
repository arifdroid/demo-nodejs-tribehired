const findTotalCommentById = async (data_post, array_comment) => {
    let data;

    for (var j = 0; j < array_comment.length; j++) {
        if (array_comment[j]?.postId == data_post.id) {

            // data = array_data[j]
            data = {
                "post_id":data_post?.id,
                "post_title":data_post?.title,
                "post_body":data_post?.body,
                "total_number_of_comments":array_comment[j]?.quantity,

            }

            return data;
        }
    }
    return data;
}

export { findTotalCommentById };