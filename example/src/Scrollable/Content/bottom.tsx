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
  scrollHeight: number;
  setScrollPageYs: Array<(py: number) => void>;
};

export const ScrollableBottomDrawerContent: React.FC<PropsT> = props => {
  const {peekSize, scrollHeight, setScrollPageYs} = props;
  const scrollRef1 = React.useRef<View>(null);
  const scrollRef2 = React.useRef<View>(null);
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
        <View
          style={{marginTop: 10, borderWidth: 1, height: scrollHeight}}
          ref={scrollRef1}
          onLayout={() => {
            scrollRef1.current?.measure((_x, _y, _width, _height, _px, py) => {
              setScrollPageYs[0](py);
            });
          }}>
          <ScrollView>
            <Text>{lorem.text}</Text>
          </ScrollView>
        </View>
        <View
          style={{marginTop: 40, borderWidth: 1, height: scrollHeight}}
          ref={scrollRef2}
          onLayout={() => {
            scrollRef2.current?.measure((_x, _y, _width, _height, _px, py) => {
              setScrollPageYs[1](py);
            });
          }}>
          <ScrollView>
            <Text>{lorem.text}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
