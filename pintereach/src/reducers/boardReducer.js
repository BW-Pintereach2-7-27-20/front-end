import * as ACTIONS from '../actions';

const initialState = {
  isLoading: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_BOARDS_START:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default postReducer;
