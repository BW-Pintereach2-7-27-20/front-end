import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_BOARDS_START = 'FETCH_BOARDS_START';
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';
export const FETCH_BOARDS_ERROR = 'FETCH_BOARDS_ERROR';

export const NEW_BOARD_START = 'NEW_BOARD_START';
export const NEW_BOARD_SUCCESS = 'NEW_BOARD_SUCCESS';
export const NEW_BOARD_ERROR = 'NEW_BOARD_ERROR';

export const FETCH_ARTICLES_START = 'FETCH_ARTICLES_START';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

export const DELETE_BOARD = 'DELETE_BOARD';

export const fetchBoards = () => (dispatch) => {
  dispatch({
    type: FETCH_BOARDS_START,
  });
  axiosWithAuth()
    .get('/boards')
    .then((res) => {
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
      dispatch({ type: NEW_BOARD_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: NEW_BOARD_ERROR, payload: err.message });
    });
};

export const fetchArticles = () => (dispatch) => {
  dispatch({
    type: FETCH_ARTICLES_START,
  });
  axiosWithAuth()
    .get('/articles', { params: { board_id: 7 } })
    .then((res) => {
      console.log('console log for articles: ', res);
      dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_ARTICLES_ERROR, payload: err.message });
    });
};

export const deleteBoard = (boardId) => (dispatch) => {
  axiosWithAuth()
    .delete(`/boards/${boardId}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_BOARD, payload: res.data });
    });
};
