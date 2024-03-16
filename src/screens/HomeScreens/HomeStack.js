import { createStackNavigator } from "@react-navigation/stack";
import HomeToday from "./HomeToday";
import HomeCalendar from "./HomeCalendar";
import HomeMyScore from "./HomeMyScore";
import HomePerformance from "./HomePerformance";


const Stack = createStackNavigator();

function HomeStack({ navigation }) {
 

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
