/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { View, ViewStyle } from 'react-native';

type PropsT = {
  style: ViewStyle; // custom styles of the sliding window.
};

/**
Functional component of a static drawer that has the same layout as the peek
state of a dynamic drawer.

NOTE: the static and dynamic drawer must be separately defined. If we create
both drawers within the same component, the props won't update if one
switches from a non-expandable drawer to an expandable. I don't know that
cause exactly, but it is most likely related to how Animate.View is
implemented.
 */
export const StaticDrawer: React.FC<PropsT> = (props) => {
  const { children, style } = props;
  return <View style={[{ position: 'absolute' }, style]}>{children}</View>;
};
