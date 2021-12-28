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
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {display} from './display';
import {styles} from './styles';

export const FadeBgNonSlideOpenBgTappable = () => {
  const [selectedDrawer, setSelectedDrawer] = React.useState('bottom');
  const [isInitialPeek, setIsInitialPeek] = React.useState(true);
  const [nonSlideOpen, setNonSlideOpen] = React.useState(false);
  const [enableFadeBackground, setEnableFadeBackground] = React.useState(false);
  /**
   * NOTE: setDummy is crucial to force another rendering of the
   * background. Without this extra rending, the background will
   * not remain dark. upon drawer open. I am not sure of the detailed
   * mechanism, but it seems like animated view is evaluated lazily.
   * Thus, in order for it to use the latest value of deltaXY, we
   * have to force a rending. Otherwise, it keeps using the previous
   * value, which does not give us the correct background color.
   */
  const [dummy, setDummy] = React.useState(true);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={[styles.content]}>
        <View style={styles.interactContainer}>
          <View style={styles.chooseDrawerContainer}>
            <View style={styles.drawerOptionsContainer}>
              {['bottom', 'top', 'left', 'right'].map(loc => {
                return (
                  <TouchableOpacity
                    key={loc}
                    style={[
                      styles.drawerOption,
                      {
                        backgroundColor:
                          loc === selectedDrawer ? 'black' : 'lightgrey',
                      },
                    ]}
                    onPress={() => setSelectedDrawer(loc)}>
                    <Text
                      style={{
                        color: loc === selectedDrawer ? 'white' : 'black',
                      }}>
                      {loc}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            {borderColor: isInitialPeek ? 'green' : 'red'},
          ]}
          onPress={() => {
            setNonSlideOpen(!nonSlideOpen);
            setEnableFadeBackground(true);
          }}>
          <Text style={{color: isInitialPeek ? 'green' : 'red'}}>
            {isInitialPeek ? 'Open' : 'Close'}
          </Text>
        </TouchableOpacity>
        {display(
          selectedDrawer,
          nonSlideOpen,
          isInitialPeek,
          () => {
            setIsInitialPeek(false);
            setNonSlideOpen(true);
            setDummy(!dummy); // force another re-rendering
          },
          () => {
            setIsInitialPeek(true);
            setNonSlideOpen(false);
            setEnableFadeBackground(false);
          },
          enableFadeBackground,
          () => setNonSlideOpen(false),
        )}
      </View>
    </SafeAreaView>
  );
};
