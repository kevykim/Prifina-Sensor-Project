import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native'
import NavBar from './src/components/NavBar';
import { FakeDatesProvider } from './src/context/FakeDates';




export default function App() {
  return (
    <FakeDatesProvider>
    <SafeAreaProvider style={styles.container}>
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
    </SafeAreaProvider>
    </FakeDatesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
