import axios from 'axios';

import {URL_PHOTOS} from '../../constants/configApp';
import {
    GET_PHOTOS_PENDING,
    GET_PHOTOS_REJECTED,
    GET_PHOTOS_RESOLVED,
} from '../../constants/actionConstants';

const getPhotosPending = () => ({
    type: GET_PHOTOS_PENDING,
});

const getPhotosResolved = (payLoad) => ({
    type: GET_PHOTOS_RESOLVED,
    payLoad,
});

const getPhotosRejected = () => ({
    type: GET_PHOTOS_REJECTED,
    payLoad: 'Something wrong!',
});

export const getListPhotos = () => (dispatch) => {
    dispatch(getPhotosPending());
    axios
        .get(URL_PHOTOS)
        .then(({data}) => {
            console.log('data.result');
            console.log(data);
            dispatch(getPhotosResolved(data));
        })
        .catch((error) => {
            console.log(error);
            dispatch(getPhotosRejected());
        });
};
