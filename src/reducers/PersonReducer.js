const initialState = {
    personData : {},
    modalData : {},
    isFetching : false,
    isError : false
}

const PersonReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'FETCHING_PERSON' :
            return Object.assign({},state,{
                isFetching : true,
            })
        case 'FETCHED_PERSON' :
            return Object.assign({},state,{
                personData : action.payload,
                isFetching : false,
            })
        case 'FETCH_ERROR_PERSON' :
            return Object.assign({},state,{
                isError : true,
                isFetching : false
            })
        case 'FETCH_MODAL_DATA' :
            return Object.assign({},state,{
                modalData : action.payload
            })           
        default :
            return state;    
    }
}

export default PersonReducer;