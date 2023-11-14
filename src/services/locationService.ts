import {Platform} from 'react-native';
import {check, PERMISSIONS, request} from 'react-native-permissions';

import {types} from 'app/constants';

import LocationModule from './locationModule';

const locationPermission = Platform.select({
  ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
})!;

export const checkLocationPermission = (): Promise<types.PermissionStatus> =>
  check(locationPermission);

export const requestLocationPermission = (): Promise<types.PermissionStatus> =>
  request(locationPermission);

export const getLocation = (
  onSuccess: (position: types.Position) => void,
  onFailure: (error: Error) => void,
) => LocationModule.getCurrentLocation(onSuccess, onFailure);
