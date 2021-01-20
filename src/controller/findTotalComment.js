const findTotalComment = (array_data_comment) => {

    let array_post_id = [{ postId: array_data_comment[0].postId, quantity: 0 }];


    let counter = 0;
    let pointer = 0;

    for (var j = 0; j < array_data_comment.length; j++) {


        if (array_post_id.find(el => el.postId === array_data_comment[j].postId) && (j !== (array_data_comment.length - 1))) {

            counter++;

        } else if (array_post_id.find(el => el.postId === array_data_comment[j].postId) && (j === (array_data_comment.length - 1))) {

            array_post_id[pointer] = { postId: array_data_comment[j].postId, quantity: counter + 1 }; //final count

        }
        else if (array_post_id.find(el => el.postId !== array_data_comment[j].postId) && (j !== (array_data_comment.length - 1))) { //ending of loop


            array_post_id[pointer] = { postId: array_data_comment[j - 1].postId, quantity: counter };
            counter = 1;
            pointer = pointer + 1;
            array_post_id.push({ postId: array_data_comment[j].postId, quantity: 0 })
        }

    }

    let sorted = sort_highest_comment_merge_sort(array_post_id)


    return sorted;
}

const sort_highest_comment_merge_sort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    var middle = parseInt(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);

    return merge(sort_highest_comment_merge_sort(left), sort_highest_comment_merge_sort(right));

}
const merge = (left, right) => {
    var result = [];

    while (left.length && right.length) {
        if (left[0].quantity <= right[0].quantity) {
            // result.push(left.shift());
            result.push(right.shift());
        } else {
            // result.push(right.shift());
            result.push(left.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

exports.findTotalComment = findTotalComment;