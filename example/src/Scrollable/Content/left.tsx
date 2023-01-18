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
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import lorem from '../lorem.json';

type PropsT = {
  peekSize: number;
  scrollWidth: number;
  scrollHeight: number;
  setScrollPageX: (px: number) => void;
  setScrollPageY: (py: number) => void;
};

export const ScrollableLeftDrawerContent: React.FC<PropsT> = props => {
  const {peekSize, scrollWidth, scrollHeight, setScrollPageX, setScrollPageY} =
    props;
  const scrollRef = React.useRef<View>(null);

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
            backgroundColor: '#ffc34d',
            borderRadius: peekSize > 0 ? 0 : 15,
          },
        ]}>
        <View
          style={[
            styles.horiDrawerTextContainer,
            styles.leftTextRotation,
            {right: 50},
          ]}>
          <View
            style={{borderWidth: 1, height: scrollHeight, width: scrollWidth}}
            ref={scrollRef}
            onLayout={() => {
              scrollRef.current?.measure((_x, _y, _width, _height, px, py) => {
                setScrollPageX(px);
                setScrollPageY(py);
              });
            }}>
            <ScrollView>
              <Text>{lorem.text}</Text>
            </ScrollView>
          </View>
          <Text>{'Left Open Section'}</Text>
        </View>
      </View>
      {peekSize > 0 && (
        <>
          <View style={styles.separator} />
          <View
            style={[
              styles.peekContainer,
              {width: peekSize, alignItems: 'flex-end'},
            ]}>
            <View
              style={[styles.horiDrawerTextContainer, styles.leftTextRotation]}>
              <Text>{'Left Peekable Section'}</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};
