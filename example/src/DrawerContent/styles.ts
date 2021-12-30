/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  separator: {
    borderWidth: 1,
    borderColor: 'black',
  },
  drawerContainer: {
    flex: 1,
    borderRadius: 15,
    // borderWidth: 2,
    // borderColor: 'blue',
  },
  peekContainer: {
    padding: 18,
    // borderWidth: 2,
    // borderColor: 'brown',
  },
  openContainer: {
    flex: 1,
    padding: 18,
    // borderWidth: 2,
    // borderColor: 'green',
  },
  horiDrawerTextContainer: {
    top: '20%',
    width: 200,
    alignItems: 'center',
  },
  leftTextRotation: {
    transform: [{rotate: '270deg'}, {translateY: 80}], // hardcoded
  },
  rightTextRotation: {
    transform: [{rotate: '270deg'}, {translateY: -80}], // hardcoded
  },
});
