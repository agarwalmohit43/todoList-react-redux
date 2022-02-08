import { ADD, MARK_DONE, TOGGLE_DONE } from "../common/Constant";
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
  return {
    type: TOGGLE_DONE,
    payload: {
      id,
    },
  };
};
