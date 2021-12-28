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
import {SlidingDrawer} from '../../../react-native-sliding-drawer';
import {RightDrawerContent} from '../../DrawerContent/index';

type PropsT = {
  isInitialPeek: boolean;
  onDrawerOpen: () => void;
  onDrawerPeek: () => void;
  nonSlideOpen: boolean;
  enableFadeBackground: boolean;
  onFadeBackgroundPress: () => void;
};

/**
 * Example for a right drawer
 */
export const RightDrawer: React.FC<PropsT> = props => {
  const {
    onDrawerOpen,
    onDrawerPeek,
    isInitialPeek,
    nonSlideOpen,
    enableFadeBackground,
    onFadeBackgroundPress,
  } = props;
  const peekSize = 0;
  const openSize = 200;

  return (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="right"
      expandable={true}
      onDrawerOpen={onDrawerOpen}
      onDrawerPeek={onDrawerPeek}
      isInitialPeek={isInitialPeek}
      enableNonSlideOpen={true}
      nonSlideOpen={nonSlideOpen}
      maxPct={0.7}
      enableFadeBackground={enableFadeBackground}
      onFadeBackgroundPress={onFadeBackgroundPress}>
      <RightDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
