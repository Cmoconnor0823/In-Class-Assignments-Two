import { COMPLETENESS, UPDATE_WORD, RESET } from "./types";

export default (state, action) => {
  switch (action.type) {
    case UPDATE_WORD:
      return {
        ...state,
        [action.payload[0]]: action.payload[1]
      };
    case COMPLETENESS:
      return {
        ...state,
        completed: action.payload
      };
    case RESET:
      return {
        adjective1: "",
        adjective2: "",
        adjective3: "",
        adjective4: "",
        color1: "",
        color2: "",
        noun1: "",
        noun2: "",
        noun3: "",
        person: "",
        vegetable: "",
        verb: "",
        completed: false
      };
    default:
      return state;
  }
};
