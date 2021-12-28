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

/**
 * Example for a left drawer
 */
export const LeftDrawer: React.FC = () => {
  const peekSize = 95;
  const openSize = 200;

  return (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="left"
      expandable={true}
      maxPct={0.7}>
      <LeftDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
