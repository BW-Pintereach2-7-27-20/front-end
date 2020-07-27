import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_BOARDS_START = 'FETCH_BOARDS_START';
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';
export const FETCH_BOARDS_ERROR = 'FETCH_BOARDS_ERROR';
export const NEW_POST = 'NEW_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

export const fetchBoards = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_BOARDS_START,
    });
    axiosWithAuth('').then((res) => {
      dispatch({ type: FETCH_BOARDS_SUCCESS, payload: res.data });
    });
  };
};
