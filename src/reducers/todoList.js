import { ADD, MARK_DONE, TOGGLE_DONE } from "../common/Constant";

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
    return { ...state };
  }
  return state;
};
