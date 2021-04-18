import {
  ADD_COMMENT,
  COMMENT_ADDED,
  CHANGE_COMMENT_CONTENT,
  CHANGE_COMMENT_TITLE,
  GET_COMMENTS,
  LOAD_COMMENTS
} from '../constants/comment';

const initialState = {
  is_comment_added: false,
  comments_list: [],
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
    case LOAD_COMMENTS:
      return {
        ...state,
        comments_list: action.comments
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments_list: (state.comments_list || []).concat([action.payload])
      };
    default:
      return state;
  }
};