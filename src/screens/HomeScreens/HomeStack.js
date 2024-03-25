import { createStackNavigator } from "@react-navigation/stack";
import HomeToday from "./HomeToday";
import HomeCalendar from "./HomeCalendar";
import HomeMyScore from "./HomeMyScore";
import HomePerformance from "./HomePerformance";

import { useEffect } from "react";

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      e.preventDefault();

      // Reset the stack navigator
      navigation.navigate("hometoday");
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{
          animationEnabled: false,
        }}
        name="hometoday"
        component={HomeToday}
      />

      <Stack.Screen
        options={{
          animationEnabled: false,
        }}
        name="homecalendar"
        component={HomeCalendar}
      />

      <Stack.Screen
        options={{
          animationEnabled: false,
        }}
        name="homemyscore"
        component={HomeMyScore}
      />

      <Stack.Screen
        options={{
          animationEnabled: false,
        }}
        name="homeperformance"
        component={HomePerformance}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
