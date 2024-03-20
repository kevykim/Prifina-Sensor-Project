import { createStackNavigator } from "@react-navigation/stack";
import Booking from "./Booking";
import Locate from "./Locate";
import Favorites from "./Favorites";
import LocateHistory from "./LocateHistory";
import NHOverview from "./BookingLocationScreens/NorthHill/NHOverview";
import VAOverview from "./BookingLocationScreens/VenturaAcres/VAOverview";
import VARegulations from "./BookingLocationScreens/VenturaAcres/VARegulations";
import VATeeTimes from "./BookingLocationScreens/VenturaAcres/VATeeTimes";
import BookingSuccess from "./BookingSuccess";
import { useEffect } from "react";
import OCOverview from "./BookingLocationScreens/OakWood/OCOverview";
import OCRegulations from "./BookingLocationScreens/OakWood/OCRegulations";
import OCTeeTimes from "./BookingLocationScreens/OakWood/OCTeeTimes";
import NHRegulations from "./BookingLocationScreens/NorthHill/NHRegulations";
import NHTeeTimes from "./BookingLocationScreens/NorthHill/NHTeeTimes";
import SWOverview from "./BookingLocationScreens/SouthWest/SWOverview";
import SWRegulations from "./BookingLocationScreens/SouthWest/SWRegulations";
import SWTeeTimes from "./BookingLocationScreens/SouthWest/SWTeeTimes";
import PROverview from "./BookingLocationScreens/PineRidge/PROverview";
import PRRegulations from "./BookingLocationScreens/PineRidge/PRRegulations";
import PRTeeTimes from "./BookingLocationScreens/PineRidge/PRTeeTimes";

const Stack = createStackNavigator();

function BookingStack({ navigation }) {
 useEffect(() => {
   const unsubscribe = navigation.addListener("tabPress", (e) => {

     e.preventDefault();

     // Reset the stack navigator
      navigation.navigate("booking");
   });

   return unsubscribe;
 }, [navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='booking' component={Booking} />
      <Stack.Screen name='locate' component={Locate} />
      <Stack.Screen name='favorites' component={Favorites} />
      <Stack.Screen name='locatehistory' component={LocateHistory} />

      <Stack.Screen name='nhoverview' component={NHOverview} />
      <Stack.Screen name='vaoverview' component={VAOverview} />
      <Stack.Screen name='ocoverview' component={OCOverview} />
      <Stack.Screen name='swoverview' component={SWOverview} />
      <Stack.Screen name='proverview' component={PROverview} />

      <Stack.Screen name='nhregulations' component={NHRegulations} />
      <Stack.Screen name='varegulations' component={VARegulations} />
      <Stack.Screen name='ocregulations' component={OCRegulations} />
      <Stack.Screen name='swregulations' component={SWRegulations} />
      <Stack.Screen name='prregulations' component={PRRegulations} />

      <Stack.Screen name='nhteetimes' component={NHTeeTimes} />
      <Stack.Screen name="vateetimes" component={VATeeTimes} />
      <Stack.Screen name='octeetimes' component={OCTeeTimes} />    
      <Stack.Screen name='swteetimes' component={SWTeeTimes} />
      <Stack.Screen name='prteetimes' component={PRTeeTimes} />

      <Stack.Screen name='success' component={BookingSuccess} />
    </Stack.Navigator>
  );
}

export default BookingStack;
