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

/**
 * Example for a right drawer
 */
export const RightDrawer: React.FC = () => {
  const peekSize = 95;
  const openSize = 240;

  return (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="right"
      expandable={true}
      maxPct={0.7}>
      <RightDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
