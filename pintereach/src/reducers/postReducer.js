import * as ACTIONS from '../actions';

const initialState = {
  isLoading: false,
  description: '',
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_POSTS_START:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default postReducer;
