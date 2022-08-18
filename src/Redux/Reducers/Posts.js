import {
    GET_DATA_BEGIN,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED,

    GET_POST_DETAIL_BEGIN,
    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_FAILED,

    GET_COMMENTS_BEGIN,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAILED
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
  
      default:
        return state;
    }
  };
  export default getPosts;