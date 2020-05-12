import {takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {GET_PHOTOS} from '../../constants/actionConstants';
import {
  getPhotosPending,
  getPhotosRejected,
  getPhotosResolved,
} from '../actions/photo';
import {defaultPhotos} from '../../constants/configApp';

const mock = new MockAdapter(axios);
mock.onGet('/listPhotos').reply(200, {
  photos: defaultPhotos,
});

export function* sagaWatcher() {
  yield takeEvery(GET_PHOTOS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(getPhotosPending());
    const payload = yield call(axiosGet);
    yield put(getPhotosResolved(payload));
    yield put(getPhotosRejected());
  } catch (error) {
    console.log(error);
    yield put(getPhotosRejected());
  }
}

async function axiosGet() {
  const response = await axios.get('/listPhotos');
  return response.data.photos;
}
