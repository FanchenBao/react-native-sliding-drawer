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
};

/**
 * Example for a right drawer
 */
export const RightDrawer: React.FC<PropsT> = props => {
  const {screenDim} = props;
  const peekSize = 95;
  const openSize = 200;

  return (
    <SlidingDrawer
      screenDim={screenDim}
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="right"
      expandable={true}
      maxPct={0.6}>
      <RightDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
