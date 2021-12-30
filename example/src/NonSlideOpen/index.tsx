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

export const NonSlideOpen = () => {
  const [selectedDrawer, setSelectedDrawer] = React.useState('bottom');
  const [isInitialPeek, setIsInitialPeek] = React.useState(true);
  const [nonSlideOpen, setNonSlideOpen] = React.useState(false);
  const [hasPeekable, setHasPeekable] = React.useState(false);

  return (
    <>
      <DrawerChoices
        selectedDrawer={selectedDrawer}
        onChoicePress={setSelectedDrawer}
        enableNonSlideOpen={true}
        isInitialPeek={isInitialPeek}
        onNonSlideOpenButtonPress={() => setNonSlideOpen(!nonSlideOpen)}
        hasPeekable={hasPeekable}
        onPeekableToggleButtonPress={() => setHasPeekable(!hasPeekable)}
      />
      {display(
        selectedDrawer,
        nonSlideOpen,
        isInitialPeek,
        hasPeekable,
        () => {
          setIsInitialPeek(false);
          setNonSlideOpen(true);
        },
        () => {
          setIsInitialPeek(true);
          setNonSlideOpen(false);
        },
      )}
    </>
  );
};
