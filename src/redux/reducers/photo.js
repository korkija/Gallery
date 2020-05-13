import {
  GET_PHOTOS_PENDING,
  GET_PHOTOS_REJECTED,
  GET_PHOTOS_RESOLVED,
  GET_PHOTOS_PHONE_RESOLVED,
  SET_PHOTO,
  SET_INDEX_PHOTO_PHONE_LIST,
} from '../../constants/actionConstants';

const initial_data = {
  isLoading: true,
  photosList: [],
  photosPhoneList: [],
  indexPhotosPhoneList: 0,
  id: '',
  alt_description: '',
  urls: {},
  width: 0,
  height: 0,
};

export const photos = (state = initial_data, action) => {
  switch (action.type) {
    case GET_PHOTOS_PENDING: {
      return {
        ...state,
        isLoading: true,
        errorMsg: '',
      };
    }
    case GET_PHOTOS_RESOLVED: {
      return {
        ...state,
        isLoading: false,
        photosList: action.payLoad,
      };
    }
    case GET_PHOTOS_REJECTED: {
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payLoad,
      };
    }
    case SET_PHOTO: {
      return {
        ...state,
        isLoading: false,
        photosList: action.payLoad,
      };
    }
    case SET_INDEX_PHOTO_PHONE_LIST: {
      return {
        ...state,
        indexPhotosPhoneList: action.payLoad,
      };
    }
    case GET_PHOTOS_PHONE_RESOLVED: {
      return {
        ...state,
        isLoading: false,
        photosPhoneList: action.payLoad,
      };
    }
    default: {
      return state;
    }
  }
};
