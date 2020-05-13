import {takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {GET_PHOTOS} from '../../constants/actionConstants';
import {URL_PHOTOS} from '../../constants/configApp';
import {
  getPhotosPending,
  getPhotosRejected,
  getPhotosResolved,
} from '../actions/photo';

const mock = new MockAdapter(axios);

mock.onGet(URL_PHOTOS).reply(200, {
  photos: [],
});

export function* sagaWatcher() {
  yield takeEvery(GET_PHOTOS, sagaWorker);
}

function* sagaWorker() {
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
