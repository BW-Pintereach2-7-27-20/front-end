import * as ACTIONS from '../actions';

const initialState = {
  isLoading: false,
  boards: [],
  error: '',
};

const boardReducer = (state = initialState, action) => {
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
    case ACTIONS.FETCH_BOARDS_ERROR:
      return {
        ...state,
        isLoading: false,
        boards: action.payload,
      };
    case ACTIONS.NEW_BOARD_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.NEW_BOARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        newBoard: action.payload,
      };
    case ACTIONS.NEW_BOARD_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default boardReducer;
