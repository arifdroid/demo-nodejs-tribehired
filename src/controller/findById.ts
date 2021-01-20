const findById = async(array_data, id) => {

    // console.log('\n\n find data', array_data[0], "id" ,id)

    let data;

    for (var j = 0; j < array_data.length; j++) {
        if (array_data[j]?.id == id) {

            data = array_data[j]

            console.log('\n\n find data', data)

            return array_data[j]
        }
    }
    return data;
}

export {findById};