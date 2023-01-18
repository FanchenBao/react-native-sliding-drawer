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
import {ScrollableLeftDrawerContent} from '../Content/left';

/**
 * Example for a left drawer
 */
export const LeftDrawer: React.FC = () => {
  const peekSize = 95;
  const openSize = 300;
  const scrollWidth = 300;
  const scrollHeight = 150;
  // scrollPageX is the distance from left of the screen to the left of the
  // scroll view
  const [scrollPageX, setScrollPageX] = React.useState<number>(-1);
  // scrollPageY is the distance from top of the screen to the top of the
  // scroll view
  const [scrollPageY, setScrollPageY] = React.useState<number>(-1);

  console.log(scrollPageX, scrollPageY);

  // Double rendering, a common trick to pre-render a fake sliding drawer to
  // measure the positioning of the desired components and then render the real
  // sliding drawer with the pre-measured positions. This is a necessary trick
  // because the real sliding drawer does not respond to re-rendering
  // (animation is done based on refs, so the initial value stays forever).
  // Hence, one cannot dynamically make changes to the positioning within the
  // sliding drawer.
  return scrollPageX < 0 || scrollPageY < 0 ? (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="left"
      isInitialPeek={false}
      maxPct={0.9}
      expandable={false}>
      <ScrollableLeftDrawerContent
        peekSize={peekSize}
        scrollWidth={scrollWidth}
        scrollHeight={scrollHeight}
        setScrollPageX={setScrollPageX}
        setScrollPageY={setScrollPageY}
      />
    </SlidingDrawer>
  ) : (
    <SlidingDrawer
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="left"
      isInitialPeek={false}
      maxPct={0.9}
      nonSlideableXRanges={[[scrollPageX, scrollPageX + scrollHeight]]}
      nonSlideableYRanges={[[scrollPageY, scrollPageY + scrollWidth]]}>
      <ScrollableLeftDrawerContent
        peekSize={peekSize}
        scrollWidth={scrollWidth}
        scrollHeight={scrollHeight}
        setScrollPageX={setScrollPageX}
        setScrollPageY={setScrollPageY}
      />
    </SlidingDrawer>
  );
};
