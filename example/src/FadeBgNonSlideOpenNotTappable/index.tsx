/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {display} from './display';
import {DrawerChoices} from '../DrawerChoices';

export const FadeBgNonSlideOpenNotTappable = () => {
  const [selectedDrawer, setSelectedDrawer] = React.useState('bottom');
  const [nonSlideOpen, setNonSlideOpen] = React.useState(false);
  const [hasPeekable, setHasPeekable] = React.useState(false);

  return (
    <>
      <DrawerChoices
        selectedDrawer={selectedDrawer}
        onChoicePress={setSelectedDrawer}
        enableNonSlideOpen={true}
        onNonSlideOpenButtonPress={() => setNonSlideOpen(!nonSlideOpen)}
        hasPeekable={hasPeekable}
        onPeekableToggleButtonPress={() => setHasPeekable(!hasPeekable)}
      />
      {display(selectedDrawer, nonSlideOpen, hasPeekable, () =>
        setNonSlideOpen(false),
      )}
    </>
  );
};
