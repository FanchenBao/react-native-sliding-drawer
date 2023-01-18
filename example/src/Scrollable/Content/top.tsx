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
import {styles} from '../Content/styles';
import lorem from '../lorem.json';

type PropsT = {
  peekSize: number;
  scrollHeight: number;
  setScrollPageYs: Array<(py: number) => void>;
};

export const ScrollableTopDrawerContent: React.FC<PropsT> = props => {
  const {peekSize, scrollHeight, setScrollPageYs} = props;
  const scrollRef1 = React.useRef<View>(null);
  const scrollRef2 = React.useRef<View>(null);

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
        <View
          style={{marginBottom: 40, borderWidth: 1, height: scrollHeight}}
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
          style={{marginBottom: 10, borderWidth: 1, height: scrollHeight}}
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
