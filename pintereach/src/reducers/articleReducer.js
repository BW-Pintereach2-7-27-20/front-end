import * as ACTIONS from '../actions';

const initialState = {
  isLoading: false,
  error: '',
  message: '',
  articles: [],
  article: {},
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_ARTICLES_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: action.payload,
      };
    case ACTIONS.FETCH_ARTICLES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ACTIONS.CREATE_ARTICLE:
      return {
        ...state,
        isLoading: true,
        articles: [...state.articles, action.payload],
      };

    case ACTIONS.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
        articles: [...state.articles, action.payload],
      };
    default:
      return state;
  }
};

export default articleReducer;
