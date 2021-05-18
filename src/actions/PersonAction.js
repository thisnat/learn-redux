import axios from 'axios';
import store from '../store'

const fetchingPerson = () => {
    return {
        type : 'FETCHING_PERSON'
    }
}

const fetchedPerson = (data) => {
    return {
        type : 'FETCHED_PERSON',
        payload : data
    }
}

const fetchErrorPerson = () => {
    return {
        type : 'FETCH_ERROR_PERSON'
    }
}

export const fetchPerson = () => {
    store.dispatch(fetchingPerson());

    return (dispatch,getState) => {
        axios.get('http://localhost:3001/api')
        .then((res) => {
            dispatch(fetchedPerson(res.data))
        })
        .catch((err) => {
            dispatch(fetchErrorPerson())
        });
    }
}