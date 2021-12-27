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
import {styles} from './styles';

export const BottomDrawerContent: React.FC<{peekSize: number}> = props => {
  const {peekSize} = props;
  return (
    <View
      style={[
        styles.drawerContainer,
        {
          backgroundColor:
            peekSize > 0 ? 'rgba(255, 0, 0, 0.3)' : 'rgba(0,0,0,0)',
        },
      ]}>
      {peekSize > 0 && (
        <>
          <View style={[styles.peekContainer, {height: peekSize}]}>
            <Text>Bottom Peekable Section</Text>
          </View>
          <View style={styles.separator} />
        </>
      )}
      <View
        style={[
          styles.openContainer,
          {
            backgroundColor: 'rgba(255, 0, 0, 0.6)',
            borderRadius: peekSize > 0 ? 0 : 15,
          },
        ]}>
        <Text>Bottom Open Section</Text>
      </View>
    </View>
  );
};

export const LeftDrawerContent: React.FC<{peekSize: number}> = props => {
  const {peekSize} = props;
  return (
    <View
      style={[
        styles.drawerContainer,
        {
          flexDirection: 'row',
          backgroundColor:
            peekSize > 0 ? 'rgba(165, 42, 42, 0.3)' : 'rgba(0,0,0,0)',
        },
      ]}>
      <View
        style={[
          styles.openContainer,
          {
            flex: 1,
            alignItems: 'flex-end',
            backgroundColor: 'rgba(165, 42, 42, 0.6)',
            borderRadius: peekSize > 0 ? 0 : 15,
          },
        ]}>
        <Text>{'Left\nOpen\nSection'}</Text>
      </View>
      {peekSize > 0 && (
        <>
          <View style={styles.separator} />
          <View
            style={[
              styles.peekContainer,
              {width: peekSize, alignItems: 'flex-end'},
            ]}>
            <Text>{'Left\nPeekable\nSection'}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export const RightDrawerContent: React.FC<{peekSize: number}> = props => {
  const {peekSize} = props;
  return (
    <View
      style={[
        styles.drawerContainer,
        {
          flexDirection: 'row',
          backgroundColor:
            peekSize > 0 ? 'rgba(0, 128, 0, 0.3)' : 'rgba(0,0,0,0)',
        },
      ]}>
      {peekSize > 0 && (
        <>
          <View style={[styles.peekContainer, {width: peekSize}]}>
            <Text>{'Right\nPeekable\nSection'}</Text>
          </View>
          <View style={styles.separator} />
        </>
      )}
      <View
        style={[
          styles.openContainer,
          {
            flex: 1,
            backgroundColor: 'rgba(0, 128, 0, 0.6)',
            borderRadius: peekSize > 0 ? 0 : 15,
          },
        ]}>
        <Text>{'Right\nOpen\nSection'}</Text>
      </View>
    </View>
  );
};

export const TopDrawerContent: React.FC<{peekSize: number}> = props => {
  const {peekSize} = props;
  return (
    <View
      style={[
        styles.drawerContainer,
        {
          backgroundColor:
            peekSize > 0 ? 'rgba(0, 0, 255, 0.3)' : 'rgba(0,0,0,0)',
        },
      ]}>
      <View
        style={[
          styles.openContainer,
          {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 255, 0.6)',
            justifyContent: 'flex-end',
            borderRadius: peekSize > 0 ? 0 : 15,
          },
        ]}>
        <Text>Top Open Section</Text>
      </View>
      {peekSize > 0 && (
        <>
          <View style={styles.separator} />
          <View
            style={[
              styles.peekContainer,
              {height: peekSize, justifyContent: 'flex-end'},
            ]}>
            <Text>Top Peekable Section</Text>
          </View>
        </>
      )}
    </View>
  );
};
