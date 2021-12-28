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
  onDrawerPeek: () => void;
  nonSlideOpen: boolean;
};

/**
 * Example for a bottom drawer
 */
export const BottomDrawer: React.FC<PropsT> = props => {
  const {nonSlideOpen, onDrawerPeek} = props;
  const peekSize = 0;
  const openSize = 240;

  return (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="bottom"
      expandable={true}
      onDrawerPeek={onDrawerPeek}
      enableNonSlideOpen={true}
      nonSlideOpen={nonSlideOpen}
      enableFadeBackground={true}>
      <BottomDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
