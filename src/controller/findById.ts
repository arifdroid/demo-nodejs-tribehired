const findById = async (array_data, id) => {
    let data;

    for (var j = 0; j < array_data.length; j++) {
        if (array_data[j]?.id == id) {

            data = array_data[j]
            return data;
        }
    }
    return data;
}

export { findById };