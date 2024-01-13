import axios from 'axios';

const action_provider = () => {

    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => dispatch({
                type: 'fetch_data',
                payload: response
            }))
    }

}

export default action_provider