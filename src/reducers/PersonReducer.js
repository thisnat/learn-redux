const initialState = {
    personData : {},
    isFetching : false,
    isError : false
}

const PersonReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'FETCHING_PERSON' :
            return Object.assign({},state,{
                personData : {},
                isFetching : true,
                isError : false
            })
        case 'FETCHED_PERSON' :
            return Object.assign({},state,{
                personData : action.payload,
                isFetching : false,
                isError : false
            })
        case 'FETCH_ERROR_PERSON' :
            return Object.assign({},state,{
                personData : {},
                isFetching : false,
                isError : true
            })       
        default :
            return state;    
    }
}

export default PersonReducer;