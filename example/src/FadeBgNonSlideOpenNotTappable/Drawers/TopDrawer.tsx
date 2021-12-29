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
import {TopDrawerContent} from '../../DrawerContent/index';

type PropsT = {
  onDrawerPeek: () => void;
  nonSlideOpen: boolean;
};

/**
 * Example for a top drawer
 */
export const TopDrawer: React.FC<PropsT> = props => {
  const {onDrawerPeek, nonSlideOpen} = props;
  const peekSize = 0;
  const openSize = 240;

  return (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="top"
      expandable={true}
      onDrawerPeek={onDrawerPeek}
      enableNonSlideOpen={true}
      nonSlideOpen={nonSlideOpen}
      enableFadeBackground={nonSlideOpen}>
      <TopDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
