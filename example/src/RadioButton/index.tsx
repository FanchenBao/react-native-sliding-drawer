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
import {StyleSheet, View} from 'react-native';

type PropsT = {
  selected: boolean;
};

export const RadioButton: React.FC<PropsT> = props => {
  const {selected} = props;
  return (
    <View
      style={[styles.outerCircle, {borderColor: selected ? 'black' : 'grey'}]}>
      {selected && <View style={styles.innerCircle} />}
    </View>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: 'black',
  },
});
