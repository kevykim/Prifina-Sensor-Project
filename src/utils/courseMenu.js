import React from "react";
import {
    Modal,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";

import { useCustomFonts } from "../utils/CustomFonts";
import Avatar from "../assets/Misc/Avatar.png";

import righty from '../assets/Misc/righty.png'

import { useState } from "react";
import CalculateScore from "./calculateScore";

function CourseMenu({ modalShown, closeModal, navigation, navVar, handicap, updateHandicap, propDate }) {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }

    const [showCalcModal, setshowCalcModal] = useState(false);

   const [isEnabled, setIsEnabled] = useState(false);

   const toggleSwitch = () => {
     setIsEnabled((previousState) => !previousState);
   };

   const [yards, setYards] = useState(true)
   const [meters, setMeters] = useState(false)

   const toggleYards = () => {
    setYards(true)
    setMeters(false)
   }

   const toggleMeters = () => {
    setYards(false)
    setMeters(true)
   }

  return (
    <Modal visible={modalShown} transparent animationType="fade">
      <View style={styles.modal_container}>
        <View style={styles.modal_menu}>
          <View style={styles.modal_inner}>
            {/* <View style={{ height: 70, justifyContent: "space-between" }}> */}
            <View style={styles.modal_name_header}>
              <Text style={{ fontSize: 16, fontFamily: "Quicksand-SemiBold" }}>
                Andy Haynes
              </Text>
              <Image source={Avatar} />
            </View>
            <View style={styles.modal_line}></View>
            {/* </View> */}

            {/* <View style={{ height: 100, justifyContent: "space-between" }}> */}
            <View style={styles.modal_second_box}>
              <Text style={styles.mapText}>Map</Text>
              <View style={styles.switchContainer}>
                <Text style={styles.satelliteText}>Satellite</Text>
                <Switch onValueChange={toggleSwitch} value={isEnabled} />
              </View>
            </View>
            <View style={styles.modal_line}></View>
            {/* </View> */}

            {/* <View style={{ height: 150, justifyContent: "space-between" }}> */}
            <View style={styles.modal_third_box}>
              <Text style={styles.roundsetupText}>Round Setup</Text>
              <View style={styles.HCPContainer}>
                <Text style={styles.HCPText}>HCP</Text>
                <View style={styles.HCPButtons}>
                  <TouchableOpacity
                    onPress={() => updateHandicap(handicap - 1)}
                    style={styles.minusButton}
                  >
                    <Text style={styles.mpText}>-</Text>
                  </TouchableOpacity>
                  <View style={styles.numDisplay}>
                    <Text style={styles.numDisplayText}>{handicap}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => updateHandicap(handicap + 1)}
                    style={styles.plusButton}
                  >
                    <Text style={styles.mpText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.unitContainer}>
                <Text style={styles.unitText}>Unit</Text>
                <View style={styles.unitButtons}>
                  <TouchableOpacity
                    style={{
                      ...styles.yd_mi,
                      backgroundColor:
                        yards === true && meters === false
                          ? "#2FDA74"
                          : "#AFAFAF",
                    }}
                  >
                    <Text onPress={toggleYards} style={styles.yd_mi_text}>
                      yd/mi
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      ...styles.m_km,
                      backgroundColor:
                        meters === true && yards === false
                          ? "#2FDA74"
                          : "#AFAFAF",
                    }}
                  >
                    <Text onPress={toggleMeters} style={styles.m_km_text}>
                      m/km
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.modal_line}></View>
            {/* </View> */}

            {/* <View style={{ height: 30, justifyContent: "space-between" }}> */}
            <View style={styles.modal_fourth_box}>
              <TouchableOpacity style={styles.smartWatchSettingsC}>
                <Text style={styles.SWSText}>Smart Watch Settings</Text>
                <Image style={{ tintColor: "black" }} source={righty} />
              </TouchableOpacity>
            </View>
            <View style={styles.modal_line}></View>
            {/* </View> */}

            <View style={styles.PEButtonC}>
              <TouchableOpacity
                onPress={() => closeModal(false)}
                style={styles.pauseButton}
              >
                <Text style={styles.PEButtonText}>Pause</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setshowCalcModal(true);
                  //   closeModal(false);
                }}
                style={styles.endRoundButton}
              >
                <Text style={styles.PEButtonText}>End Round</Text>
              </TouchableOpacity>
            </View>
          </View>

          {showCalcModal && (
            <CalculateScore
              modalShown={showCalcModal}
              closeCalcModal={setshowCalcModal}
              navigation={navigation}
              navVar={navVar}
              closeMenu={closeModal}
              propDate={propDate}
            />
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },

  modal_menu: {
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    width: 248,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  modal_inner: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 664,
    width: 216,
  },

  modal_name_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 150,
    left: 65,
  },

  modal_line: {
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
    width: 216,
  },

  modal_second_box: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 75,
    left: 15
  },
  mapText: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 190
  },
  satelliteText: {
    fontFamily: "Quicksand-SemiBold",
    color: "#AFAFAF",
    fontSize: 16,
    lineHeight: 24,
  },

  modal_third_box: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 125,
    left: 15

  },
  roundsetupText: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
  },
  HCPContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 190
  },
  HCPText: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
  },
  HCPButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 100,
  },
  minusButton: {
    width: 24,
    height: 24,
    backgroundColor: "black",
    borderRadius: 8,

    justifyContent: "center",
    alignItems: "center",
  },
  plusButton: {
    width: 24,
    height: 24,
    backgroundColor: "black",
    borderRadius: 8,

    justifyContent: "center",
    alignItems: "center",
  },
  mpText: {
    color: "white",
    zIndex: 5,
    fontFamily: "Quicksand-Med",
    fontSize: 16,
  },
  numDisplay: {
    backgroundColor: "#AFAFAF",
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  numDisplayText: {
    zIndex: 5,
    fontFamily: "Quicksand-Med",
    fontSize: 16,
  },
  unitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 190
  },
  unitText: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
  },
  unitButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
  },
  yd_mi: {
    width: 56,
    height: 32,
    borderRadius: 8,
    // paddingHorizontal: 4,
    backgroundColor: "#2FDA74",
    justifyContent: "center",
    alignItems: "center",
  },
  yd_mi_text: {
    color: "white",
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
  },
  m_km: {
    width: 56,
    height: 32,
    borderRadius: 8,
    // paddingHorizontal: 4,
    backgroundColor: "#AFAFAF",
    justifyContent: "center",
    alignItems: "center",
  },
  m_km_text: {
    color: "white",
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
  },

  modal_fourth_box: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 45,
  },
  smartWatchSettingsC: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: 'center',
    width: 180,
    left: 15,
  },
  SWSText: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
  },
  PEButtonC: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 130,
    left: 10,
  },
  pauseButton: {
    width: 200,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#2FDA74",
  },
  endRoundButton: {
    width: 200,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#F91111",
  },
  PEButtonText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 20,
    lineHeight: 24,
  },
});

export default CourseMenu;
