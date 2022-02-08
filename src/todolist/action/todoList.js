import {
  ADD,
  MARK_DONE,
  TOGGLE_DONE,
  EDIT_TOGGLE_TITLE,
  DELETE,
} from "../../common/js/Constant";
export const add = (item) => {
  return {
    type: ADD,
    payload: item,
  };
};

export const markDone = (id) => {
  return {
    type: MARK_DONE,
    payload: {
      id,
    },
  };
};

export const toggleDone = (id) => {
  return (dispatch, getState) => {
    // console.log(dispatch, getState());
    dispatch({
      type: TOGGLE_DONE,
      payload: {
        id,
      },
    });
  };
};

export const updateTitle = (id, newTitle) => {
  return {
    type: EDIT_TOGGLE_TITLE,
    payload: {
      id,
      newTitle,
    },
  };
};

export const deleteItem = (id) => {
  return (dispatch, getState) => {
    console.log(dispatch, getState());
    dispatch({ type: DELETE, payload: { id } });
  };
};
