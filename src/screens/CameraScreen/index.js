/**
 * Screen for Camera.
 */

import React from 'react';
import {Camera} from '../../components/Camera/Camera';

export const CameraScreen = ({route}) => {
  return <Camera takePicture={route.params.takePicture} />;
};
