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
import {TopDrawerContent} from '../../DrawerContent/index';

type PropsT = {
  screenDim: {
    totalHeight: number;
    width: number;
    topBar: number;
    bottomBar: number;
  };
};

/**
 * Example for a top drawer
 */
export const TopDrawer: React.FC<PropsT> = props => {
  const {screenDim} = props;
  const peekSize = 80;
  const openSize = 250;

  return (
    <SlidingDrawer
      screenDim={screenDim}
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="top"
      expandable={true}>
      <TopDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
