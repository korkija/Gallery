import {
  GET_PHOTOS_PENDING,
  GET_PHOTOS_REJECTED,
  GET_PHOTOS_RESOLVED,
  GET_PHOTOS_PHONE_RESOLVED,
  SET_INDEX_PHOTO_PHONE_LIST,
  GET_PHOTOS,
  SET_PHOTO,
} from '../../constants/actionConstants';
import CameraRoll from '@react-native-community/cameraroll';
import moment from 'moment';
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
const setIndexPhotosPhoneList = payLoad => ({
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
  type: GET_PHOTOS,
});

const getPhotosPhoneResolved = payLoad => {
  console.log('getPhotosPhoneResolved ', payLoad);
  return {
    type: GET_PHOTOS_PHONE_RESOLVED,
    payLoad,
  };
};

export const getPhotosPhone = () => (dispatch, getState) => {
  const {photosPhoneList, indexPhotosPhoneList} = getState();
  console.log('indexPhotosPhoneList ', indexPhotosPhoneList);
  const takePhotos = async () => {
    try {
      const data = await CameraRoll.getPhotos({
        first: 5,
        after: indexPhotosPhoneList.toString(),
      });
      const arr = data.edges.map(item => {
        return {
          date: moment(new Date(item.node.timestamp), 'LLLL').format(
            'YYYY-MM-DD H:m:s',
          ),
          url: item.node.image.uri,
        };
      });
      dispatch(setIndexPhotosPhoneList(data.page_info.end_cursor));
      dispatch(getPhotosPhoneResolved([...photosPhoneList, ...arr]));
    } catch (e) {
      alert(e);
      console.log('error - ', e);
    }
  };
  takePhotos();
};
