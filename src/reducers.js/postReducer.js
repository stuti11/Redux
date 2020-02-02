import { FETCH_POSTS, NEW_POSTS } from "../action/type";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("reducer....");
      return {
        ...state,
        items: action.payload
      };
    case NEW_POSTS:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
