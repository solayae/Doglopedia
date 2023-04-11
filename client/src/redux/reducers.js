import {
  GET_DOGS,
  GET_BY_NAME,
  GET_DETAIL,
  FILTER_TEMPERAMENT,
  GET_TEMPERAMENTS,
} from './actions';

let initialState = {
  allDogs: [],
  usersCopy: [],
  post: [],
  filteredDogs: [],
  detail: [],
  temperament: [], //[""]
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

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperament: action.payload,
      };

    case FILTER_TEMPERAMENT:
      const stateAll = state.allBreeds;
      const temperamentFilt =
        action.payload === 'all'
          ? stateAll
          : action.payload === 'none'
          ? stateAll.filter((f) => f.temperament === undefined)
          : stateAll.filter(
              (f) =>
                f.temperament &&
                f.temperament.filter((f) => f === action.payload).length
            );

      return {
        ...state,
        breeds: temperamentFilt,
      };

    default:
      return state;
  }
}

export default rootReducer;
