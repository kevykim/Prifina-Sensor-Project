import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useCustomFonts } from "../../../../utils/CustomFonts";

import leftArrow from "../../../../assets/Misc/leftArrow.png";

import CRS from "../../../../assets/Golf/CRS.png";

import hamburger from "../../../../assets/Misc/hamburger.png";

import CourseMenu from "../../../../utils/courseMenu";

import { useState } from "react";

import startingRoundObj from "../StartingRoundObject";

import styles from "../PlayCourseStyles";

function PlayNHCourse({ navigation, route }) {
  const { propHole } = route?.params;
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  const [showModal, setShowModal] = useState(false);

  const [handicap, setHandicap] = useState(10);

  const updateHandicap = (newHandicap) => {
    setHandicap(newHandicap);
  };

  return (
    <ImageBackground style={styles.main} source={CRS}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={styles.backPlay}
              onPress={() => navigation.navigate("playnhsround")}
            >
              <Image style={{ tintColor: "white" }} source={leftArrow} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => setShowModal(!showModal)}
            style={styles.hamburgerContainer}
          >
            <Image style={{ tintColor: "black" }} source={hamburger} />
          </TouchableOpacity>

          {showModal && (
            <CourseMenu
              handicap={handicap}
              updateHandicap={updateHandicap}
              modalShown={showModal}
              closeModal={setShowModal}
              navigation={navigation}
              navVar={"playnhsummary"}
            />
          )}
        </View>

        <View style={styles.leftInfo}>
          <View style={styles.leftInfoCards}>
            <Text style={styles.LICTop}>Hole</Text>
            <Text style={styles.LICBot}>{propHole}</Text>
          </View>
          <View style={styles.leftInfoCards}>
            <Text style={styles.LICTop}>Par</Text>
            <Text style={styles.LICBot}>
              {startingRoundObj[propHole - 1].par}
            </Text>
          </View>
          <View style={styles.leftInfoCards}>
            <Text style={styles.LICTop}>HCP</Text>
            <Text style={styles.LICBot}>{handicap}</Text>
          </View>
          <View style={styles.leftInfoCards}>
            <Text style={styles.LICTop}>Next</Text>
            <Text style={styles.LICBot}>
              {startingRoundObj[propHole - 1].distance} Yds
            </Text>
          </View>
          <TouchableOpacity style={styles.scoreCardButton}>
            <Text style={styles.scoreCardButtonText}>SCORECARD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}


export default PlayNHCourse;
