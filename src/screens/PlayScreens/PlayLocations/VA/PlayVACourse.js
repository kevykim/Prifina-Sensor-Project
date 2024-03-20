import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { useCustomFonts } from "../../../../utils/CustomFonts";

import leftArrow from "../../../../assets/Misc/leftArrow.png";

import CRS from '../../../../assets/Golf/CRS.png'

import hamburger from '../../../../assets/Misc/hamburger.png'

import CourseMenu from "../../../../utils/courseMenu";

import { useState } from "react";


function PlayVACourse({ navigation }) {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

 const [showModal, setShowModal] = useState(false);


  return (
    <ImageBackground style={styles.main} source={CRS}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={styles.backPlay}
              onPress={() => navigation.navigate("play")}
            >
              <Image style={{ tintColor: "white" }} source={leftArrow} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => setShowModal(!showModal)} style={styles.hamburgerContainer}>
            <Image style={{ tintColor: "black" }} source={hamburger} />
          </TouchableOpacity>

          {showModal && (
            <CourseMenu
              modalShown={showModal}
              closeModal={setShowModal}
              navigation={navigation}
              navVar={"playvasummary"}
            />
          )}
        </View>

        <View style={styles.leftInfo}>
          <View style={styles.leftInfoCards}>
            <Text style={styles.LICTop}>Hole</Text>
            <Text style={styles.LICBot}>1</Text>
          </View>
          <View style={styles.leftInfoCards}>
            <Text style={styles.LICTop}>Par</Text>
            <Text style={styles.LICBot}>5</Text>
          </View>
          <View style={styles.leftInfoCards}>
            <Text style={styles.LICTop}>HCP</Text>
            <Text style={styles.LICBot}>10</Text>
          </View>
          <View style={styles.leftInfoCards}>
            <Text style={styles.LICTop}>Next</Text>
            <Text style={styles.LICBot}>105 Yds</Text>
          </View>
          <TouchableOpacity style={styles.scoreCardButton}>
            <Text style={styles.scoreCardButtonText}>SCORECARD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    flexDirection: "column",
  },
  container: {
    marginTop: 35,
  },
  header: {
    zIndex: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    width: "100%",
    position: "absolute",
  },
  backPlay: {
    flexDirection: "row",
    alignItems: "center",
    width: 48,
    justifyContent: "space-between",
  },
  hamburgerContainer: {
    width: 30,
    height: 30,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  leftInfo: {
    flexDirection: "column",
    width: 136,
    height: 378,
    justifyContent: "space-between",
    top: 80,
    left: 15,
  },
  leftInfoCards: {
    width: 85,
    height: 65,
    borderRadius: 8,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center",
  },
  LICTop: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 24,
    color: "#9E9E9E",
  },
  LICBot: {
    fontFamily: "Quicksand-Bold",
    fontSize: 20,
  },
  scoreCardButton: {
    height: 56,
    width: 136,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2FDA74",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginTop: 25,
  },
  scoreCardButtonText: {
    color: "white",
    fontFamily: "Quicksand-Bold",
    fontSize: 20,
  },
});

export default PlayVACourse;
