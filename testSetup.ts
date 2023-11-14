import '@testing-library/jest-native/extend-expect';
// @ts-ignore
import mockReactNativePermissions from 'react-native-permissions/mock';

import {mswServer} from 'app/testing';

jest.mock('react-native-permissions', () => mockReactNativePermissions);

jest.mock('@shopify/restyle', () => {
  const RealModule = jest.requireActual('@shopify/restyle');
  const RN = jest.requireActual('react-native');
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (_: any, c: any) => c || RN.View;
  return RealModule;
});

beforeEach(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());
