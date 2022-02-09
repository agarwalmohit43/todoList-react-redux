import {
  ADD,
  MARK_DONE,
  TOGGLE_DONE,
  EDIT_TOGGLE_TITLE,
  DELETE,
  SELECTED_TITLE,
  CLEAR_SELECTED_TITLE,
} from "../../common/js/Constant";

const initialState = {
  1: { title: "Item 1", done: false },
};

export const todoLists = (state = initialState, action) => {
  if (action.type === ADD) {
    return { ...state, ...action.payload };
  } else if (action.type === MARK_DONE) {
    let { id } = action.payload;
    state[id].done = true;
    return { ...state };
  } else if (action.type === TOGGLE_DONE) {
    let { id } = action.payload;
    state[id].done = !state[id].done;
    return { ...state, [id]: { ...state[id] } };
  } else if (action.type === EDIT_TOGGLE_TITLE) {
    let { id, newTitle } = action.payload;
    // let obj = { ...state[id] };
    // obj.title = newTitle;
    state[id].title = newTitle;
    return { ...state, [id]: { ...state[id] } };
  } else if (action.type === DELETE) {
    console.log(state, action);
    let { id } = action.payload;
    delete state[id];
    return { ...state };
  }
  return state;
};

export const selectedItem = (state = null, action) => {
  if (action.type === SELECTED_TITLE) {
    let { titleId, item } = action.payload;
    return { titleId, item };
  } else if (action.type === CLEAR_SELECTED_TITLE) {
    return null;
  }
  return state;
};
