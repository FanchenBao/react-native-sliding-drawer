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
import {View, TouchableOpacity, Text} from 'react-native';
import {NonSlideOpenDrawers} from './src/NonSlideOpenDrawers/index';
import {PeekableDrawer} from './src/PeekableDrawer';
import {PeekableNonSlideOpenDrawers} from './src/PeekableNonSlideOpenDrawers';
import {FadeBgNonSlideOpenBgNotTappable} from './src/FadeBgNonSlideOpenBgNotTappable';
import {FadeBgTappable} from './src/FadeBgTappable';
import {FadeBgPeekableBgNotTappable} from './src/FadeBgPeekableBgNotTappable';

const App = () => {
  const demos = {
    Peekable: <PeekableDrawer />,
    NonSlideOpen: <NonSlideOpenDrawers />,
    PeekableNonSlideOpen: <PeekableNonSlideOpenDrawers />,
    FadeBgPeekableBgNotTappable: <FadeBgPeekableBgNotTappable />,
    FadeBgNonSlideOpenBgNotTappable: <FadeBgNonSlideOpenBgNotTappable />,
    FadeBgTappable: <FadeBgTappable />,
  };
  const [selectedDemo, setSelectedDemo] =
    React.useState<keyof typeof demos>('Peekable');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{marginBottom: 20}}>
        {Object.keys(demos).map(key => {
          const demoExample = key as keyof typeof demos;
          return (
            <TouchableOpacity
              style={{
                backgroundColor:
                  selectedDemo === demoExample ? 'blue' : 'lightgrey',
                padding: 8,
                borderRadius: 5,
                alignItems: 'center',
              }}
              onPress={() => setSelectedDemo(demoExample)}
              key={demoExample}>
              <Text
                style={{
                  color: selectedDemo === demoExample ? 'white' : 'grey',
                  fontSize: 15,
                }}>
                {demoExample}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {demos[selectedDemo]}
    </View>
  );
};

export default App;
