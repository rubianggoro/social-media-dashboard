import {
    GET_DATA_BEGIN,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED,

    GET_ALBUM_DETAIL_BEGIN,
    GET_ALBUM_DETAIL_SUCCESS,
    GET_ALBUM_DETAIL_FAILED,

    GET_PHOTOS_BEGIN,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILED
  } from "../Actions/Albums";
  
  const initState = {
    data: [],
    error: null,
    isLoading: false,
    dataAlbumDetail: {},
    dataPhotos: []
  };
  
  const getAlbums = (state = initState, action) => {
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

      case GET_ALBUM_DETAIL_BEGIN:
        return {
          ...state,
          isLoading: true,
        };

      case GET_ALBUM_DETAIL_SUCCESS:
        return {
          ...state,
          isLoading: false,
          dataAlbumDetail: action.result,
        };

      case GET_ALBUM_DETAIL_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };

      case GET_PHOTOS_BEGIN:
        return {
          ...state,
          isLoading: true,
        };

      case GET_PHOTOS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          dataPhotos: action.result,
        };

      case GET_PHOTOS_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  export default getAlbums;