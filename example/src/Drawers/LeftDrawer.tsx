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
import {Text, View} from 'react-native';
import {SlidingDrawer} from '../../react-native-sliding-drawer';
import {styles} from './styles';

type PropsT = {
  screenDim: {
    totalHeight: number;
    width: number;
    topBar: number;
    bottomBar: number;
  };
  isInitialPeek: boolean;
  onDrawerOpen: () => void;
  onDrawerPeek: () => void;
  nonSlideOpen: boolean;
  nonSlideOpenEnabled: boolean;
};

/**
 * Example for a left drawer
 */
export const LeftDrawer: React.FC<PropsT> = props => {
  const {
    screenDim,
    onDrawerOpen,
    onDrawerPeek,
    isInitialPeek,
    nonSlideOpen,
    nonSlideOpenEnabled,
  } = props;
  const peekSize = 95;
  const openSize = 200;

  return (
    <SlidingDrawer
      screenDim={screenDim}
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="left"
      expandable={true}
      maxPct={0.6}
      onDrawerOpen={onDrawerOpen}
      onDrawerPeek={onDrawerPeek}
      isInitialPeek={isInitialPeek}
      nonSlideOpenEnabled={nonSlideOpenEnabled}
      nonSlideOpen={nonSlideOpen}>
      <View
        style={[
          styles.drawerContainer,
          {flexDirection: 'row', backgroundColor: 'rgba(165, 42, 42, 0.3)'},
        ]}>
        <View
          style={[
            styles.openContainer,
            {
              flex: 1,
              alignItems: 'flex-end',
              backgroundColor: 'rgba(165, 42, 42, 0.6)',
            },
          ]}>
          <Text>{'Left\nOpen\nSection'}</Text>
        </View>
        <View style={styles.separator} />
        <View
          style={[
            styles.peekContainer,
            {width: peekSize, alignItems: 'flex-end'},
          ]}>
          <Text>{'Left\nPeekable\nSection'}</Text>
        </View>
      </View>
    </SlidingDrawer>
  );
};
