import React from 'react';
import {LogBox} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import MasonryScreen from "./src/screens/MasonryScreen";
import PedometerScreen from "./src/screens/PedometerScreen";
import TestScreen from "./src/screens/TestScreen";

LogBox.ignoreAllLogs(true);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"MasonryScreen"}>
          <Stack.Screen name={"MasonryScreen"} component={MasonryScreen} options={{headerShown: false}} />
          <Stack.Screen name={"TestScreen"} component={TestScreen} options={{headerShown: false}} />
          <Stack.Screen name={"PedometerScreen"} component={PedometerScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
