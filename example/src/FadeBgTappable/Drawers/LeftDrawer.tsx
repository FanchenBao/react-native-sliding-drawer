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
import {SlidingDrawer} from '../../react-native-sliding-drawer';
import {LeftDrawerContent} from '../../DrawerContent/index';

type PropsT = {
  isInitialPeek: boolean;
  onDrawerOpen: () => void;
  onDrawerPeek: () => void;
  nonSlideOpen: boolean;
  onFadeBackgroundPress: () => void;
};

/**
 * Example for a left drawer
 */
export const LeftDrawer: React.FC<PropsT> = props => {
  const {
    onDrawerOpen,
    onDrawerPeek,
    isInitialPeek,
    nonSlideOpen,
    onFadeBackgroundPress,
  } = props;
  const peekSize = 95;
  const openSize = 240;

  return (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="left"
      onDrawerOpen={onDrawerOpen}
      onDrawerPeek={onDrawerPeek}
      isInitialPeek={isInitialPeek}
      enableNonSlideOpen={true}
      nonSlideOpen={nonSlideOpen}
      maxPct={0.7}
      enableFadeBackground={true}
      onFadeBackgroundPress={onFadeBackgroundPress}>
      <LeftDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
