import React, {useEffect, useState} from 'react';
import {Alert, Button} from 'react-native';
import {RESULTS} from 'react-native-permissions';

import {types} from 'app/constants';
import {
  checkLocationPermission,
  getLocation,
  requestLocationPermission,
} from 'app/services/locationService';

const LocationButton = () => {
  const [permissionStatus, setPermissionStatus] =
    useState<types.PermissionStatus | null>(null);
  const [location, setLocation] = useState<types.Position | null>(null);

  useEffect(() => {
    checkLocationPermission().then(setPermissionStatus);
  }, []);

  useEffect(() => {
    if (permissionStatus === RESULTS.GRANTED) {
      getLocation(setLocation, error => console.log(error));
    }
  }, [permissionStatus]);

  const requestPermission = async () => {
    if (permissionStatus === RESULTS.DENIED) {
      requestLocationPermission().then(setPermissionStatus);
    }
    if (permissionStatus === RESULTS.BLOCKED) {
      Alert.alert(
        'Permission blocked',
        'Open app settings and grant location permission',
      );
    }
  };

  const buttonTitle = {
    [RESULTS.DENIED]: 'Get permission',
    [RESULTS.BLOCKED]: 'Permission not granted',
    [RESULTS.GRANTED]: location
      ? `${location.latitude.toFixed(2)}, ${location.longitude.toFixed(2)}`
      : 'locating...',
    [RESULTS.LIMITED]: location
      ? `${location.latitude.toFixed(2)}, ${location.longitude.toFixed(2)}`
      : 'locating...',
    [RESULTS.UNAVAILABLE]: 'Location unavailable',
  } as const;

  return (
    permissionStatus && (
      <Button
        onPress={requestPermission}
        title={buttonTitle[permissionStatus]}
      />
    )
  );
};

export default LocationButton;
