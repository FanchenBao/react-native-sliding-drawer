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
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

type PropsT = {
  selectedDrawer: string;
  onChoicePress: (drawer: string) => void;
  enableNonSlideOpen?: boolean;
  isInitialPeek?: boolean;
  onNonSlideOpenButtonPress?: () => void;
};

export const DrawerChoices: React.FC<PropsT> = props => {
  const {
    selectedDrawer,
    onChoicePress,
    enableNonSlideOpen = false,
    isInitialPeek = true,
    onNonSlideOpenButtonPress = () => {},
  } = props;

  return (
    <View style={styles.interactContainer}>
      <View style={styles.chooseDrawerContainer}>
        {['bottom', 'top', 'left', 'right'].map(loc => {
          return (
            <TouchableOpacity
              key={loc}
              style={[
                styles.drawerOption,
                {
                  backgroundColor:
                    loc === selectedDrawer ? 'black' : 'lightgrey',
                },
              ]}
              onPress={() => onChoicePress(loc)}>
              <Text
                style={{
                  color: loc === selectedDrawer ? 'white' : 'black',
                }}>
                {loc}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {enableNonSlideOpen ? (
        <TouchableOpacity
          style={[
            styles.button,
            {borderColor: isInitialPeek ? 'green' : 'red'},
          ]}
          onPress={onNonSlideOpenButtonPress}>
          <Text style={{color: isInitialPeek ? 'green' : 'red'}}>
            {isInitialPeek ? 'Open' : 'Close'}
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={[styles.button, {borderWidth: 0}]} />
      )}
    </View>
  );
};
