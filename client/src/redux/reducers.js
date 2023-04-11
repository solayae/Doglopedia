import {
  GET_DOGS,
  GET_BY_NAME,
  GET_DETAIL,
  SORT_DOGS,
  FILTER_DOGS,
} from './actions';

let initialState = {
  allDogs: [],
  usersCopy: [],
  post: [],
  filteredDogs: [],
  detail: [],
  order: { field: 'name', direction: 'asc' },
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
    case SORT_DOGS:
      const { field, direction } = action.payload;
      const dogsCopy = [...state.allDogs];
      dogsCopy.sort((a, b) => {
        let x = a[field];
        let y = b[field];
        if (direction === 'asc') {
          return x < y ? -1 : x > y ? 1 : 0;
        } else if (direction === 'desc') {
          return x > y ? -1 : x < y ? 1 : 0;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        allDogs: dogsCopy,
        order: {
          field: field,
          direction: direction,
        },
      };
    case FILTER_DOGS:
      const filteredDogs = state.allDogs.filter((dog) =>
        dog.temperament?.includes(action.payload)
      );
      return {
        ...state,
        filteredDogs: filteredDogs,
      };

    default:
      return state;
  }
}

export default rootReducer;
