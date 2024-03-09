import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native'
import NavBar from './src/components/NavBar';




export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    backgroundColor: '#fff',
  },
});
