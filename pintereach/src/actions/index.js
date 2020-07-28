import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_BOARDS_START = 'FETCH_BOARDS_START';
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';
export const FETCH_BOARDS_ERROR = 'FETCH_BOARDS_ERROR';

export const NEW_BOARD_START = 'NEW_BOARD_START';
export const NEW_BOARD_SUCCESS = 'NEW_BOARD_SUCCESS';
export const NEW_BOARD_ERROR = 'NEW_BOARD_ERROR';

export const fetchBoards = () => (dispatch) => {
  dispatch({
    type: FETCH_BOARDS_START,
  });
  axiosWithAuth()
    .get('/boards')
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_BOARDS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_BOARDS_ERROR, payload: err.message });
    });
};

export const postBoard = (content) => (dispatch) => {
  dispatch({
    type: NEW_BOARD_START,
  });
  axiosWithAuth()
    .post('/boards', content)
    .then((res) => {
      console.log(res);
      dispatch({ type: NEW_BOARD_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: NEW_BOARD_ERROR, payload: err.message });
    });
};
