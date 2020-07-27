import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_BOARDS_START = 'FETCH_BOARDS_START';
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';
export const FETCH_BOARDS_ERROR = 'FETCH_BOARDS_ERROR';

export const NEW_POST = 'NEW_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';
export const EDIT_BOARD = 'EDIT_BOARD';

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
