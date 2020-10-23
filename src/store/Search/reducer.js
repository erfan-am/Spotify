import *as actionTypes from './actions';
import { setFilterSearch } from './utils';

const INITAIL_STATE={
    resultSearch:[],
    data:'',
    loading:false
}

const reducer=(state=INITAIL_STATE,action)=>{
    switch (action.type) {
        case actionTypes.SEARCH_FETCH_API_SONGS_START:
            return{
                ...state,
                loading:true
            }
        case actionTypes.SEARCH_FETCH_API_SONGS_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload
            }
        case actionTypes.SEARCH_FETCH_API_SONGS_FAIL:
            return{
                ...state,
                loading:false
            }
        case actionTypes.SEARCH_INPUT_SET:
            return {
                ...state,
                resultSearch:setFilterSearch(state.data,action.payload)
            }
        default:
            return state;
    }
}

export default reducer