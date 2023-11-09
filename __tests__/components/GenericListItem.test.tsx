import React from 'react';

import GenericListItem from 'app/components/GenericListItem';
import {renderWithTheme, screen} from 'app/testing';

const props = {
  label: 'Humidity',
  value: '1012 hPa',
};

describe('GenericListItem component', () => {
  it('should render when data is provided', () => {
    renderWithTheme(<GenericListItem {...props} />);
  });

  it('should render label and value', async () => {
    renderWithTheme(<GenericListItem {...props} />);
    const label = await screen.findByTestId('GenericListItemLabel');
    expect(label).toHaveTextContent(props.label);

    const value = await screen.findByTestId('GenericListItemValue');
    expect(value).toHaveTextContent(props.value);
  });
});
