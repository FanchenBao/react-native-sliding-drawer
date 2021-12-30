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
  hasPeekable: boolean;
  onDrawerOpen: () => void;
  onDrawerPeek: () => void;
  nonSlideOpen: boolean;
};

/**
 * Example for a bottom drawer
 */
export const BottomDrawer: React.FC<PropsT> = props => {
  const {onDrawerOpen, onDrawerPeek, isInitialPeek, nonSlideOpen, hasPeekable} =
    props;
  /**
   * NOTE: openSize is modified as well, because openSize is NOT the
   * size of the open section, but the size of the entire drawer after it is
   * open. Since peekSize increases and the entire drawer includes the peekSize,
   * openSize needs to increase as well.
   */
  const peekSize = 0 + (hasPeekable ? 90 : 0);
  const openSize = 240 + (hasPeekable ? 90 : 0);

  return (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="bottom"
      onDrawerOpen={onDrawerOpen}
      onDrawerPeek={onDrawerPeek}
      isInitialPeek={isInitialPeek}
      enableNonSlideOpen={true}
      nonSlideOpen={nonSlideOpen}>
      <BottomDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
