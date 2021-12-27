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
import {View, TouchableOpacity, Text, useWindowDimensions} from 'react-native';
import {NonSlideOpenDrawers} from './src/NonSlideOpenDrawers/index';
import {PeekableDrawer} from './src/PeekableDrawer';
import {PeekableNonSlideOpenDrawers} from './src/PeekableNonSlideOpenDrawers';
import {FadeBgNonSlideOpenBgTappable} from './src/FadeBgNonSlideOpenBgTappable';

const App = () => {
  const {height} = useWindowDimensions();
  const demos = {
    Peekable: <PeekableDrawer />,
    NonSlideOpen: <NonSlideOpenDrawers />,
    PeekableNonSlideOpen: <PeekableNonSlideOpenDrawers />,
    FadeBgNonSlideOpenBgTappable: <FadeBgNonSlideOpenBgTappable />,
  };
  const [selectedDemo, setSelectedDemo] =
    React.useState<keyof typeof demos>('Peekable');
  return (
    <>
      {demos[selectedDemo]}
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: height / 5,
        }}>
        {Object.keys(demos).map(key => {
          const k = key as keyof typeof demos;
          return (
            <TouchableOpacity
              style={{
                backgroundColor: selectedDemo === k ? 'blue' : 'lightgrey',
                padding: 8,
                borderRadius: 5,
                alignItems: 'center',
              }}
              onPress={() => setSelectedDemo(k)}
              key={k}>
              <Text
                style={{
                  color: selectedDemo === k ? 'white' : 'grey',
                  fontSize: 15,
                }}>
                {k}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default App;
