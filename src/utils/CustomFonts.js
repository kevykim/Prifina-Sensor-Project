import { useFonts } from "expo-font";

export const useCustomFonts = () => {
  let [fontsLoaded] = useFonts({
    "Quicksand-Reg": require('../assets/fonts/Quicksand/Quicksand-Regular.ttf'),
    "Quicksand-Bold": require("../assets/fonts/Quicksand/Quicksand-Bold.ttf"),
    "Quicksand-Light": require("../assets/fonts/Quicksand/Quicksand-Light.ttf"),
  });

  return fontsLoaded;
};
