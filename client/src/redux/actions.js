import axios from 'axios';

export const GET_DOGS = 'GET_DOGS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_DETAIL = 'GET_DETAIL';
export const SORT_BREED = 'SORT_BREED';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const FILTER_TEMPERAMENT = 'FILTER_TEMPERAMENT';

export function getDogs() {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:3001/dogs');
    return dispatch({
      type: 'GET_DOGS',
      payload: response.data,
    });
  };
}

export function getByName(name) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/dogs/?name=${name}`
    );
    return dispatch({
      type: 'GET_BY_NAME',
      payload: response.data,
    });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    let getId = await axios.get(`http://localhost:3001/dogs/${id}`);
    return dispatch({
      type: 'GET_DETAIL',
      payload: getId.data,
    });
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    try {
      const getTemp = await axios.get('http://localhost:3001/temperaments');
      return dispatch({
        type: 'GET_TEMPERAMENTS',
        payload: getTemp.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function filterTemperament(payload) {
  return {
    type: FILTER_TEMPERAMENT,
    payload,
  };
}
