import { createStackNavigator } from "@react-navigation/stack";
import Training from "./Training";

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
import Iron from "./PracticeScreens/Iron";
import IronTrack from "./TrackScreens/IronTrack";
import IronResult from "./ResultScreens/IronResult";


const Stack = createStackNavigator();

function TrainingStack({ navigation }) {

  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      e.preventDefault();

      // Reset the stack navigator
      navigation.navigate("training");
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="training" component={Training} />
      <Stack.Screen name="equipment" component={Equipment} />
      <Stack.Screen name="practice" component={Practice}/>
      <Stack.Screen name='tutorials' component={Tutorials}/>
      <Stack.Screen name='putting' component={Putting}/>
      <Stack.Screen name='arcadjustment' component={ArcAdjustment} />
      <Stack.Screen name='iron' component={Iron} />
      <Stack.Screen name='arctrack' component={ArcTrack} />
      <Stack.Screen name='putttrack' component={PuttTrack} />
      <Stack.Screen name='irontrack' component={IronTrack} />
      <Stack.Screen name='arcresult' component={ArcResult} />
      <Stack.Screen name='puttresult' component={PuttResult} />
      <Stack.Screen name='ironresult' component={IronResult} />
    </Stack.Navigator>
  );
}


export default TrainingStack;