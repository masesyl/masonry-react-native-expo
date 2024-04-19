import {StatusBar} from 'expo-status-bar';
import {Animated, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Item} from "./src/types/masonry.type";
import MasonryList from "./src/components/MasonryList";

const data: Item[] = [
  {key: '1', content: 'Add new Lighthouses', heightType: 'tall'},
  {key: '2', content: 'Verify Lighthouses', heightType: 'short'},
  {key: '3', content: 'Configure Domain grid', heightType: 'short'},
  {key: '4', content: 'Create Navmesh', heightType: 'tall'},
  {key: '5', content: 'Add new Lighthouses', heightType: 'tall'},
  {key: '6', content: 'Verify Lighthouses', heightType: 'short'},
  {key: '7', content: 'Item 7', heightType: 'short'},
  {key: '8', content: 'Item 8', heightType: 'tall'},
];

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light"/>
        <MasonryList data={data}/>
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
