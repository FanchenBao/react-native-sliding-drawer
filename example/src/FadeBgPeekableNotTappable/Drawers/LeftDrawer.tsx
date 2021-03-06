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
import {LeftDrawerContent} from '../../DrawerContent/index';

/**
 * Example for a left drawer
 */
export const LeftDrawer: React.FC = () => {
  const peekSize = 95;
  const openSize = 240;

  return (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="left"
      maxPct={0.7}
      enableFadeBackground={true}>
      <LeftDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
