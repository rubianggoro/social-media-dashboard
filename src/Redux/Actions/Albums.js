import axios from "axios";
import { host } from "../../Helpers/constants";

export const GET_DATA_BEGIN = "GET_DATA_BEGIN";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "GET_DATA_FAILED";

export const GET_ALBUM_DETAIL_BEGIN = "GET_ALBUM_DETAIL_BEGIN";
export const GET_ALBUM_DETAIL_SUCCESS = "GET_ALBUM_DETAIL_SUCCESS";
export const GET_ALBUM_DETAIL_FAILED = "GET_ALBUM_DETAIL_FAILED";

export const GET_PHOTOS_BEGIN = "GET_PHOTOS_BEGIN";
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";
export const GET_PHOTOS_FAILED = "GET_PHOTOS_FAILED";

// Begin Get Album List
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

export const getAlbumByUserId = (userID) => {
  return (dispatch) => {
    dispatch(getDataBegin());

    axios
      .get(`${host}/users/${userID}/albums`)
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error.massage)));
  };
};
// End Get Album List

// Begin Get Album Detail
export const getAlbumDetailBegin = () => {
  return {
    type: GET_ALBUM_DETAIL_BEGIN,
  };
};

export const getAlbumDetailSuccess = (result) => {
  return {
    type: GET_ALBUM_DETAIL_SUCCESS,
    result,
  };
};

export const getAlbumDetailFailed = (error) => {
  return {
    type: GET_ALBUM_DETAIL_FAILED,
    error,
  };
};

export const getAlbumDetail = (albumID) => {
  return (dispatch) => {
    dispatch(getAlbumDetailBegin());

    axios
      .get(`${host}/albums/${albumID}`)
      .then((result) => dispatch(getAlbumDetailSuccess(result.data)))
      .catch((error) => dispatch(getAlbumDetailFailed(error.massage)));
  };
};
// End Get Album Detail

// Begin Get Photos
export const getPhotoBegin = () => {
  return {
    type: GET_PHOTOS_BEGIN,
  };
};

export const getPhotoSuccess = (result) => {
  return {
    type: GET_PHOTOS_SUCCESS,
    result,
  };
};

export const getPhotoFailed = (error) => {
  return {
    type: GET_PHOTOS_FAILED,
    error,
  };
};

export const getPhotos = (albumID) => {
  return (dispatch) => {
    dispatch(getPhotoBegin());

    axios
      .get(`${host}/albums/${albumID}/photos`)
      .then((result) => dispatch(getPhotoSuccess(result.data)))
      .catch((error) => dispatch(getPhotoFailed(error.massage)));
  };
};
// End Get Photos