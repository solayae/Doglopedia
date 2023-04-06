import { GET_DOGS, GET_BY_NAME, GET_DETAIL } from './actions';

let initialState = {
  allDogs: [],
  usersCopy: [],
  post: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        allDogs: action.payload,
        usersCopy: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        allDogs: action.payload,
      };
    case GET_DETAIL: {
      return {
        ...state,
        detail: action.payload,
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
