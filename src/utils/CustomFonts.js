import { useFonts } from "expo-font";

export const useCustomFonts = () => {
  let [fontsLoaded] = useFonts({
    // 300
    "Quicksand-Light": require("../assets/fonts/Quicksand/Quicksand-Light.ttf"),
    // 400
    "Quicksand-Reg": require('../assets/fonts/Quicksand/Quicksand-Regular.ttf'),
    // 500
    "Quicksand-Med": require('../assets/fonts/Quicksand/Quicksand-Medium.ttf'),
    // 600
    "Quicksand-SemiBold": require("../assets/fonts/Quicksand/Quicksand-SemiBold.ttf"),
    // 700
    "Quicksand-Bold": require("../assets/fonts/Quicksand/Quicksand-Bold.ttf"),
  });

  return fontsLoaded;
};
