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
  StyleSheet,
  useWindowDimensions,
  Platform,
  NativeModules,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {BottomDrawer} from './src/BottomDrawer';
import {TopDrawer} from './src/TopDrawer';
import {RightDrawer} from './src/RightDrawer';
import {LeftDrawer} from './src/LeftDrawer';

const App = () => {
  const [initializing, setInitializing] = React.useState(true);
  const [selectedDrawer, setSelectedDrawer] = React.useState('');

  const {height, width} = useWindowDimensions();
  const [screenDim, setScreenDim] = React.useState({
    width: 0,
    totalHeight: 0,
    topBar: 0,
    bottomBar: 0,
  });
  const [isPeek, setIsPeek] = React.useState(true);
  const [nonSlideOpen, setNonSlideOpen] = React.useState(false);

  React.useEffect(() => {
    if (initializing) {
      setTimeout(() => setInitializing(false), 200);
    }
  }, [initializing, setInitializing]);

  if (initializing) {
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

  const displayDrawer = (drawer: string) => {
    switch (drawer) {
      case 'top':
        return (
          <TopDrawer
            screenDim={screenDim}
            isInitialPeek={isPeek}
            onDrawerOpen={() => {
              setIsPeek(false);
              setNonSlideOpen(true);
            }}
            onDrawerPeek={() => {
              setIsPeek(true);
              setNonSlideOpen(false);
            }}
            nonSlideOpen={nonSlideOpen}
          />
        );
      case 'bottom':
        return (
          <BottomDrawer
            screenDim={screenDim}
            isInitialPeek={isPeek}
            onDrawerOpen={() => {
              setIsPeek(false);
              setNonSlideOpen(true);
            }}
            onDrawerPeek={() => {
              setIsPeek(true);
              setNonSlideOpen(false);
            }}
            nonSlideOpen={nonSlideOpen}
          />
        );
      case 'left':
        return (
          <LeftDrawer
            screenDim={screenDim}
            isInitialPeek={isPeek}
            onDrawerOpen={() => {
              setIsPeek(false);
              setNonSlideOpen(true);
            }}
            onDrawerPeek={() => {
              setIsPeek(true);
              setNonSlideOpen(false);
            }}
            nonSlideOpen={nonSlideOpen}
          />
        );
      case 'right':
        return (
          <RightDrawer
            screenDim={screenDim}
            isInitialPeek={isPeek}
            onDrawerOpen={() => {
              setIsPeek(false);
              setNonSlideOpen(true);
            }}
            onDrawerPeek={() => {
              setIsPeek(true);
              setNonSlideOpen(false);
            }}
            nonSlideOpen={nonSlideOpen}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.content}>
        <View style={styles.interactContainer}>
          <Text>Choose a Drawer</Text>
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
                    style={{color: loc === selectedDrawer ? 'white' : 'black'}}>
                    {loc}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity
            style={[styles.button, {borderColor: isPeek ? 'green' : 'red'}]}
            onPress={() => setNonSlideOpen(!nonSlideOpen)}>
            <Text style={{color: isPeek ? 'green' : 'red'}}>
              {isPeek ? 'Open' : 'Close'}
            </Text>
          </TouchableOpacity>
        </View>
        {displayDrawer(selectedDrawer)}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  interactContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerOptionsContainer: {
    marginVertical: 10,
  },
  drawerOption: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    width: 60,
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    borderRadius: 15,
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default App;
