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
import {View, SafeAreaView} from 'react-native';
import {display} from './display';
import {styles} from './styles';
import {DrawerChoices} from '../DrawerChoices';

export const FadeBgTappable = () => {
  const [selectedDrawer, setSelectedDrawer] = React.useState('bottom');
  const [isInitialPeek, setIsInitialPeek] = React.useState(true);
  const [nonSlideOpen, setNonSlideOpen] = React.useState(false);
  /**
   * NOTE: 2021-12-28
   *
   * dummy is used to perform an extra re-render to set the fade
   * background in the correct state. This action is performed upon drawer
   * open. If this extra re-render is not executed, the background does not
   * remain dark. Unfortunately, I do not know the detailed mechanism why an
   * additional re-render is needed for the fade background to work in this
   * situation, but it seems that Animated View is lazily evaluated. Thus any
   * change in state value requires an extra re-render to take effect. This is
   * just my guess.
   */
  const [dummy, setDummy] = React.useState(true);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.content}>
        <DrawerChoices
          selectedDrawer={selectedDrawer}
          onChoicePress={setSelectedDrawer}
          enableNonSlideOpen={true}
          isInitialPeek={isInitialPeek}
          onNonSlideOpenButtonPress={() => setNonSlideOpen(!nonSlideOpen)}
        />
        {display(
          selectedDrawer,
          nonSlideOpen,
          isInitialPeek,
          () => {
            setIsInitialPeek(false);
            setNonSlideOpen(true);
            setDummy(!dummy);
          },
          () => {
            setIsInitialPeek(true);
            setNonSlideOpen(false);
          },
          () => setNonSlideOpen(false),
        )}
      </View>
    </SafeAreaView>
  );
};
