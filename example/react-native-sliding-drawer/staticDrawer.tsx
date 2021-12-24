/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {View, ViewStyle} from 'react-native';

// Import types

type PropsT = {
  style: ViewStyle; // custom styles of the sliding window.
};

/**
Functional component of a static drawer that has the same layout as the peek
state of a dynamic drawer.
 */
export const StaticDrawer: React.FC<PropsT> = props => {
  const {children, style} = props;
  return <View style={[{position: 'absolute'}, style]}>{children}</View>;
};
