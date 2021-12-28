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

export const NonSlideOpenDrawers = () => {
  const [selectedDrawer, setSelectedDrawer] = React.useState('bottom');
  const [isInitialPeek, setIsInitialPeek] = React.useState(true);
  const [nonSlideOpen, setNonSlideOpen] = React.useState(false);

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
          },
          () => {
            setIsInitialPeek(true);
            setNonSlideOpen(false);
          },
        )}
      </View>
    </SafeAreaView>
  );
};
