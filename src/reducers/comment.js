import {
  ADD_COMMENT,
  COMMENT_ADDED,
  CHANGE_COMMENT_CONTENT,
  CHANGE_COMMENT_TITLE,
  GET_COMMENTS
} from '../constants/comment';

const initialState = {
  is_comment_added: false,
  comments: [],
  content: "",
  title: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_ADDED:
      return {
        ...state,
        is_comment_added: true
      };
    case CHANGE_COMMENT_CONTENT:
      return {
        ...state,
        content: action.content
      };
    case CHANGE_COMMENT_TITLE:
      return {
        ...state,
        title: action.title
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: state.comments
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: (state.comments || []).concat([action.payload])
      };
    default:
      return state;
  }
};