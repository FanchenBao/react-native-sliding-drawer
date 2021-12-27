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
  screenDim: {
    totalHeight: number;
    width: number;
    topBar: number;
    bottomBar: number;
  };
};

/**
 * Example for a left drawer
 */
export const LeftDrawer: React.FC<PropsT> = props => {
  const {screenDim} = props;
  const peekSize = 95;
  const openSize = 200;

  return (
    <SlidingDrawer
      screenDim={screenDim}
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="left"
      expandable={true}
      maxPct={0.6}>
      <LeftDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
