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
          backgroundColor: '#ff8080',
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
            backgroundColor: '#ff3333',
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
          backgroundColor: '#ffdd99',
        },
      ]}>
      <View
        style={[
          styles.openContainer,
          {
            flex: 1,
            alignItems: 'flex-end',
            backgroundColor: '#ffc34d',
            borderRadius: peekSize > 0 ? 0 : 15,
          },
        ]}>
        <Text style={{top: '10%'}}>{'Left\nOpen\nSection'}</Text>
      </View>
      {peekSize > 0 && (
        <>
          <View style={styles.separator} />
          <View
            style={[
              styles.peekContainer,
              {width: peekSize, alignItems: 'flex-end'},
            ]}>
            <Text style={{top: '10%'}}>{'Left\nPeekable\nSection'}</Text>
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
          backgroundColor: '#85e085',
        },
      ]}>
      {peekSize > 0 && (
        <>
          <View
            style={[styles.peekContainer, {width: peekSize, paddingTop: 30}]}>
            <Text style={{top: '10%'}}>{'Right\nPeekable\nSection'}</Text>
          </View>
          <View style={styles.separator} />
        </>
      )}
      <View
        style={[
          styles.openContainer,
          {
            flex: 1,
            backgroundColor: '#33cc33',
            borderRadius: peekSize > 0 ? 0 : 15,
            paddingTop: 30,
          },
        ]}>
        <Text style={{top: '10%'}}>{'Right\nOpen\nSection'}</Text>
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
          backgroundColor: '#b3b3ff',
        },
      ]}>
      <View
        style={[
          styles.openContainer,
          {
            flex: 1,
            backgroundColor: '#4d4dff',
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
