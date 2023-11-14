import React, {useEffect, useState} from 'react';
import {Alert, Button} from 'react-native';
import {RESULTS} from 'react-native-permissions';

import {types} from 'app/constants';
import {
  checkLocationPermission,
  requestLocationPermission,
} from 'app/services/locationService';

const LocationButton = () => {
  const [permissionStatus, setPermissionStatus] =
    useState<types.PermissionStatus | null>(null);

  useEffect(() => {
    checkLocationPermission().then(setPermissionStatus);
  }, []);

  const requestPermission = () => {
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
    [RESULTS.GRANTED]: 'lat,long',
    [RESULTS.LIMITED]: 'lat,long',
    [RESULTS.UNAVAILABLE]: 'Location unavailable',
  };

  return (
    permissionStatus && (
      <Button
        onPress={requestPermission}
        title={buttonTitle[permissionStatus]}
      />
    )
  );
};

export default React.memo(LocationButton);
