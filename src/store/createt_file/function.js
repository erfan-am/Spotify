import * as actionTypes from "./actionTypes";
let URL = "http://localhost:4000/api/playlists";
export const getFetchfiles = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.F_G_P_D_START,
    });
    fetch(URL)
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: actionTypes.GET_FETCH_FILES_SUCCESS,
          payload: data,
        })
      )
      .catch((err) =>
        dispatch({
          type: actionTypes.F_G_P_D_FAIL,
        })
      );
  };
};

export const postFetchfiles = (name, img) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.F_G_P_D_START,
    });
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    })
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: actionTypes.POST_FETCH_FILES_SUCCESS,
          payload: data,
        })
      )
      .catch((err) =>
        dispatch({
          type: actionTypes.F_G_P_D_FAIL,
        })
      );
  };
};

export const deleteFetchfiles = (name) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.F_G_P_D_START,
    });
    fetch(URL + "/" + name.id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: actionTypes.DELETE_FETCH_FILES_SUCCESS,
          payload: data.id,
        });
      })
      .catch((err) =>
        dispatch({
          type: actionTypes.F_G_P_D_FAIL,
        })
      );
  };
};
export const getChooseFile = (data) => ({
  type: actionTypes.GET_CHOOSE_FILE,
  payload: data,
});
