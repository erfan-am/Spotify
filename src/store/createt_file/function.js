import *as actionTypes from './actionTypes';

export const createFile=(name,img)=>({
    type:actionTypes.SET_NAME_FILE,
    payload_name:name,
    payload_img:img,

});


export const removeFile=(data)=>({
    type:actionTypes.REMOVE_NAME_FILE,
    payload:data
});



export const getChooseFile=(data)=>({
    type:actionTypes.GET_CHOOSE_FILE,
    payload:data
});
