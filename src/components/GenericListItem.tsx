import {createBox, createText} from '@shopify/restyle';
import React from 'react';

import {Theme} from 'app/styles';

const Box = createBox<Theme>();
const Text = createText<Theme>();

interface Props {
  label: string;
  value: string | number;
}

const GenericListItem = ({label, value}: Props) => (
  <Box
    flexDirection="row"
    justifyContent="space-between"
    paddingHorizontal="m"
    paddingVertical="m"
    borderBottomColor="divider"
    borderBottomWidth={1}>
    <Text testID="GenericListItemLabel" variant="body">
      {label}
    </Text>
    <Text testID="GenericListItemValue" variant="body" color="textMuted">
      {value}
    </Text>
  </Box>
);

export default React.memo(GenericListItem);
