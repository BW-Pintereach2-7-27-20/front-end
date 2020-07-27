import * as ACTIONS from '../actions';

const initialState = {
  isLoading: false,
  boards: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_BOARDS_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.FETCH_BOARDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        boards: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
