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
 * A function to help display the Fade Background Peekable Not Tappable drawers
 * @param drawer Name of drawer to be displayed.
 * @returns A sliding drawer component
 */
export const display = (drawer: string) => {
  switch (drawer) {
    case 'top':
      return <TopDrawer />;
    case 'bottom':
      return <BottomDrawer />;
    case 'left':
      return <LeftDrawer />;
    case 'right':
      return <RightDrawer />;
    default:
      return null;
  }
};
