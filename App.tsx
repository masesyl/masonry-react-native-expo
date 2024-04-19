import { StatusBar } from 'expo-status-bar';
import {Animated, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Item} from "./src/types/masonry.type";
import MasonryList from "./src/components/MasonryList";

const data: Item[] = [
  {key: '1', content: 'Add new Lighthouses', height: 240},
  {key: '2', content: 'Verify Lighthouses', height: 180},
  {key: '3', content: 'Configure Domain grid', height: 240},
  {key: '4', content: 'Create Navmesh', height: 180},
  {key: '5', content: 'Item 5', height: 240},
  {key: '6', content: 'Item 6', height: 180},
  {key: '7', content: 'Item 7', height: 240},
  {key: '8', content: 'Item 8', height: 180},
  {key: '9', content: 'Item 9', height: 240},
  {key: '10', content: 'Item 10', height: 180},
  {key: '11', content: 'Item 11', height: 240},
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <MasonryList data={data} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
