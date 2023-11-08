import '@testing-library/jest-native/extend-expect';

jest.useFakeTimers();

jest.mock('@shopify/restyle', () => {
  const RealModule = jest.requireActual('@shopify/restyle');
  const RN = jest.requireActual('react-native');
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (_: any, c: any) => c || RN.View;
  return RealModule;
});

export {};
