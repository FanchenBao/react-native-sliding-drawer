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
import {RightDrawerContent} from '../../DrawerContent/index';

type PropsT = {
  onDrawerPeek: () => void;
  nonSlideOpen: boolean;
  hasPeekable: boolean;
};

/**
 * Example for a right drawer
 */
export const RightDrawer: React.FC<PropsT> = props => {
  const {onDrawerPeek, nonSlideOpen, hasPeekable} = props;
  /**
   * NOTE: openSize is modified as well, because openSize is NOT the
   * size of the open section, but the size of the entire drawer after it is
   * open. Since peekSize increases and the entire drawer includes the peekSize,
   * openSize needs to increase as well.
   */
  const peekSize = 0 + (hasPeekable ? 90 : 0);
  const openSize = 150 + (hasPeekable ? 90 : 0);

  return (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="right"
      onDrawerPeek={onDrawerPeek}
      enableNonSlideOpen={true}
      nonSlideOpen={nonSlideOpen}
      maxPct={0.7}
      enableFadeBackground={true}>
      <RightDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
