import { createStackNavigator } from "@react-navigation/stack";
import Coach from "./Coach";

import Equipment from "./Equipment";
import Practice from "./Practice";
import Tutorials from "./Tutorials";
import Putting from "./PracticeScreens/Putting";
import ArcAdjustment from "./PracticeScreens/ArcAdjustment";
import ArcTrack from "./TrackScreens/ArcTrack";
import PuttTrack from "./TrackScreens/PuttTrack";
import ArcResult from "./ResultScreens/ArcResult";
import PuttResult from "./ResultScreens/PuttResult";

import { useEffect } from "react";


const Stack = createStackNavigator();

function CoachStack({ navigation }) {

  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      e.preventDefault();

      // Reset the stack navigator
      navigation.navigate("coach");
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="coach" component={Coach} />
      <Stack.Screen name="equipment" component={Equipment} />
      <Stack.Screen name="practice" component={Practice}/>
      <Stack.Screen name='tutorials' component={Tutorials}/>
      <Stack.Screen name='putting' component={Putting}/>
      <Stack.Screen name='arcadjustment' component={ArcAdjustment} />
      <Stack.Screen name='arctrack' component={ArcTrack} />
      <Stack.Screen name='putttrack' component={PuttTrack} />
      <Stack.Screen name='arcresult' component={ArcResult} />
      <Stack.Screen name='puttresult' component={PuttResult} />
    </Stack.Navigator>
  );
}


export default CoachStack;