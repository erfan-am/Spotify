import * as actionTypes from "./actonTypes";

export const getFetchDataSongs = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GET_FETCH_API_SONGS_START,
    });
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: actionTypes.GET_FETCH_API_SONGS_SUCCESS,
          payload: data,
        })
      )
      .catch(() =>
        dispatch({
          type: actionTypes.GET_FETCH_API_SONGS_FAIL,
        })
      );
  };
};

export const getPlaySong = (item) => ({
  type: actionTypes.GET_PLAY_SONG,
  payload: item,
});

export const getLikeSong = (item) => ({
  type: actionTypes.GET_LIKE_SONG,
  payload: item,
});

export const getGroupInfo = (item) => ({
  type: actionTypes.GET_GROUP_INFO,
  payload: item,
});

export const getGroupSearch = (item) => ({
  type: actionTypes.GET_GROUP_SEARCH,
  payload: item,
});

export const removeSongPlay = () => ({
  type: actionTypes.REMOVE_PLAY_SONG,
});

export const showFormFile = () => ({
  type: actionTypes.SHOW_FORM_CREATE_FILE,
});
