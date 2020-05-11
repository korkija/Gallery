import {
  GET_PHOTOS_PENDING,
  GET_PHOTOS_REJECTED,
  GET_PHOTOS_RESOLVED,
  GET_PHOTOS,
  SET_PHOTO,
} from '../../constants/actionConstants';

export const setPhoto = newPhoto => (dispatch, getState) => {
  const {photosList} = getState();
  const listPhoto = photosList.concat(newPhoto);
  dispatch(setPhotoAction(listPhoto));
};
const setPhotoAction = payLoad => ({
  type: SET_PHOTO,
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
  type: GET_PHOTOS,
});
