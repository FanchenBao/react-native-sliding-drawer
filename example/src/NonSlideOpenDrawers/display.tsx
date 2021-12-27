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
 * A function to help display the nonSlideOpenDrawers
 * @param drawer Name of drawer to be displayed.
 * @param screenDim Dimension of the screen.
 * @param nonSlideOpen Determines whether the drawer shall be at the open or
 * peek state. true = slide at open state, false = slide at peek state
 * @param isInitialPeek Whether the initial state of the drawer is at peek.
 * This is especially important for nonSlideOpen drawers, as when the drawer
 * is open by pressing a button, the screen re-renders, and as a result we need
 * the drawer to be freshly rendered at the open state.
 * @param onDrawerOpen Callback when the drawer is open, usually used to modify
 * state value for the drawer.
 * @param onDrawerPeek Callback when the drawer is peek, same general purpose
 * as onDrawerOpen.
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
  nonSlideOpen: boolean,
  isInitialPeek: boolean,
  onDrawerOpen: () => void,
  onDrawerPeek: () => void,
) => {
  switch (drawer) {
    case 'top':
      return (
        <TopDrawer
          screenDim={screenDim}
          isInitialPeek={isInitialPeek}
          onDrawerOpen={onDrawerOpen}
          onDrawerPeek={onDrawerPeek}
          nonSlideOpen={nonSlideOpen}
        />
      );
    case 'bottom':
      return (
        <BottomDrawer
          screenDim={screenDim}
          isInitialPeek={isInitialPeek}
          onDrawerOpen={onDrawerOpen}
          onDrawerPeek={onDrawerPeek}
          nonSlideOpen={nonSlideOpen}
        />
      );
    case 'left':
      return (
        <LeftDrawer
          screenDim={screenDim}
          isInitialPeek={isInitialPeek}
          onDrawerOpen={onDrawerOpen}
          onDrawerPeek={onDrawerPeek}
          nonSlideOpen={nonSlideOpen}
        />
      );
    case 'right':
      return (
        <RightDrawer
          screenDim={screenDim}
          isInitialPeek={isInitialPeek}
          onDrawerOpen={onDrawerOpen}
          onDrawerPeek={onDrawerPeek}
          nonSlideOpen={nonSlideOpen}
        />
      );
    default:
      return null;
  }
};
