import React from "react";
import {
  Modal,
  View,
  Text,
    Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import watch from '../assets/Misc/watch.png'

import { useCustomFonts } from "../utils/CustomFonts";
import { useState } from "react";

function CalibScreen({modalShown, closeModal, navigation, navVar, propDate}) {

    const [counter, setCounter] = useState(false)



        setTimeout(() => {
            setCounter(true)
        }, 3000)



  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }


  return (
    <Modal visible={modalShown} transparent animationType="slide">
      <View style={styles.modal_container}>
        {!counter ? (
          <View>
            <Image source={watch} />
            <Text style={styles.modal_text}>
              Please ensure smartwatch is turned on and paired.
            </Text>
          </View>
        ) : (
          <View>
            <Text style={styles.modal_text}>
              Are you in a suitable environment to golf?
            </Text>
            <View style={styles.modal_button_container}>
              <TouchableOpacity
                style={styles.modal_yes}
                onPress={() => {closeModal(false) 
                navigation.navigate(navVar, {propDate : propDate})
                }}
              >
                <Text style={styles.modal_button_text}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modal_no}
                onPress={() => closeModal(false)}
              >
                <Text style={styles.modal_button_text}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modal_text: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    lineHeight: 32,
    height: 90,
    fontSize: 20,
    textAlign: "center",
    width: 305,
    marginTop: 25,
  },
  modal_button_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    width: 300,
  },
  modal_yes: {
    backgroundColor: "#2FDA74",
    width: 136,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  modal_no: {
    backgroundColor: "#0F0F0F",
    width: 136,
    height: 42.5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  modal_button_text: {
    color: 'white',
    fontFamily: 'Quicksand-SemiBold'
  }
});

export default CalibScreen;
