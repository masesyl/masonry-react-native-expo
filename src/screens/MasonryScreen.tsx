import {Item} from "../types/masonry.type";
import {SafeAreaView, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";
import MasonryList from "../components/MasonryList";
import React from "react";

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

export default function MasonryScreen() {
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
