import { createStackNavigator } from "@react-navigation/stack";


import { useEffect } from "react";
import Play from "./Play";
import Analyze from "./Analyze";
import Track from "./Track";
import Explore from "./Explore";
import PlayVA from "./PlayLocations/VA/PlayVA";
import PlayVASRound from "./PlayLocations/VA/PlayVASRound";
import PlayVACourse from "./PlayLocations/VA/PlayVACourse";

const Stack = createStackNavigator();

function PlayStack({ navigation }) {
  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      e.preventDefault();

      // Reset the stack navigator
      navigation.navigate("play");
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="play" component={Play} />
      <Stack.Screen name='analyze' component={Analyze} />
      <Stack.Screen name='track' component={Track} />
      <Stack.Screen name='explore' component={Explore} />
      <Stack.Screen name='playva' component={PlayVA} />
      <Stack.Screen name='playvasround' component={PlayVASRound} />
      <Stack.Screen name='playvacourse' component={PlayVACourse} />
    </Stack.Navigator>
  );
}

export default PlayStack;
