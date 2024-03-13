import { createStackNavigator } from "@react-navigation/stack";
import Booking from "./Booking";
import Locate from "./Locate";
import Favorites from "./Favorites";
import LocateHistory from "./LocateHistory";


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
    </Stack.Navigator>
  );
}

export default BookingStack;
