import { createStackNavigator } from "@react-navigation/stack";


import { useEffect } from "react";
import Play from "./Play";
import Analyze from "./Analyze";
import Track from "./Track";
import Explore from "./Explore";
import PlayVA from "./PlayLocations/VA/PlayVA";
import PlayVASRound from "./PlayLocations/VA/PlayVASRound";
import PlayVACourse from "./PlayLocations/VA/PlayVACourse";
import PlayVASummary from "./PlayLocations/VA/PlayVASummary";
import PlayNH from "./PlayLocations/NH/PlayNH";
import PlayNHSRound from "./PlayLocations/NH/PlayNHSRound";
import PlayNHCourse from "./PlayLocations/NH/PlayNHCourse";
import PlayNHSummary from "./PlayLocations/NH/PlayNHSummary";
import PlaySW from "./PlayLocations/SW/PlaySW";
import PlaySWSRound from "./PlayLocations/SW/PlaySWSRound";
import PlaySWCourse from "./PlayLocations/SW/PlaySWCourse";
import PlaySWSummary from "./PlayLocations/SW/PlaySWSummary";
import PlayPR from "./PlayLocations/PR/PlayPR";
import PlayPRSRound from "./PlayLocations/PR/PlayPRSRound";
import PlayPRCourse from "./PlayLocations/PR/PlayPRCourse";
import PlayPRSummary from "./PlayLocations/PR/PlayPRSummary";
import PlayOC from "./PlayLocations/OC/PlayOC";
import PlayOCSRound from "./PlayLocations/OC/PlayOCSRound";
import PlayOCCourse from "./PlayLocations/OC/PlayOCCourse";
import PlayOCSummary from "./PlayLocations/OC/PlayOCSummary";

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

      <Stack.Screen name='playnh' component={PlayNH} />
      <Stack.Screen name='playva' component={PlayVA} />
      <Stack.Screen name='playsw' component={PlaySW} />
      <Stack.Screen name='playpr' component={PlayPR} />
      <Stack.Screen name='playoc' component={PlayOC} />

      <Stack.Screen name='playnhsround' component={PlayNHSRound} />
      <Stack.Screen name='playvasround' component={PlayVASRound} />
      <Stack.Screen name='playswsround' component={PlaySWSRound} />
      <Stack.Screen name='playprsround' component={PlayPRSRound} />
      <Stack.Screen name='playocsround' component={PlayOCSRound} />
      
      <Stack.Screen name='playnhcourse' component={PlayNHCourse} />
      <Stack.Screen name='playvacourse' component={PlayVACourse} />
      <Stack.Screen name='playswcourse' component={PlaySWCourse} />
      <Stack.Screen name='playprcourse' component={PlayPRCourse} />
      <Stack.Screen name='playoccourse' component={PlayOCCourse} />

      <Stack.Screen name='playnhsummary' component={PlayNHSummary} />
      <Stack.Screen name='playvasummary' component={PlayVASummary} />
      <Stack.Screen name='playswsummary' component={PlaySWSummary} />
      <Stack.Screen name='playprsummary' component={PlayPRSummary} />
      <Stack.Screen name='playocsummary' component={PlayOCSummary} />

    </Stack.Navigator>
  );
}

export default PlayStack;
