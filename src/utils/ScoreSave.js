import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";

import { useCustomFonts } from "./CustomFonts";
import LottieView from "lottie-react-native";
import { useEffect } from "react";

function ScoreSave({ modalShown, closeModal, navigation, navVar }) {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }

  useEffect(() => {
    setTimeout(() => {
      closeModal(false);
      navigation.navigate(navVar);
    }, 3000);
  }, []);

  return (
    <Modal visible={modalShown} transparent animationType="fade">
      <View style={styles.modal_container}>
        <View style={{ height: 250 }}>
          <LottieView
            style={{ flex: 1 }}
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
