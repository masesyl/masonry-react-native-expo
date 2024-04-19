import React from 'react';
import {View, StyleSheet, Text, Dimensions, Animated} from 'react-native';
import {Item} from "../types/masonry.type";
import ScrollView = Animated.ScrollView;

const screenWidth = Dimensions.get('window').width;
const columnWidth = (screenWidth - 20) / 2;


type MasonryListProps = {
  data: Item[];
};

const MasonryList: React.FC<MasonryListProps> = ({ data }) => {
  const renderItem = (item: Item, height: number) => (
      <View key={item.key} style={[styles.itemContainer, {height}]}>
        <Text style={styles.itemText}>{item.content}</Text>
      </View>
  );

  const renderGroups = () => {
    const groups = [];
    for (let i = 0; i < data.length; i += 4) {
      const group = (
          <View key={`group-${i}`} style={styles.group}>
            <View style={styles.column}>
              {data[i] && renderItem(data[i], 240)}
              {data[i + 2] && renderItem(data[i + 2], 180)}
            </View>
            <View style={styles.column}>
              {data[i + 1] && renderItem(data[i + 1], 180)}
              {data[i + 3] && renderItem(data[i + 3], 240)}
            </View>
          </View>
      );
      groups.push(group);
    }
    return groups;
  };

  return (

        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false} horizontal={false}>
            {renderGroups()}
          </ScrollView>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  group: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: screenWidth - 20,
  },
  column: {
    width: columnWidth,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: columnWidth - 12,
    margin: 6,
    padding: 15,
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MasonryList;
