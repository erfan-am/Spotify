import *as actionTypes from './actions';

export const searchFetchDataSongs=()=>{
    return dispatch =>{ 
    dispatch({
    type:actionTypes.SEARCH_FETCH_API_SONGS_START
        })
     fetch('http://localhost:4000/api/search/songs')
    .then(res=>res.json())
    .then(data=>dispatch({
        type:actionTypes.SEARCH_FETCH_API_SONGS_SUCCESS,
        payload:data
    }))
    .catch(()=>dispatch({
        type:actionTypes.SEARCH_FETCH_API_SONGS_FAIL
    }))}
}


export const setSearchResult=(item)=>({
    type:actionTypes.SEARCH_INPUT_SET,
    payload:item
})