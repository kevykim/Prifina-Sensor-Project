import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";


import { useCustomFonts } from "../utils/CustomFonts";
import examplelocal from '../assets/Locations/examplelocal.png';

function ALPScreen({ modalShown, closeModal, navigation, navVar }) {

  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Modal visible={modalShown} transparent animationType="fade">
      <View style={styles.modal_container}>
        <View style={styles.location_modal}>
          <View style={styles.location_allow_parpro_c}>
            <Text style={styles.location_allow_parpro}>
              Allow "ParPro" to access your location?
            </Text>
          </View>
          <Image source={examplelocal} style={styles.location_modal_image} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navVar);
              closeModal(false);
            }}
            style={styles.location_allow_while_c}
          >
            <Text style={styles.location_allow_while}>
              Allow While Using App
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navVar);
              closeModal(false);
            }}
            style={styles.location_allow_once_c}
          >
            <Text style={styles.location_allow_once}>Allow Once</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => closeModal(false)} style={styles.location_dont_allow_c}>
            <Text style={styles.location_dont_allow}>Don't Allow</Text>
          </TouchableOpacity>
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
  location_modal: {
    width: 220,
    height: 330,
    backgroundColor: "#F1F1F1",
    borderRadius: 16,
  },
  location_allow_parpro_c: {
    height: 66,
    padding: 12,
  },
  location_allow_parpro: {
    fontFamily: "Quicksand-Bold",
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
  },
  location_modal_image: {
    width: 220,
    height: 150
  },
  location_allow_while_c: {
    borderTopWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    padding: 8,
  },
  location_allow_while: {
    color: "#358DD1",
    fontFamily: "Quicksand-Bold",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 20,
  },
  location_allow_once_c: {
    borderTopWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    padding: 8,
  },
  location_allow_once: {
    color: "#358DD1",
    fontFamily: "Quicksand-Med",
    textAlign: "center",
    lineHeight: 20,
  },
  location_dont_allow_c: {
    borderTopWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    padding: 8,
  },
  location_dont_allow: {
    color: "#358DD1",
    fontFamily: "Quicksand-Med",
    textAlign: "center",
    lineHeight: 20,
  },
});

export default ALPScreen;
