import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const NEW_POST = 'NEW_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_POSTS_START,
    });
    axiosWithAuth('').then((res) => {
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data });
    });
  };
};
