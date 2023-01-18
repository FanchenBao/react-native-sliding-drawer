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
import {getBrand} from 'react-native-device-info';
import {ScrollableBottomDrawerContent} from '../Content/bottom';

/**
 * Example for a bottom drawer
 */
export const BottomDrawer: React.FC = () => {
  const peekSize = 95;
  const openSize = 500;
  const scrollHeight = 150;
  // scrollPageY is the distance from top of the screen to the top of the
  // scroll view
  const [scrollPageY1, setScrollPageY1] = React.useState<number>(-1);
  const [scrollPageY2, setScrollPageY2] = React.useState<number>(-1);

  // Double rendering, a common trick to pre-render a fake sliding drawer to
  // measure the positioning of the desired components and then render the real
  // sliding drawer with the pre-measured positions. This is a necessary trick
  // because the real sliding drawer does not respond to re-rendering
  // (animation is done based on refs, so the initial value stays forever).
  // Hence, one cannot dynamically make changes to the positioning within the
  // sliding drawer.
  return scrollPageY1 < 0 || scrollPageY2 < 0 ? (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="bottom"
      isInitialPeek={false}
      maxPct={0.8}
      brand={getBrand()}
      expandable={false}>
      <ScrollableBottomDrawerContent
        peekSize={peekSize}
        scrollHeight={scrollHeight}
        setScrollPageYs={[setScrollPageY1, setScrollPageY2]}
      />
    </SlidingDrawer>
  ) : (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="bottom"
      isInitialPeek={false}
      maxPct={0.8}
      brand={getBrand()}
      nonSlideableYRanges={[
        [scrollPageY1, scrollPageY1 + scrollHeight],
        [scrollPageY2, scrollPageY2 + scrollHeight],
      ]}>
      <ScrollableBottomDrawerContent
        peekSize={peekSize}
        scrollHeight={scrollHeight}
        setScrollPageYs={[setScrollPageY1, setScrollPageY2]}
      />
    </SlidingDrawer>
  );
};
