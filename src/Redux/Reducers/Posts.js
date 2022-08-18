import {
    GET_DATA_BEGIN,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED,

    GET_POST_DETAIL_BEGIN,
    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_FAILED,

    GET_COMMENTS_BEGIN,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAILED,

    ADD_POST,
    UPDATE_POST,
    DELETE_POST,

    ADD_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT
  } from "../Actions/Posts";
  
  const initState = {
    data: [],
    error: null,
    isLoading: false,
    dataPostDetail: {},
    dataComments: []
  };
  
  const getPosts = (state = initState, action) => {
    switch (action.type) {

      case GET_DATA_BEGIN:
        return {
          ...state,
          isLoading: true,
        };

      case GET_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.result,
        };

      case GET_DATA_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };

      case GET_POST_DETAIL_BEGIN:
        return {
          ...state,
          isLoading: true,
        };

      case GET_POST_DETAIL_SUCCESS:
        return {
          ...state,
          isLoading: false,
          dataPostDetail: action.result,
        };

      case GET_POST_DETAIL_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };

      case GET_COMMENTS_BEGIN:
        return {
          ...state,
          isLoading: true,
        };

      case GET_COMMENTS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          dataComments: action.result,
        };

      case GET_COMMENTS_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };

      case ADD_POST:
        return {
          ...state,
          data: [...state.data, action.result]
        }

      case UPDATE_POST:
        const posts =  [...state.data];
        const postIndex = posts.findIndex((post) => post.id === action.result.id)

        posts[postIndex] = action.result
        return {
          ...state,
          data: posts
        }

      case DELETE_POST:
        const postList = [
          ...state.data.slice(0, action.index),
          ...state.data.slice(action.index + 1)
        ]
        return {
          ...state,
          data: postList
        }

      case ADD_COMMENT:
        return {
          ...state,
          dataComments: [...state.dataComments, action.result]
        }

      case UPDATE_COMMENT:
        const comments =  [...state.dataComments];
        const commentIndex = comments.findIndex((comment) => comment.id === action.result.id)

        comments[commentIndex] = action.result
        return {
          ...state,
          dataComments: comments
        }

      case DELETE_COMMENT:
        const commentList = [
          ...state.dataComments.slice(0, action.index),
          ...state.dataComments.slice(action.index + 1)
        ]
        return {
          ...state,
          dataComments: commentList
        }
  
      default:
        return state;
    }
  };
  export default getPosts;