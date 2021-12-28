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
import {LeftDrawerContent} from '../../DrawerContent/index';

type PropsT = {
  onDrawerPeek: () => void;
  nonSlideOpen: boolean;
};

/**
 * Example for a left drawer
 */
export const LeftDrawer: React.FC<PropsT> = props => {
  const {onDrawerPeek, nonSlideOpen} = props;
  const peekSize = 0;
  const openSize = 240;

  return (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="left"
      expandable={true}
      onDrawerPeek={onDrawerPeek}
      enableNonSlideOpen={true}
      nonSlideOpen={nonSlideOpen}
      maxPct={0.7}
      enableFadeBackground={nonSlideOpen}>
      <LeftDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};