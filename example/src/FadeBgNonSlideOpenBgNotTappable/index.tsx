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

export const FadeBgNonSlideOpenBgNotTappable = () => {
  const [selectedDrawer, setSelectedDrawer] = React.useState('bottom');
  const [nonSlideOpen, setNonSlideOpen] = React.useState(false);

  return (
    <>
      <DrawerChoices
        selectedDrawer={selectedDrawer}
        onChoicePress={setSelectedDrawer}
        enableNonSlideOpen={true}
        onNonSlideOpenButtonPress={() => setNonSlideOpen(!nonSlideOpen)}
      />
      {display(selectedDrawer, nonSlideOpen, () => setNonSlideOpen(false))}
    </>
  );
};
