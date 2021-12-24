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
import {PeekableDrawer} from '../react-native-sliding-drawer';
import {styles} from './styles';

type PropsT = {
  screenDim: {
    totalHeight: number;
    width: number;
    topBar: number;
    bottomBar: number;
  };
  isInitialPeek: boolean;
  onDrawerOpen?: () => void;
  onDrawerPeek?: () => void;
  nonSlideOpen?: boolean;
};

/**
 * Example for a right drawer
 */
export const RightDrawer: React.FC<PropsT> = props => {
  const {screenDim, onDrawerOpen, onDrawerPeek, isInitialPeek, nonSlideOpen} =
    props;
  const peekSize = 95;
  const openSize = 200;

  return (
    <PeekableDrawer
      screenDim={screenDim}
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="right"
      expandable={true}
      maxPct={0.6}
      onDrawerOpen={onDrawerOpen}
      onDrawerPeek={onDrawerPeek}
      isInitialPeek={isInitialPeek}
      nonSlideOpenEnabled={true}
      nonSlideOpen={nonSlideOpen}>
      <View
        style={[
          styles.drawerContainer,
          {flexDirection: 'row', backgroundColor: 'rgba(0, 128, 0, 0.3)'},
        ]}>
        <View style={[styles.peekContainer, {width: peekSize}]}>
          <Text>{'Right\nPeekable\nSection'}</Text>
        </View>
        <View style={styles.separator} />
        <View
          style={[
            styles.openContainer,
            {flex: 1, backgroundColor: 'rgba(0, 128, 0, 0.6)'},
          ]}>
          <Text>{'Right\nOpen\nSection'}</Text>
        </View>
      </View>
    </PeekableDrawer>
  );
};
