import {NativeModules} from 'react-native';

import {types} from 'app/constants';

const {LocationModule} = NativeModules;

interface LocationInterface {
  getCurrentLocation: (
    onSuccess: (position: types.Position) => void,
    onFailure: (error: Error) => void,
  ) => void;
}

export default LocationModule as LocationInterface;
