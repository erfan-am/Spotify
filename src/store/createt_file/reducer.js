import * as actionTypes from "./actionTypes";

const INITAIL_STATE = {
  files: null,
  file: null,
  loading: false,
};

const reducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case actionTypes.F_G_P_D_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.F_G_P_D_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.GET_FETCH_FILES_SUCCESS:
      return {
        ...state,
        files: action.payload,
        loading: false,
      };
    case actionTypes.POST_FETCH_FILES_SUCCESS:
      return {
        ...state,
        files: [...state.files, action.payload],
        loading: false,
      };

    case actionTypes.DELETE_FETCH_FILES_SUCCESS:
      return {
        ...state,
        files: state.files.filter((fl) => fl.id !== action.payload),
        loading: false,
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
