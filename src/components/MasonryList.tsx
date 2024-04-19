import React from 'react';
import {View, StyleSheet, Text, Dimensions, Animated} from 'react-native';
import {Item, ItemHeight} from "../types/masonry.type";
import ScrollView = Animated.ScrollView;
import {LinearGradient} from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;
const columnWidth = (screenWidth - 20) / 2;


type MasonryListProps = {
  data: Item[];
};

let gradientIndex = 0;
let plainIndex = 0;

const MasonryList: React.FC<MasonryListProps> = ({data}) => {
  const renderItem = (item: Item, index: number) => {

    const height = item.heightType === 'short' ? ItemHeight.short : ItemHeight.tall;

    const linearGradientColors = [["#7475C5", "#BF42BC"], ["#262626", "#5b5b5b"], ["#F3DB83", "#DA8C4D"], ["#3AD9BA", "#7084BB", "#A630BD"]];

    const plainColors = ["#171717", "#c1c1c1"];

    if (index === 2 || index === 5) {
      let plainColor: string = "#383838";
        if (plainIndex < plainColors.length) {
            plainColor = plainColors[plainIndex];
            plainIndex++;
        }

      return (
        <View key={item.key} style={[styles.itemContainer, {height, backgroundColor: plainColor}]}>
          <Text style={styles.itemText}>{item.content}</Text>
        </View>
      )
    } else {
      let linearGradient: string[];
      if (gradientIndex < linearGradientColors.length) {
        linearGradient = linearGradientColors[gradientIndex];
        gradientIndex++;
      } else {
        linearGradient = [];
      }

      return (
          <LinearGradient
              key={item.key}
              style={[styles.itemContainer, {height}]}
              colors={linearGradient}
              start={{x: 1, y: 0.2}}
              end={{x: 1.3, y: 0.6}}
          >
            <Text style={styles.itemText}>{item.content}</Text>
          </LinearGradient>
      )
    }
  }


  const renderGroups = () => {
    const groups = [];
    for (let i = 0; i < data.length; i += 4) {
      const group = (
          <View key={`group-${i}`} style={styles.group}>
            <View style={styles.column}>
              {data[i] && renderItem(data[i], i)}
              {data[i + 2] && renderItem(data[i + 2], i + 2)}
            </View>
            <View style={styles.column}>
              {data[i + 1] && renderItem(data[i + 1], i + 1)}
              {data[i + 3] && renderItem(data[i + 3], i + 3)}
            </View>
          </View>
      );
      groups.push(group);
    }
    return groups;
  };

  return (

      <View style={styles.container}>
        <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
            horizontal={false}
        >
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
    width: columnWidth - 16,
    margin: 8,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#383838"
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default MasonryList;
