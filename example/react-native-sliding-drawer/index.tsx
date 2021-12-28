/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {
  Platform,
  View,
  NativeModules,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import {DynamicDrawer} from './dynamicDrawer';
import {StaticDrawer} from './staticDrawer';

// types
type PropsT = {
  peekSize: number; // peek state width or height.
  openSize: number; // open state width or height.
  fixedLoc: 'top' | 'bottom' | 'left' | 'right'; // Where the drawer is fixed at. Top drawer means sliding downwards, bottom upwards, left rightwards, right leftwards.
  drawerWidth?: number; // manual override of drawer width, applicable when fixedLoc === 'top' | 'bottom'
  drawerHeight?: number; // manual override of drawer height, applicable when fixedLoc === 'right' | 'left'
  maxPct?: number; // maximum pct of width or height allowed for a user to drag the drawer.
  sensitivity?: number; // how much finger dragging (in pixels) shall trigger the drawer to change state.
  expandable?: boolean; // whether the drawer is expandable. If set to false, the drawer cannot expand beyond the peek state
  isInitialPeek?: boolean; // a flag indicating whether the initial state of the drawer is Peek. Default to True.
  enableNonSlideOpen?: boolean; // a flag indicating whether a drawer can be opened without sliding.
  nonSlideOpen?: boolean; // If true, open the drawer without sliding. Otherwise, peek the drawer without sliding.
  onDrawerOpen?: () => void; // callback when the drawer is in open state. This callback CANNOT be state changes, because re-rendering when the drawer is not in the peek state would break its behavior.
  onDrawerPeek?: () => void; // callback when the drawer is in peek state. This callback CANNOT be state changes, because re-rendering when the drawer is not in the peek state would break its behavior.
  speed?: number; // the speed config of Animation.spring() method. Default to 40.
  useNativeDriver?: boolean; // whether to use native driver for animation. Default to false.
  elevation?: number; // In Android, setting position to absolute does not guarantee that the drawer will stay on top, if some component has some value set to elevation. Use this prop to create a higher evelation than any other components. Not applicable to iOS.
  enableFadeBackground?: boolean; // A flag indicating whether a fade in background is visible upon drawer open
  maxFadeBackgroundOpacity?: number; // The max opacity of the fade in background
  onFadeBackgroundPress?: () => void; // callback when the fade in background is pressed. NOTE: currently peek the drawer onFadeBackgroundPress is NOT supported, because the animation on fade is messed up when isInitialPeek changes.
};

/**
	Function component of a sliding drawer
	NOTE: the static and dynamic drawer must be separately defined. If we create
  both drawers within the same component, the props won't update if one
  switches from a non-expandable drawer to an expandable. I don't know that
  cause exactly, but it is most likely related to how Animate.View is
  implemented.
 */
export const SlidingDrawer: React.FC<PropsT> = props => {
  const {
    children,
    peekSize,
    openSize,
    fixedLoc,
    drawerWidth = -1,
    drawerHeight = -1,
    maxPct = 0.5,
    sensitivity = 10,
    expandable = false,
    isInitialPeek = true,
    enableNonSlideOpen = false,
    nonSlideOpen = false,
    onDrawerOpen = () => {
      // Default no-op function
    },
    onDrawerPeek = () => {
      // Default no-op function
    },
    speed = 20,
    useNativeDriver = false,
    elevation = 200, // A very big elevation, should guarantee the drawer is on top of everything else
    enableFadeBackground = false,
    maxFadeBackgroundOpacity = 0.5,
    onFadeBackgroundPress = () => {
      // Default no-op function
    },
  } = props;

  // State is the height of the drawer
  const DrawerState = React.useMemo(
    () => ({
      Open: openSize,
      Peek: peekSize,
    }),
    [openSize, peekSize],
  );

  /**
   * NOTE: Obtain Screen Dimension
   *
   * The screen width and total height can be obtained from useWindowDimensions
   * While width is the entire width of a device for both Android and iOS,
   * height is interpreted differently. In iOS, height from useWindowDimensions
   * is the total height of the device, including the top bar (status bar),
   * screen height, and bottom bar. In Android, height is just the screen,
   * not counting the top bar (there is no bottom bar in Android). Thus, to
   * compute the total screen height of Android, we use
   * useWindowDimensions().height + top bar height.
   *
   * For iOS, we want to know the bottom bar height. One way to do so is to
   * render a dummy view and use its ref to call ref.current.measure(). In its
   * callback, we get access to the height of the dummy view and its absolute
   * y position relative to the entire device. Note that onLayout does not work
   * because it only returns relative y position. Also note that we need the
   * dummy view to extend all the way to the bottom of the screen, so its style
   * needs to include {flex: 1}. Interestingly, as the dummy view extends to the
   * bottom, it does not go beyond the bottom bar. Thus when we do the absolute
   * y position plus the dummy view height, we get the screen height from above
   * the top bar to above the bottom bar. Thus, the bottom bar height is the
   * total height minus the newly acquired height.
   */
  const [initializing, setInitializing] = React.useState(true);
  const {height, width} = useWindowDimensions();
  const [screenDim, setScreenDim] = React.useState({
    width: -1,
    totalHeight: -1,
    topBar: -1,
    bottomBar: -1,
  });
  const iniRef = React.useRef<View>(null);

  React.useEffect(() => {
    if (
      initializing &&
      Object.keys(screenDim).every(
        k => screenDim[k as keyof typeof screenDim] >= 0,
      )
    ) {
      setInitializing(false);
    }
  }, [initializing, setInitializing, screenDim]);

  if (initializing) {
    // Grabing screen dimension, including the top and bottom bar height
    return (
      <View
        ref={iniRef}
        style={{position: 'absolute', height: '100%'}}
        onLayout={_ => {
          if (iniRef.current) {
            iniRef.current.measure((__, ___, ____, height_, _____, pageY) => {
              // pageX and pageY are the absolute X and Y position relative to
              // the entire device (i.e. page)
              if (Platform.OS === 'ios') {
                NativeModules.StatusBarManager.getHeight(
                  (h: {height: number}) => {
                    setScreenDim({
                      topBar: h.height,
                      bottomBar: height - height_ - pageY,
                      totalHeight: height,
                      width: width,
                    });
                  },
                );
              } else {
                setScreenDim({
                  topBar: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
                  bottomBar: 0,
                  totalHeight:
                    height +
                    (StatusBar.currentHeight ? StatusBar.currentHeight : 0),
                  width: width,
                });
              }
            });
          }
        }}
      />
    );
  }

  const isVertical = ['top', 'bottom'].includes(fixedLoc);
  const size = isVertical ? screenDim.totalHeight : screenDim.width;

  if (maxPct * size < openSize || openSize < peekSize) {
    throw new Error(
      'Wrong Peekable Drawer set up. openSize must not be smaller than peekSize; maxPct times size must not be smaller than openSize',
    );
  }

  const getStyles = () => {
    switch (fixedLoc) {
      case 'top':
        return {
          height: size,
          width: drawerWidth < 0 ? screenDim.width : drawerWidth,
          bottom:
            size -
            (isInitialPeek ? DrawerState.Peek : DrawerState.Open) -
            (Platform.OS === 'ios' ? screenDim.bottomBar : screenDim.topBar),
          elevation: elevation,
        };
      case 'bottom':
        return {
          height: size,
          width: drawerWidth < 0 ? screenDim.width : drawerWidth,
          top:
            size -
            (isInitialPeek ? DrawerState.Peek : DrawerState.Open) -
            screenDim.topBar,
          elevation: elevation,
        };
      case 'left':
        return {
          top: Platform.OS === 'ios' ? -screenDim.topBar : 0,
          width: size,
          height: drawerHeight < 0 ? screenDim.totalHeight : drawerHeight,
          right: size - (isInitialPeek ? DrawerState.Peek : DrawerState.Open),
          elevation: elevation,
        };
      case 'right':
        return {
          top: Platform.OS === 'ios' ? -screenDim.topBar : 0,
          width: size,
          height: drawerHeight < 0 ? screenDim.totalHeight : drawerHeight,
          left: size - (isInitialPeek ? DrawerState.Peek : DrawerState.Open),
          elevation: elevation,
        };
      default:
        return {};
    }
  };

  return expandable ? (
    <DynamicDrawer
      isVertical={isVertical}
      screenDim={screenDim}
      size={size}
      DrawerState={DrawerState}
      maxPct={maxPct}
      fixedLoc={fixedLoc}
      sensitivity={sensitivity}
      isInitialPeek={isInitialPeek}
      enableNonSlideOpen={enableNonSlideOpen}
      nonSlideOpen={nonSlideOpen}
      onDrawerOpen={onDrawerOpen}
      onDrawerPeek={onDrawerPeek}
      speed={speed}
      useNativeDriver={useNativeDriver}
      elevation={elevation}
      enableFadeBackground={enableFadeBackground}
      maxFadeBackgroundOpacity={maxFadeBackgroundOpacity}
      onFadeBackgroundPress={onFadeBackgroundPress}
      style={getStyles()}>
      {children}
    </DynamicDrawer>
  ) : (
    <StaticDrawer style={getStyles()}>{children}</StaticDrawer>
  );
};
