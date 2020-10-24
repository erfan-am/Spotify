import * as actionTypes from "./actionTypes";

const INITAIL_STATE = {
  files: [],
  file: null,
};

const reducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_NAME_FILE:
      return {
        ...state,
        files: [
          ...state.files,
          {
            name: action.payload_name,
            id: Math.random(),
            img: action.payload_img
              ? action.payload_img
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeexmC73RvuOHEl4xTDWQFnikrHo4AWFyoPw&usqp=CAU",
            items: [],
          },
        ],
      };
    case actionTypes.REMOVE_NAME_FILE:
      return {
        ...state,
        files: state.files.filter((file) => file.id !== action.payload.id),
      };
    case actionTypes.GET_CHOOSE_FILE:
      return {
        ...state,
        file: state.files.find((file) => file.id === action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
