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
import {TopDrawerContent} from '../../DrawerContent/index';

type PropsT = {
  isInitialPeek: boolean;
  onDrawerOpen: () => void;
  onDrawerPeek: () => void;
  nonSlideOpen: boolean;
  enableFadeBackground: boolean;
  onFadeBackgroundPress: () => void;
};

/**
 * Example for a top drawer
 */
export const TopDrawer: React.FC<PropsT> = props => {
  const {
    onDrawerOpen,
    onDrawerPeek,
    isInitialPeek,
    nonSlideOpen,
    enableFadeBackground,
    onFadeBackgroundPress,
  } = props;
  const peekSize = 0;
  const openSize = 250;

  return (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="top"
      expandable={true}
      onDrawerOpen={onDrawerOpen}
      onDrawerPeek={onDrawerPeek}
      isInitialPeek={isInitialPeek}
      enableNonSlideOpen={true}
      nonSlideOpen={nonSlideOpen}
      enableFadeBackground={enableFadeBackground}
      onFadeBackgroundPress={onFadeBackgroundPress}>
      <TopDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
