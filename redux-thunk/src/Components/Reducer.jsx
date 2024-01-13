const reducer = (state, action) => {

    switch (action.type) {
        case 'fetch_data':
            return {
                data: action.payload
            }

        default:
            break;
    }
}

export default reducer