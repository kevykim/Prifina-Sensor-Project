import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";

import { useCustomFonts } from "./CustomFonts";
import LottieView from "lottie-react-native";
import { useEffect } from "react";

function ScoreSave({ modalShown, closeModal, navigation, navVar, propKey, propScore, propName, propDate, propTime }) {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }

  const [nmonth, nday, nyear] = propDate.split(".");

  useEffect(() => {
    setTimeout(() => {
      closeModal(false);
      navigation.navigate(navVar, {propKey : propKey, propScore : propScore, propName : propName, propDate : `${nmonth}/${nday}/${nyear}`, propTime : propTime});
    }, 3500);
  }, []);

  return (
    <Modal visible={modalShown} transparent animationType="fade">
      <View style={styles.modal_container}>
        <View style={{ height: 200 }}>
          <LottieView
            style={{ flex: 1, width: 125, justifyContent: 'center', alignItems: 'center' }}
            source={require("../assets/Animation/LoadingCircle.json")}
            autoPlay
            loop
          />

          <View style={styles.textContainer}>
            <Text style={styles.textWhite}>Saving...</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },

  textContainer: {
    marginTop: 25,
  },

  textWhite: {
    color: "white",
    textAlign: "center",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 20,
    lineHeight: 24,
  },
});

export default ScoreSave;
