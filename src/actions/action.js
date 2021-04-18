import {
  ADD_COMMENT,
  CHANGE_COMMENT_CONTENT,
  CHANGE_COMMENT_TITLE,
  GET_COMMENTS,
  LOAD_COMMENTS
} from "../constants/comment";

export function addComment(payload) {
  return {
    type: ADD_COMMENT,
    payload
  };
}

export function changeContent(content) {
  return {
    type: CHANGE_COMMENT_CONTENT,
    content
  };
}

export function changeTitle(title) {
  return {
    type: CHANGE_COMMENT_TITLE,
    title
  };
}

export function loadComments(comments) {
  return {
    type: LOAD_COMMENTS,
    comments
  };
}