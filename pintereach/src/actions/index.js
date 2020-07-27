import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_BOARDS_START = 'FETCH_BOARDS_START';
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';
export const FETCH_BOARDS_ERROR = 'FETCH_BOARDS_ERROR';

export const NEW_BOARD_START = 'NEW_BOARD_START';
export const NEW_BOARD_SUCCESS = 'NEW_BOARD_SUCCESS';
export const NEW_BOARD_ERROR = 'NEW_BOARD_ERROR';

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
