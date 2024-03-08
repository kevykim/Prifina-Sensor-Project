import { View, ScrollView, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
// import { useCustomFonts } from "../utils/CustomFonts";



function HomePage() {
  

//   const fontsLoaded = useCustomFonts();

//   if (!fontsLoaded) {
//     return null;
//   }

  return (
    <ScrollView contentContainerStyle={styles.main}>
     <Text>Homepage</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 main : {
  flex: 1,
  backgroundColor: 'blue'
 }
});

export default HomePage;
