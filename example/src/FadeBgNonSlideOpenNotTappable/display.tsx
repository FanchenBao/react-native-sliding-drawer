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
 * A function to help display the FadeBgNonSlideOpenNotTappable drawers
 * @param drawer Name of drawer to be displayed.
 * @param nonSlideOpen Determines whether the drawer shall be at the open or
 * peek state. true = slide at open state, false = slide at peek state
 * @param onDrawerPeek Callback when the drawer is peek, same general purpose
 * as onDrawerOpen.
 * @returns A sliding drawer component
 */
export const display = (
  drawer: string,
  nonSlideOpen: boolean,
  onDrawerPeek: () => void,
) => {
  switch (drawer) {
    case 'top':
      return (
        <TopDrawer onDrawerPeek={onDrawerPeek} nonSlideOpen={nonSlideOpen} />
      );
    case 'bottom':
      return (
        <BottomDrawer onDrawerPeek={onDrawerPeek} nonSlideOpen={nonSlideOpen} />
      );
    case 'left':
      return (
        <LeftDrawer onDrawerPeek={onDrawerPeek} nonSlideOpen={nonSlideOpen} />
      );
    case 'right':
      return (
        <RightDrawer onDrawerPeek={onDrawerPeek} nonSlideOpen={nonSlideOpen} />
      );
    default:
      return null;
  }
};
