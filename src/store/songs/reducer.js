import * as actionTypes from "./actonTypes";
import { getGroup, getGroupSearch, setAddLikes } from "./utils";
const INITAIL_STATE = {
  song: null,
  songBar: false,
  like: [],
  group: null,
  create_list: false,
  data: "",
  loading: false,
};

const reducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_FETCH_API_SONGS_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_FETCH_API_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case actionTypes.GET_FETCH_API_SONGS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.GET_PLAY_SONG:
      return {
        ...state,
        song: action.payload,
        songBar: true,
      };
    case actionTypes.REMOVE_PLAY_SONG:
      return {
        ...state,
        songBar: false,
        song: null,
        create_list: false,
      };
    case actionTypes.GET_LIKE_SONG:
      return {
        ...state,
        like: setAddLikes(state.like, action.payload),
      };
    case actionTypes.GET_GROUP_INFO:
      return {
        ...state,
        group: getGroup(state.data, action.payload),
      };
    case actionTypes.GET_GROUP_SEARCH:
      return {
        ...state,
        group: getGroupSearch(state.data, action.payload),
      };
    case actionTypes.SHOW_FORM_CREATE_FILE:
      return {
        ...state,
        create_list: !state.create_list,
      };
    default:
      return state;
  }
};

export default reducer;
