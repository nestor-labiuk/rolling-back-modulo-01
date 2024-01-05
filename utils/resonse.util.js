const succesResponse = (message, data) => {
    return { message: message, data: data, error: [] }
}

const errorResponse = (message, error) => {
    return { message: message, data: [], error: error }
}

module.exports = {
    succesResponse,
    errorResponse
}
