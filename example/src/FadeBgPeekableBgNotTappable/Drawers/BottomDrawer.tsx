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

/**
 * Example for a bottom drawer
 */
export const BottomDrawer: React.FC = () => {
  const peekSize = 80;
  const openSize = 250;

  return (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="bottom"
      expandable={true}
      enableFadeBackground={true}>
      <BottomDrawerContent peekSize={peekSize} />
    </SlidingDrawer>
  );
};
