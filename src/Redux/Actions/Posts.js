import axios from "axios";
import { host } from "../../Helpers/constants";

export const GET_DATA_BEGIN = "GET_DATA_BEGIN";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "GET_DATA_FAILED";

export const GET_POST_DETAIL_BEGIN = "GET_POST_DETAIL_BEGIN";
export const GET_POST_DETAIL_SUCCESS = "GET_POST_DETAIL_SUCCESS";
export const GET_POST_DETAIL_FAILED = "GET_POST_DETAIL_FAILED";

export const GET_COMMENTS_BEGIN = "GET_COMMENTS_BEGIN";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILED = "GET_COMMENTS_FAILED";

export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

// Begin Get Post List
export const getDataBegin = () => {
  return {
    type: GET_DATA_BEGIN,
  };
};

export const getDataSuccess = (result) => {
  return {
    type: GET_DATA_SUCCESS,
    result,
  };
};

export const getDataFailed = (error) => {
  return {
    type: GET_DATA_FAILED,
    error,
  };
};

export const getPostByUserId = (userID) => {
  return (dispatch) => {
    dispatch(getDataBegin());

    axios
      .get(`${host}/users/${userID}/posts`)
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error.massage)));
  };
};
// End Get Post List

// Begin Get Post Detail
export const getPostDetailBegin = () => {
  return {
    type: GET_POST_DETAIL_BEGIN,
  };
};

export const getPostDetailSuccess = (result) => {
  return {
    type: GET_POST_DETAIL_SUCCESS,
    result,
  };
};

export const getPostDetailFailed = (error) => {
  return {
    type: GET_POST_DETAIL_FAILED,
    error,
  };
};

export const getPostDetail = (postID) => {
  return (dispatch) => {
    dispatch(getPostDetailBegin());

    axios
      .get(`${host}/posts/${postID}`)
      .then((result) => dispatch(getPostDetailSuccess(result.data)))
      .catch((error) => dispatch(getPostDetailFailed(error.massage)));
  };
};
// End Get Post Detail

// Begin Get Comments
export const getCommentBegin = () => {
  return {
    type: GET_COMMENTS_BEGIN,
  };
};

export const getCommentSuccess = (result) => {
  return {
    type: GET_COMMENTS_SUCCESS,
    result,
  };
};

export const getCommentFailed = (error) => {
  return {
    type: GET_COMMENTS_FAILED,
    error,
  };
};

export const getComment = (postID) => {
  return (dispatch) => {
    dispatch(getCommentBegin());

    axios
      .get(`${host}/posts/${postID}/comments`)
      .then((result) => dispatch(getCommentSuccess(result.data)))
      .catch((error) => dispatch(getCommentFailed(error.massage)));
  };
};
// End Get Comments

// Add Post
export const addPost = (val) => {
  return {
    type: ADD_POST,
    result: val
  };
};

// Update Post
export const updatePost = (val) => {
  return {
    type: UPDATE_POST,
    result: val
  };
};

// Delete Post
export const deletePost = (index) => {
  return {
    type: DELETE_POST,
    index
  };
};

// Add Comment
export const addComment = (val) => {
  return {
    type: ADD_COMMENT,
    result: val
  };
};

// Update Comment
export const updateComment = (val) => {
  return {
    type: UPDATE_COMMENT,
    result: val
  };
};

// Delete Post
export const deleteComment = (index) => {
  return {
    type: DELETE_COMMENT,
    index
  };
};