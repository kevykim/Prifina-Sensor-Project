import { createStackNavigator } from "@react-navigation/stack";
import Scorecard from "./Scorecard";
import Trends from "./ScorecardScreens/Trends";
import Statistics from "./ScorecardScreens/Statistics";
import History from "./ScorecardScreens/History";

import { useEffect } from "react";

const Stack = createStackNavigator();

function ScorecardStack({ navigation }) {

useEffect(() => {
  const unsubscribe = navigation.addListener("tabPress", (e) => {
    e.preventDefault();

    // Reset the stack navigator
    navigation.navigate("scorecard");
  });

  return unsubscribe;
}, [navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="scorecard" component={Scorecard} />
      <Stack.Screen name='trends' component={Trends} />
      <Stack.Screen name='statistics' component={Statistics} />
      <Stack.Screen name='history' component={History} />
    </Stack.Navigator>
  );
}

export default ScorecardStack;
