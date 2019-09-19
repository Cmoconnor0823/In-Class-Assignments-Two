import { HANDLE_INPUT_CHANGE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case HANDLE_INPUT_CHANGE:
      return {
        markdown: action.payload
      };
    default:
      return state;
  }
};
