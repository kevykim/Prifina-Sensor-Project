import { createStackNavigator } from "@react-navigation/stack";
import Coach from "./Coach";

import Equipment from "./Equipment";
import Practice from "./Practice";
import Tutorials from "./Tutorials";
import Putting from "./PracticeScreens/Putting";
import ArcAdjustment from "./PracticeScreens/ArcAdjustment";


const Stack = createStackNavigator();

function CoachStack({ navigation }) {
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
    </Stack.Navigator>
  );
}


export default CoachStack;