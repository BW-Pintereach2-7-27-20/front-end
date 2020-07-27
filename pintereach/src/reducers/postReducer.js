import * as ACTIONS from '../actions';

const initialState = {
  name: '',
  description: '',
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_POSTS:
      return null;

    default:
      return state;
  }
};

export default postReducer;
