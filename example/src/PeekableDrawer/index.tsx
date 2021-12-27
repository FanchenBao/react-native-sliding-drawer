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
import {
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
  Platform,
  NativeModules,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {display} from './display';
import {styles} from './styles';

export const PeekableDrawer = () => {
  const [initializing, setInitializing] = React.useState(true);
  const [selectedDrawer, setSelectedDrawer] = React.useState('');

  // Drawer-related
  const {height, width} = useWindowDimensions();
  const [screenDim, setScreenDim] = React.useState({
    width: 0,
    totalHeight: 0,
    topBar: 0,
    bottomBar: 0,
  });

  React.useEffect(() => {
    // A little delay when initializing the app to grab the screen dimension
    if (initializing) {
      setTimeout(() => setInitializing(false), 200);
    }
  }, [initializing, setInitializing]);

  if (initializing) {
    // Grabing screen dimension, including the top and bottom bar height
    return (
      <SafeAreaView style={styles.backgroundStyle}>
        <View
          style={styles.content}
          onLayout={e => {
            e.persist();
            if (Platform.OS === 'ios') {
              NativeModules.StatusBarManager.getHeight(
                (h: {height: number}) => {
                  setScreenDim({
                    topBar: h.height,
                    bottomBar: height - h.height - e.nativeEvent.layout.height,
                    totalHeight: height,
                    width: width,
                  });
                },
              );
            } else {
              setScreenDim({
                topBar: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
                bottomBar: 0,
                totalHeight:
                  height +
                  (StatusBar.currentHeight ? StatusBar.currentHeight : 0),
                width: width,
              });
            }
          }}
        />
      </SafeAreaView>
    );
  }

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
        {display(selectedDrawer, screenDim)}
      </View>
    </SafeAreaView>
  );
};