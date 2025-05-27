import type { LayoutChangeEvent } from "react-native";
import {
  SceneRendererProps,
  NavigationState,
  Route,
} from "react-native-tab-view";
import { useState } from "react";
import { Animated, Platform, View, Pressable } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type TabBarProps = SceneRendererProps & {
  navigationState: NavigationState<Route>;
};

/**
 * The Problem where the indicators jumps translate positions exists when we use unistyles; Both StyleSheet.create and withUnistyles(Component)
 * The problem does not exist when using the default StyleSheet.create.
 */
export const TabBar = ({ position, navigationState }: TabBarProps) => {
  const [tabPositions, setTabPositions] = useState<
    { x: number; width: number }[]
  >([]);

  const inputRange = navigationState.routes.map((_, i) => i);

  // Calculate the position (translateX) and width for the indicator
  const translateX = position.interpolate({
    inputRange,
    outputRange:
      tabPositions.map((t) => t.x || 0).length > 0
        ? tabPositions.map((t) => t.x || 0)
        : inputRange.map((i) => i * 0), // Provide default values when no measurements yet
    extrapolate: "clamp",
  });

  const measureTab = (index: number) => (event: LayoutChangeEvent) => {
    const { width, x } = event.nativeEvent.layout;

    setTabPositions((prev) => {
      const newPositions = [...prev];
      newPositions[index] = { width, x };
      return newPositions;
    });
  };

  return (
    <View style={styles.tabsContainer}>
      {navigationState.routes.map((route, index) => {
        const isFocused = navigationState.index === index;

        // Handle label color interpolation
        const color = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? "#000" : "#888")),
          extrapolate: "clamp",
        });

        return (
          <Pressable
            key={route.key}
            onLayout={measureTab(index)}
            style={[styles.tab, isFocused && styles.activeTab]}
          >
            <Animated.Text style={[styles.label, { color }]}>
              {route.title || route.key}
            </Animated.Text>
          </Pressable>
        );
      })}
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [{ translateX }],
            width: tabPositions[navigationState.index]?.width || 0,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    position: "relative",
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
  indicator: {
    position: "absolute",
    bottom: 0,
    height: 2,
    backgroundColor: "#000",
  },
});

export default TabBar;
