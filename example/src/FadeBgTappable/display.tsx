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
 * A function to help display the FadeBgTappable drawers
 * @param drawer Name of drawer to be displayed.
 * @param nonSlideOpen Determines whether the drawer shall be at the open or
 * peek state. true = slide at open state, false = slide at peek state
 * @param isInitialPeek Whether the initial state of the drawer is at peek.
 * This is especially important for nonSlideOpen drawers, as when the drawer
 * is open by pressing a button, the screen re-renders, and as a result we need
 * the drawer to be freshly rendered at the open state.
 * @param hasPeekable Whether to show the peekable section of the drawer.
 * @param onDrawerOpen Callback when the drawer is open, usually used to modify
 * state value for the drawer.
 * @param onDrawerPeek Callback when the drawer is peek, same general purpose
 * as onDrawerOpen.
 * @param onFadeBackgroundPress Callack when the fade background is pressed
 * @returns A sliding drawer component
 */
export const display = (
  drawer: string,
  nonSlideOpen: boolean,
  isInitialPeek: boolean,
  hasPeekable: boolean,
  onDrawerOpen: () => void,
  onDrawerPeek: () => void,
  onFadeBackgroundPress: () => void,
) => {
  switch (drawer) {
    case 'top':
      return (
        <TopDrawer
          isInitialPeek={isInitialPeek}
          hasPeekable={hasPeekable}
          onDrawerOpen={onDrawerOpen}
          onDrawerPeek={onDrawerPeek}
          nonSlideOpen={nonSlideOpen}
          onFadeBackgroundPress={onFadeBackgroundPress}
        />
      );
    case 'bottom':
      return (
        <BottomDrawer
          isInitialPeek={isInitialPeek}
          hasPeekable={hasPeekable}
          onDrawerOpen={onDrawerOpen}
          onDrawerPeek={onDrawerPeek}
          nonSlideOpen={nonSlideOpen}
          onFadeBackgroundPress={onFadeBackgroundPress}
        />
      );
    case 'left':
      return (
        <LeftDrawer
          isInitialPeek={isInitialPeek}
          hasPeekable={hasPeekable}
          onDrawerOpen={onDrawerOpen}
          onDrawerPeek={onDrawerPeek}
          nonSlideOpen={nonSlideOpen}
          onFadeBackgroundPress={onFadeBackgroundPress}
        />
      );
    case 'right':
      return (
        <RightDrawer
          isInitialPeek={isInitialPeek}
          hasPeekable={hasPeekable}
          onDrawerOpen={onDrawerOpen}
          onDrawerPeek={onDrawerPeek}
          nonSlideOpen={nonSlideOpen}
          onFadeBackgroundPress={onFadeBackgroundPress}
        />
      );
    default:
      return null;
  }
};
