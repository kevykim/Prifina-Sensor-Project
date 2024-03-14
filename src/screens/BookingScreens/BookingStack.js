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


const Stack = createStackNavigator();

function BookingStack({ navigation }) {
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
      <Stack.Screen name='varegulations' component={VARegulations} />
      <Stack.Screen name="vateetimes" component={VATeeTimes} />
      <Stack.Screen name='success' component={BookingSuccess} />
    </Stack.Navigator>
  );
}

export default BookingStack;
