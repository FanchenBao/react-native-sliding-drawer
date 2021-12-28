/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {
  Animated,
  PanResponder,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type PropsT = {
  screenDim: {
    width: number;
    totalHeight: number;
  };
  isVertical: boolean; // whether the drawer opens in the vertical direction
  size: number; // size of the screen in the same direction as how the drawer opens.
  DrawerState: {Open: number; Peek: number};
  maxPct: number; // maximum pct of width or height allowed for a user to drag the drawer.
  fixedLoc: 'top' | 'bottom' | 'left' | 'right'; // Where the drawer is fixed at. Top drawer means sliding downwards, bottom upwards, left rightwards, right leftwards.
  sensitivity: number; // how much finger dragging (in pixels) shall trigger the drawer to change state.
  isInitialPeek: boolean; // a flag indicating whether the initial state of the drawer is Peek. Default to True.
  enableNonSlideOpen: boolean; // a flag indicating whether a drawer can be opened without sliding.
  nonSlideOpen: boolean; // If true, open the drawer without sliding. Otherwise, peek the drawer without sliding.
  onDrawerOpen: () => void; // callback when the drawer is in open state.
  onDrawerPeek: () => void; // callback when the drawer is in peek state.
  speed: number; // the speed config of Animation.spring() method. Default to 40.
  useNativeDriver: boolean; // whether to use native driver for animation. Default to false.
  elevation: number; // In Android, setting position to absolute does not guarantee that the drawer will stay on top, if some component has some value set to elevation. Use this prop to create a higher evelation than any other components. Not applicable to iOS.
  enableFadeBackground: boolean; // A flag indicating whether a fade in background is visible upon drawer open
  maxFadeBackgroundOpacity: number; // The max opacity of the fade in background
  onFadeBackgroundPress: () => void; // callback when the fade in background is pressed. NOTE: currently peek the drawer onFadeBackgroundPress is NOT supported, because the animation on fade is messed up when isInitialPeek changes.
  style: ViewStyle; // custom styles of the sliding window.
};

/**
	Function component of a dynamic sliding drawer
	Inspired by: https://dev.to/johannawad/creating-a-swipe-up-bottom-drawer-in-react-native-no-external-libraries-3ng1
 */
export const DynamicDrawer: React.FC<PropsT> = props => {
  const {
    children,
    isVertical,
    size,
    DrawerState,
    maxPct,
    fixedLoc,
    sensitivity,
    enableNonSlideOpen,
    nonSlideOpen,
    onDrawerOpen,
    onDrawerPeek,
    speed,
    useNativeDriver,
    screenDim,
    elevation,
    enableFadeBackground,
    maxFadeBackgroundOpacity,
    onFadeBackgroundPress,
    style,
    isInitialPeek,
  } = props;

  // If fade background is enabled, we disable dynamic setting of isInitialPeek
  // because animation of fade requires that the initial state of the drawer
  // be static.
  // const isInitialPeek = enableFadeBackground ? true : props.isInitialPeek;

  // could be x or y direction displacement, depending on the value of fixedLoc
  const deltaXY = React.useRef(new Animated.Value(0)).current;
  const state = React.useRef<Animated.Value>(
    new Animated.Value(isInitialPeek ? DrawerState.Peek : DrawerState.Open),
  ).current;
  const isInitialPeekRef = React.useRef(isInitialPeek);
  const [fadeBackgroundOn, setFadeBackgroundOn] = React.useState(false);

  // Compute the next state based on the current state and the displacement.
  // Note that dxy represents a displacement either vertically or horizontally,
  // according to the value of fixedLoc.
  const getNextState = (currState: number, dxy: number): number => {
    switch (fixedLoc) {
      case 'top':
      // fall through
      case 'left':
        if (dxy > 0) {
          return dxy > sensitivity ? DrawerState.Open : currState;
        } else {
          return -dxy > sensitivity ? DrawerState.Peek : currState;
        }
      case 'bottom':
      // fall through
      case 'right':
        if (dxy > 0) {
          return dxy > sensitivity ? DrawerState.Peek : currState;
        } else {
          return -dxy > sensitivity ? DrawerState.Open : currState;
        }
      default:
        return currState;
    }
  };

  // Obtain the deltaXY needed to reach the next drawer state.
  const getNextDeltaXY = React.useCallback(
    (nextState: number): number => {
      switch (nextState) {
        case DrawerState.Open:
          if (isInitialPeekRef.current) {
            return ['right', 'bottom'].includes(fixedLoc)
              ? DrawerState.Peek - DrawerState.Open
              : DrawerState.Open - DrawerState.Peek;
          } else {
            return 0; // We start at Open. If end at Open as well, no move.
          }
        case DrawerState.Peek:
          if (isInitialPeekRef.current) {
            return 0; // We start at peek. If end at peek as well, no move
          } else {
            return ['right', 'bottom'].includes(fixedLoc)
              ? DrawerState.Open - DrawerState.Peek
              : DrawerState.Peek - DrawerState.Open;
          }
        default:
          return 0;
      }
    },
    [DrawerState, fixedLoc],
  );

  // Callbacks upon Open or Peek drawer state is reached.
  const onReachNextState = React.useCallback(
    (nextState: number): void => {
      switch (nextState) {
        case DrawerState.Open:
          onDrawerOpen();
          return;
        case DrawerState.Peek:
          // NOTE: the order is important. Must run setFadeBackgroundOn at the
          // end to ensure that this is the last update to ensure that the
          // fade background is gone after drawer is at peek state.
          onDrawerPeek();
          setFadeBackgroundOn(false);
          return;
        default:
          return;
      }
    },
    [DrawerState, onDrawerPeek, onDrawerOpen],
  );

  // Animate the movement of the drawer. Note that since the animation always
  // finishes at a new drawer state, we place the onReachNewState() callback
  // upon animation completion.
  const animate = React.useCallback(
    (nextState: number) => {
      // NOTE: It is paramount to flattenOffset() such that the direct value
      // change that follows will not be affected by any extra offset.
      deltaXY.flattenOffset();
      Animated.spring(deltaXY, {
        toValue: getNextDeltaXY(nextState),
        speed: speed,
        overshootClamping: true, // prevent bounciness, thus allowing quick termination of the animation
        useNativeDriver: useNativeDriver,
      }).start(({finished}) => {
        // Callback upon successful animation.
        if (finished) {
          onReachNextState(nextState);
          state.setValue(nextState);
        }
      });
    },
    [state, deltaXY, getNextDeltaXY, speed, useNativeDriver, onReachNextState],
  );

  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, {dx, dy}) =>
        Math.abs(isVertical ? dy : dx) >= 10, // enable pan only if there is sufficient finger movement
      onPanResponderGrant: () => {
        // NOTE: It is paramount that we use extractOffset() instead of
        // setOffset(deltaXY._value), because setOffset(deltaXY._value) retains
        // the original value, which essentially changes the overall output
        // of deltaXY. What we want is to move everything from value to offset
        // while not changing the overall output.
        deltaXY.extractOffset();
        if (enableFadeBackground) {
          setFadeBackgroundOn(true);
        }
      },
      onPanResponderMove: (_, {dx, dy}) => {
        // prevent user from moving the drawer too much
        switch (fixedLoc) {
          case 'top':
          // fall through
          case 'left':
            deltaXY.setValue(
              Math.min(
                fixedLoc === 'top' ? dy : dx,
                // @ts-ignore: _value is not exposed to typescript, but there
                // is no other way to obtain the current state's animated value
                size * maxPct - state._value,
              ),
            );
            break;
          case 'bottom':
          // fall through
          case 'right':
            deltaXY.setValue(
              Math.max(
                fixedLoc === 'bottom' ? dy : dx,
                // @ts-ignore: _value is not exposed to typescript
                state._value - size * maxPct,
              ),
            );
            break;
          default:
          // do nothing
        }
      },
      onPanResponderRelease: (_, {dx, dy}) => {
        // @ts-ignore: _value is not exposed to typescript
        const nextState = getNextState(state._value, isVertical ? dy : dx);
        animate(nextState);
      },
    }),
  ).current;

  /**
  NOTE: 2021-07-28
  This is VERY VERY VERY important. We want a feature such that when
  isInitialPeek changes, the behavior of the sliding drawer adapts accordingly.
  The adaptated behavior is coded in getNextDeltaXY, where we check the current
  value of isInitialPeek and change how deltaXY moves. Importantly, if we
  naively use isInitialPeek inside getNextDeltaXY, changing in isInitialPeek
  won't be realized when calling getNextDeltaXY inside panResponder. This is
  because panResponder is a ref, so it has no knowledge of any props change due
  to re-rendering. To panResponder, isInitialPeek stays at the SAME value as the
  first time it is initialized. In order for panResponder to see different
  isInitialPeek upon each re-rendering, we must use a ref to update
  isInitialPeek. Change in isInitialPeekRef.current is visible in panResponder
  and getNextDeltaXY can have the correct behavior upon change in isInitialPeek.

  Another important piece is that we are resetting deltaXY upon unmount and
  updating state upon mount. This is to guarantee that each time sliding drawer
  is initiated, deltaXY and state has the correct value. Remember, these two
  values are refs, thus do not update automatically upon re-rendering.
   */
  React.useEffect(() => {
    state.setValue(isInitialPeek ? DrawerState.Peek : DrawerState.Open);
    isInitialPeekRef.current = isInitialPeek;
    return () => {
      deltaXY.flattenOffset();
      deltaXY.setValue(0);
    };
  });

  // Perform non-slide open or close of the drawer
  React.useEffect(() => {
    if (enableNonSlideOpen) {
      // @ts-ignore: _value is not exposed to typescript
      if (state._value === DrawerState.Peek && nonSlideOpen) {
        if (enableFadeBackground) {
          setFadeBackgroundOn(true);
        }
        animate(DrawerState.Open);
        // @ts-ignore: _value is not exposed to typescript
      } else if (state._value === DrawerState.Open && !nonSlideOpen) {
        if (enableFadeBackground) {
          setFadeBackgroundOn(true);
        }
        animate(DrawerState.Peek);
      }
    }
  }, [
    enableNonSlideOpen,
    DrawerState,
    animate,
    nonSlideOpen,
    state,
    enableFadeBackground,
    setFadeBackgroundOn,
    // NOTE: although fadeBackgroundOn is not used in the effect, its inclusion
    // is important! It forces additional run of this effect after
    // fadeBackgroundOn is set to true such that animate() can be executed.
    // Without including fadeBackgroundOn, animate() is never executed after
    // setFadeBackgroundOn is run.
    fadeBackgroundOn,
  ]);

  // Obtain the most important "transform" metric.
  const getTransform = () => {
    switch (fixedLoc) {
      case 'top':
        return {
          transform: [{translateY: deltaXY}],
        };
      case 'bottom':
        return {
          transform: [{translateY: deltaXY}],
        };
      case 'left':
        return {
          transform: [{translateX: deltaXY}],
        };
      case 'right':
        return {
          transform: [{translateX: deltaXY}],
        };
      default:
        return {};
    }
  };

  return (
    <>
      {fadeBackgroundOn && (
        <Animated.View
          style={{
            backgroundColor: 'black',
            opacity: deltaXY.interpolate({
              inputRange: [
                Math.min(
                  0,
                  getNextDeltaXY(DrawerState.Open),
                  getNextDeltaXY(DrawerState.Peek),
                ),
                Math.max(
                  0,
                  getNextDeltaXY(DrawerState.Open),
                  getNextDeltaXY(DrawerState.Peek),
                ),
              ],
              outputRange: ['right', 'bottom'].includes(fixedLoc)
                ? [maxFadeBackgroundOpacity, 0]
                : [0, maxFadeBackgroundOpacity],
            }),
            position: 'absolute',
            height: screenDim.totalHeight,
            width: screenDim.width,
            elevation: elevation,
          }}>
          <TouchableOpacity
            onPress={() => onFadeBackgroundPress()}
            style={{flex: 1}}
          />
        </Animated.View>
      )}
      <Animated.View
        style={[{position: 'absolute'}, style, getTransform()]}
        /* Refers to the PanResponder created above */
        {...panResponder.panHandlers}>
        {children}
      </Animated.View>
    </>
  );
};
