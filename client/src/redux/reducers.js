import {
  GET_DOGS,
  GET_BY_NAME,
  GET_DETAIL,
  GET_TEMPERAMENTS,
  FILTER_TEMPERAMENT,
} from './actions';

let initialState = {
  allDogs: [], //lista completa
  copyDogs: [], //lista manipulable
  detail: [],
  temperament: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        allDogs: action.payload,
        copyDogs: action.payload,
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
      const stateAll = state.allDogs;
      let temperamentFilt;
      if (action.payload === 'all') {
        temperamentFilt = stateAll;
      } else {
        temperamentFilt = stateAll.filter(
          (f) =>
            f.temperament &&
            f.temperament.split(', ').filter((f) => f === action.payload).length
        );
      }
      return {
        ...state,
        copyDogs: temperamentFilt,
      };

    default:
      return state;
  }
}

export default rootReducer;
