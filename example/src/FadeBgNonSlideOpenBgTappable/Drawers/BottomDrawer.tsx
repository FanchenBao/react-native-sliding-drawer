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
import {BottomDrawerContent} from '../../DrawerContent/index';

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
 * Example for a bottom drawer
 */
export const BottomDrawer: React.FC<PropsT> = props => {
  const {
    screenDim,
    isInitialPeek,
    nonSlideOpen,
    nonSlideOpenEnabled,
    onDrawerOpen,
    onDrawerPeek,
    enableFadeBackground,
    onFadeBackgroundPress,
  } = props;
  const peekSize = 0;
  const openSize = 250;

  return (
    <SlidingDrawer
      screenDim={screenDim}
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="bottom"
      expandable={true}
      onDrawerOpen={onDrawerOpen}
      onDrawerPeek={onDrawerPeek}
      isInitialPeek={isInitialPeek}
      nonSlideOpenEnabled={nonSlideOpenEnabled}
      nonSlideOpen={nonSlideOpen}
      enableFadeBackground={enableFadeBackground}
      onFadeBackgroundPress={onFadeBackgroundPress}>
      <BottomDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
