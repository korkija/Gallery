import {takeEvery, put, call, select} from 'redux-saga/effects';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  GET_PHOTOS_API,
  GET_PHOTOS_PHONE_GALLERY,
} from '../../constants/actionConstants';
import {URL_PHOTOS} from '../../constants/configApp';
import {
  getPhotosPending,
  getPhotosRejected,
  getPhotosResolved,
  setIndexPhotosPhoneList,
  getPhotosPhoneResolved,
} from '../actions/photo';
import CameraRoll from '@react-native-community/cameraroll';
import moment from 'moment';

const mock = new MockAdapter(axios);

mock.onGet(URL_PHOTOS).reply(200, {
  photos: [],
});

export function* sagaWatcher() {
  yield takeEvery(GET_PHOTOS_API, sagaGetPhotoAPI);
  yield takeEvery(GET_PHOTOS_PHONE_GALLERY, sagaGetPhotosPhone);
}

function* sagaGetPhotoAPI() {
  try {
    yield put(getPhotosPending());
    const payload = yield call(axiosGet);
    yield put(getPhotosResolved(payload));
  } catch (error) {
    console.log(error);
    yield put(getPhotosRejected());
  }
}

async function axiosGet() {
  const response = await axios.get(URL_PHOTOS);
  return response.data.photos;
}

function* sagaGetPhotosPhone() {
  const {photosPhoneList, indexPhotosPhoneList} = yield select();
  try {
    const data = yield CameraRoll.getPhotos({
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
    yield put(setIndexPhotosPhoneList(data.page_info.end_cursor));
    yield put(getPhotosPhoneResolved([...photosPhoneList, ...arr]));
  } catch (e) {
    console.log('error - ', e);
  }
}
