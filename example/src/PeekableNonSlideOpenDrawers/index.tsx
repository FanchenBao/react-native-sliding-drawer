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

export const PeekableNonSlideOpenDrawers = () => {
  const [selectedDrawer, setSelectedDrawer] = React.useState('bottom');
  const [isInitialPeek, setIsInitialPeek] = React.useState(true);
  const [nonSlideOpen, setNonSlideOpen] = React.useState(false);

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
          onPress={() => setNonSlideOpen(!nonSlideOpen)}>
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
