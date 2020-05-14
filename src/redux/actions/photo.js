import {
  GET_PHOTOS_PENDING,
  GET_PHOTOS_REJECTED,
  GET_PHOTOS_RESOLVED,
  GET_PHOTOS_PHONE_RESOLVED,
  SET_INDEX_PHOTO_PHONE_LIST,
  GET_PHOTOS_API,
  GET_PHOTOS_PHONE_GALLERY,
  SET_PHOTO,
} from '../../constants/actionConstants';
import 'moment/min/locales';

export const setPhoto = newPhoto => (dispatch, getState) => {
  const {photosList} = getState();
  const listPhoto = photosList.concat(newPhoto);
  dispatch(setPhotoAction(listPhoto));
};
const setPhotoAction = payLoad => ({
  type: SET_PHOTO,
  payLoad,
});
export const setIndexPhotosPhoneList = payLoad => ({
  type: SET_INDEX_PHOTO_PHONE_LIST,
  payLoad,
});

export const getPhotosPending = () => ({
  type: GET_PHOTOS_PENDING,
});

export const getPhotosResolved = payLoad => ({
  type: GET_PHOTOS_RESOLVED,
  payLoad,
});

export const getPhotosRejected = () => ({
  type: GET_PHOTOS_REJECTED,
  payLoad: 'Something wrong!',
});

export const getListPhotos = () => ({
  type: GET_PHOTOS_API,
});

export const getPhotosPhoneResolved = payLoad => {
  return {
    type: GET_PHOTOS_PHONE_RESOLVED,
    payLoad,
  };
};

export const getPhotosPhone = () => ({
  type: GET_PHOTOS_PHONE_GALLERY,
});
