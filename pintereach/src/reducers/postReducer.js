import * as ACTIONS from '../actions';

const initialState = {
  name: '',
  description: '',
};

const postReducer = (initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_POSTS:
      return null;

    default:
      return null;
  }
};

export default postReducer;
