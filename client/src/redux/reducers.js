import {
  GET_DOGS,
  GET_BY_NAME,
  GET_DETAIL,
  GET_TEMPERAMENTS,
  FILTER_TEMPERAMENT,
  CLEAN_DETAIL,
  SORT_WEIGTH,
  SORT_BREED_AZ,
  FILTER_BREED_ORIGIN,
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

    case CLEAN_DETAIL:
      return {
        ...state,
        detail: [],
      };

    case SORT_BREED_AZ:
      const sortBreed = state.copyDogs;
      const sortByName =
        action.payload === 'z-a'
          ? sortBreed.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            })
          : sortBreed.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        copyDogs: sortByName,
      };

    case FILTER_BREED_ORIGIN:
      const createdFilter =
        action.payload === 'all'
          ? state.allDogs
          : action.payload === 'api'
          ? state.allDogs.filter((e) => typeof e.id === 'number')
          : state.allDogs.filter((e) => typeof e.id === 'string');

      console.log(createdFilter);

      return {
        ...state,
        copyDogs: createdFilter,
      };

    case SORT_WEIGTH:
      const weigthSort = state.copyDogs;
      const sorting = weigthSort.sort(function (a, b) {
        const weightA = parseInt(a.weight.split(' ')[0]);
        const weightB = parseInt(b.weight.split(' ')[0]);
        return action.payload === 'low' ? weightA - weightB : weightB - weightA;
      });

      console.log(action.payload);
      console.log(sorting);

      return {
        ...state,
        copyDogs: sorting,
      };

    default:
      return state;
  }
}

export default rootReducer;
