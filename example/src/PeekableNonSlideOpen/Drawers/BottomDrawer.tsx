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
import {BottomDrawerContent} from '../../DrawerContent/index';

type PropsT = {
  isInitialPeek: boolean;
  onDrawerOpen: () => void;
  onDrawerPeek: () => void;
  nonSlideOpen: boolean;
};

/**
 * Example for a bottom drawer
 */
export const BottomDrawer: React.FC<PropsT> = props => {
  const {onDrawerOpen, onDrawerPeek, isInitialPeek, nonSlideOpen} = props;
  const peekSize = 95;
  const openSize = 240;

  return (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="bottom"
      expandable={true}
      onDrawerOpen={onDrawerOpen}
      onDrawerPeek={onDrawerPeek}
      isInitialPeek={isInitialPeek}
      enableNonSlideOpen={true}
      nonSlideOpen={nonSlideOpen}>
      <BottomDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
