import React, { ReactElement } from 'react';
import { View, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import Svg, { Defs, Stop, Rect, RadialGradient } from 'react-native-svg';
import { StopType } from "../types/masonry.type";

interface GradientCardProps {
  height?: number;
  style?: StyleProp<ViewStyle>;
  cx?: string;
  cy?: string;
  r?: string;
  stops?: StopType[];
  text?: string;
}

const GRADIENT_ID = "grad";

const GradientCard: React.FC<GradientCardProps> = ({ height, style, cx, cy, r, stops, text }): ReactElement => {
  return (
      <View style={[style, {position: 'relative'}]}>
        <Svg height={`${height}`} width={"100%"} style={styles.card}>
          <Defs>
            <RadialGradient id={GRADIENT_ID} cx={cx} cy={cy} r={r}>
              {stops?.map((stop, index) => (
                  <Stop key={index} offset={stop.offset} stopColor={stop.stopColor} stopOpacity={stop.stopOpacity} />
              ))}
            </RadialGradient>
          </Defs>
          <Rect
              width={"100%"}
              height={`${height}`}
              fill={`url(#${GRADIENT_ID})`}
          />
        </Svg>
        <View style={[styles.itemTextContainer, { height }]}>
          <Text style={styles.itemText}>{text}</Text>
        </View>
      </View>
  );
}

export default GradientCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemTextContainer: {
    justifyContent: 'flex-end',
    padding: 15,
    position: 'absolute',
  },
  itemText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
