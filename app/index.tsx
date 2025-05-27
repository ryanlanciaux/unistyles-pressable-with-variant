import * as React from 'react';
import { View, Text, useWindowDimensions, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { StyleSheet } from 'react-native-unistyles';
import TabBar from './tabBar';

const ITEM_COUNT = 300;

// First tab component
const FirstRoute = () => (
    <ScrollView>
      {Array.from({ length: ITEM_COUNT }, (_, index) => (
        <Text key={index} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
          hello - this is a test #{index + 1}
        </Text>
      ))}
    </ScrollView>
);

// Second tab component
const SecondRoute = () => (
    <ScrollView>
      {Array.from({ length: ITEM_COUNT }, (_, index) => (
        <Text key={index} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
          hello - this is a test #{index + 1}
        </Text>
      ))}
    </ScrollView>
);

// Third tab component
const ThirdRoute = () => (
    <ScrollView>
      {Array.from({ length: ITEM_COUNT }, (_, index) => (
        <Text key={index} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
          hello - this is a test #{index + 1}
        </Text>
      ))}
    </ScrollView>
);

// Scene mapping for the tabs
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

// Routes configuration
const routes = [
  { key: 'first', title: 'First' },
  { key: 'second', title: 'Second' },
  { key: 'third', title: 'Third' },
];

const Index = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <TabView
        renderTabBar={(props) => <TabBar {...props} />}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        pagerStyle={styles.pager}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    paddingTop: rt.insets.top,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  pager: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  button: {
    borderRadius: 24,
    padding: 16,
    variants: {
      variant: {
        primary: {
          backgroundColor: theme.colors.primary
        },
        secondary: {
          backgroundColor: theme.colors.secondary
        }
      }
    }
  },
  buttonPressed: {
    variants: {
      variant: {
        primary: {
          backgroundColor: theme.colors.primaryPressed
        },
        secondary: {
          backgroundColor: theme.colors.secondaryPressed
        }
      }
    }
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 16,
    marginBottom: 64
  }
}));
