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
import {TopDrawer} from './Drawers/TopDrawer';
import {BottomDrawer} from './Drawers/BottomDrawer';
import {LeftDrawer} from './Drawers/LeftDrawer';
import {RightDrawer} from './Drawers/RightDrawer';

/**
 * A function to help display the peekableDrawer
 * @param drawer Name of drawer to be displayed.
 * @param screenDim Dimension of the screen.
 * @returns A sliding drawer component
 */
export const display = (
  drawer: string,
  screenDim: {
    width: number;
    totalHeight: number;
    topBar: number;
    bottomBar: number;
  },
) => {
  switch (drawer) {
    case 'top':
      return <TopDrawer screenDim={screenDim} />;
    case 'bottom':
      return <BottomDrawer screenDim={screenDim} />;
    case 'left':
      return <LeftDrawer screenDim={screenDim} />;
    case 'right':
      return <RightDrawer screenDim={screenDim} />;
    default:
      return null;
  }
};
