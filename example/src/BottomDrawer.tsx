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
 * Example for a bottom drawer
 */
export const BottomDrawer: React.FC<PropsT> = props => {
  const {screenDim, onDrawerOpen, onDrawerPeek, isInitialPeek, nonSlideOpen} =
    props;
  const peekSize = 80; // must add bottomBarHeight to equate the behavior in iOS and Android
  const openSize = 250;

  return (
    <PeekableDrawer
      screenDim={screenDim}
      peekSize={peekSize}
      openSize={openSize}
      fixedLoc="bottom"
      expandable={true}
      maxPct={0.4}
      onDrawerOpen={onDrawerOpen}
      onDrawerPeek={onDrawerPeek}
      isInitialPeek={isInitialPeek}
      nonSlideOpenEnabled={true}
      nonSlideOpen={nonSlideOpen}>
      <View
        style={[
          styles.drawerContainer,
          {backgroundColor: 'rgba(255, 0, 0, 0.3)'},
        ]}>
        <View style={[styles.peekContainer, {height: peekSize}]}>
          <Text>Bottom Peekable Section</Text>
        </View>
        <View style={styles.separator} />
        <View
          style={[
            styles.openContainer,
            {flex: 1, backgroundColor: 'rgba(255, 0, 0, 0.6)'},
          ]}>
          <Text>Bottom Open Section</Text>
        </View>
      </View>
    </PeekableDrawer>
  );
};
