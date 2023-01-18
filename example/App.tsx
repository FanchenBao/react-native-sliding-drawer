/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

/**
 * NOTE: this is a comprehensive example of SlidingDrawer, including various
 * use cases. Use this code, along with associated components to familiarize
 * with more advanced use cases of SlidingDrawer.
 */
import * as React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {NonSlideOpen} from './src/NonSlideOpen/index';
import {Peekable} from './src/Peekable';
import {FadeBgNonSlideOpenNotTappable} from './src/FadeBgNonSlideOpenNotTappable';
import {FadeBgTappable} from './src/FadeBgTappable';
import {FadeBgPeekableNotTappable} from './src/FadeBgPeekableNotTappable';
import {Scrollable} from './src/Scrollable';

const App = () => {
  const demos = {
    Peekable: <Peekable />,
    NonSlideOpen: <NonSlideOpen />,
    FadeBgPeekableNotTappable: <FadeBgPeekableNotTappable />,
    FadeBgNonSlideOpenNotTappable: <FadeBgNonSlideOpenNotTappable />,
    FadeBgTappable: <FadeBgTappable />,
    Scrollable: <Scrollable />,
  };
  const [selectedDemo, setSelectedDemo] =
    React.useState<keyof typeof demos>('Scrollable');
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
