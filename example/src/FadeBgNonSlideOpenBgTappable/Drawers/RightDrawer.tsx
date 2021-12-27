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
  screenDim: {
    totalHeight: number;
    width: number;
    topBar: number;
    bottomBar: number;
  };
  isInitialPeek: boolean;
  onDrawerOpen: () => void;
  onDrawerPeek: () => void;
  nonSlideOpen: boolean;
  nonSlideOpenEnabled: boolean;
  enableFadeBackground: boolean;
  onFadeBackgroundPress: () => void;
};

/**
 * Example for a right drawer
 */
export const RightDrawer: React.FC<PropsT> = props => {
  const {
    screenDim,
    onDrawerOpen,
    onDrawerPeek,
    isInitialPeek,
    nonSlideOpen,
    nonSlideOpenEnabled,
    enableFadeBackground,
    onFadeBackgroundPress,
  } = props;
  const peekSize = 0;
  const openSize = 200;

  return (
    <SlidingDrawer
      screenDim={screenDim}
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="right"
      expandable={true}
      onDrawerOpen={onDrawerOpen}
      onDrawerPeek={onDrawerPeek}
      isInitialPeek={isInitialPeek}
      nonSlideOpenEnabled={nonSlideOpenEnabled}
      nonSlideOpen={nonSlideOpen}
      maxPct={0.6}
      enableFadeBackground={enableFadeBackground}
      onFadeBackgroundPress={onFadeBackgroundPress}>
      <RightDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};