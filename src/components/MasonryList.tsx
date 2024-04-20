import React, {ReactElement, useCallback, useMemo} from 'react';
import {View, StyleSheet, Text, Dimensions, Animated, Platform, TouchableOpacity} from 'react-native';
import {GradientPropsType, Item, ItemHeight, MasonryListProps, StopType} from "../types/masonry.type";
import ScrollView = Animated.ScrollView;
import GradientCard from "./GradientCard";

const screenWidth = Dimensions.get('window').width;
const columnWidth = (screenWidth - 20) / 2;

let gradientIndex = 0;
let plainIndex = 0;

const plainColors = ["#171717", "#c1c1c1"];

const MasonryList: React.FC<MasonryListProps> = ({data}): ReactElement => {

  const stopTypeData: StopType[][] = useMemo(() => [
    [
      { offset: '30%', stopColor: '#BF42BC', stopOpacity: '1' },
      { offset: '100%', stopColor: '#7475C5', stopOpacity: '1' }
    ],
    [
      { offset: '30%', stopColor: '#5b5b5b', stopOpacity: '1' },
      { offset: '100%', stopColor: '#262626', stopOpacity: '1' }
    ],
    [
      { offset: '30%', stopColor: '#DA8C4D', stopOpacity: '1' },
      { offset: '100%', stopColor: '#F3DB83', stopOpacity: '1' }
    ],
    [
      { offset: '30%', stopColor: '#A630BD', stopOpacity: '1' },
      { offset: '100%', stopColor: '#3AD9BA', stopOpacity: '1' },
    ]
  ], []);

  const gradientProps: GradientPropsType = useMemo(() => ({
    3: { cx: "0%", cy: "100%", r: "80%" },
    4: { cx: "80%", cy: "90%", r: "100%" },
    default: { cx: "90%", cy: "100%", r: "100%" },
  }), []);

  const renderItem = useCallback((item: Item, index: number) => {
    const height = item.heightType === 'short' ? ItemHeight.short : ItemHeight.tall;
    const { cx, cy, r } = gradientProps[index] || gradientProps.default;

    if (index === 2 || index === 5) {
      let plainColor: string = "#383838";
      if (plainIndex < plainColors.length) {
        plainColor = plainColors[plainIndex];
        plainIndex++;
      }

      return (
          <TouchableOpacity onPress={() => console.log("pressed")}>
            <View key={item.key} style={[styles.itemContainer, {height, backgroundColor: plainColor, padding: 15}]}>
              <Text style={styles.itemText}>{item.content}</Text>
            </View>
          </TouchableOpacity>
      )
    } else {
      let radialGradient: StopType[];
      if (gradientIndex < stopTypeData.length) {
        radialGradient = stopTypeData[gradientIndex];
        gradientIndex++;
      } else {
        radialGradient = [];
      }

      return (
          <TouchableOpacity>
            <GradientCard
                key={item.key}
                style={styles.itemContainer}
                height={height}
                text={item.content}
                stops={radialGradient}
                cx={cx}
                cy={cy}
                r={r}
            />
          </TouchableOpacity>
      )
    }
  }, [gradientProps, stopTypeData]);

  const renderGroups = useCallback(() => {
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
  }, [data, renderItem]);

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
    ...Platform.select({
      web: {
        display: 'flex',
      },
    }),
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
    borderRadius: 10,
    backgroundColor: "#383838",
    ...Platform.select({
      web: {
        backgroundColor: "#383838",
      },
    }),
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default MasonryList;
