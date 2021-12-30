/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

/**
 * NOTE: this is a comprehensive example of SlidingDrawer, including various
 * use cases. Use this code, along with associated components to familiarize
 * with more advanced use cases of SlidingDrawer.
 *
 * A much simpler minimal example is also available to the bottom of this file.
 * One can run the minimal example by commenting out this comprehensive one and
 * uncommenting the minimal one.
 */
import * as React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {NonSlideOpen} from './src/NonSlideOpen/index';
import {Peekable} from './src/Peekable';
import {FadeBgNonSlideOpenNotTappable} from './src/FadeBgNonSlideOpenNotTappable';
import {FadeBgTappable} from './src/FadeBgTappable';
import {FadeBgPeekableNotTappable} from './src/FadeBgPeekableNotTappable';

const App = () => {
  const demos = {
    Peekable: <Peekable />,
    NonSlideOpen: <NonSlideOpen />,
    FadeBgPeekableNotTappable: <FadeBgPeekableNotTappable />,
    FadeBgNonSlideOpenNotTappable: <FadeBgNonSlideOpenNotTappable />,
    FadeBgTappable: <FadeBgTappable />,
  };
  const [selectedDemo, setSelectedDemo] =
    React.useState<keyof typeof demos>('Peekable');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{marginBottom: 20}}>
        {Object.keys(demos).map(key => {
          const demoExample = key as keyof typeof demos;
          return (
            <TouchableOpacity
              style={{
                backgroundColor:
                  selectedDemo === demoExample ? 'blue' : 'lightgrey',
                padding: 8,
                borderRadius: 5,
                alignItems: 'center',
              }}
              onPress={() => setSelectedDemo(demoExample)}
              key={demoExample}>
              <Text
                style={{
                  color: selectedDemo === demoExample ? 'white' : 'grey',
                  fontSize: 15,
                }}>
                {demoExample}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {demos[selectedDemo]}
    </View>
  );
};

export default App;

/**
 * NOTE: the code below is a minimal example of SlidingDrawer. To run the
 * minimal example, comment out the comprehensive example above and uncomment
 * the code below.
 */
// import * as React from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import {SlidingDrawer} from './src/react-native-sliding-drawer';

// const App = () => {
//   const openSize = 270;
//   const [peekSize, setPeekSize] = React.useState(90);
//   console.log(peekSize);
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'yellow',
//       }}>
//       <Text>Minimal Example</Text>
//       <TouchableOpacity
//         style={{backgroundColor: 'blue', borderRadius: 15, padding: 10}}
//         onPress={() => {
//           if (peekSize === 10) {
//             setPeekSize(90);
//           } else {
//             setPeekSize(10);
//           }
//         }}>
//         <Text style={{fontSize: 30, color: 'white'}}>Toggle</Text>
//       </TouchableOpacity>
//       <SlidingDrawer peekSize={peekSize} openSize={openSize} fixedLoc="bottom">
//         <View style={{flex: 1, backgroundColor: 'red'}}>
//           <View style={{height: peekSize, backgroundColor: 'pink'}}>
//             <Text>Peek Portion</Text>
//           </View>
//           <View>
//             <Text>Open Portion</Text>
//           </View>
//         </View>
//       </SlidingDrawer>
//     </View>
//   );
// };

// export default App;
