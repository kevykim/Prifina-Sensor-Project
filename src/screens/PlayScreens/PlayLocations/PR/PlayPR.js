import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useCustomFonts } from "../../../../utils/CustomFonts";

import leftArrow from "../../../../assets/Misc/leftArrow.png";

import Avatar from "../../../../assets/Misc/Avatar.png";

import GreenStar from "../../../../assets/Misc/GreenStar.png";
import GrayStar from "../../../../assets/Misc/GrayStar.png";
import PR from "../../../../assets/Locations/PR.jpg";

import CalibScreen from "../../../../utils/calibScreen";
import styles from "../PlayStyles.js";

import { useState } from "react";

import { useFakeDates } from "../../../../context/FakeDates.js";

function PlayPR({ navigation, route }) {
  const { propDate } = route?.params || {};

  const { singleDate } = useFakeDates();

  const fontsLoaded = useCustomFonts();

  const [showModal, setShowModal] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={styles.backPlay}
              onPress={() => navigation.navigate("play")}
            >
              <Image source={leftArrow} />
              <Text
                style={{
                  color: "#AFAFAF",
                  fontFamily: "Quicksand-SemiBold",
                  fontSize: 12,
                }}
              >
                Play
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameHeader}>
            <Text style={{ fontSize: 16, fontFamily: "Quicksand-SemiBold" }}>
              Andy Haynes
            </Text>
            <Image source={Avatar} />
          </View>
        </View>

        <View style={styles.VAContainer}>
          <Text style={styles.VAHeader}>Pine Ridge</Text>
          <View style={styles.starContainer}>
            <Image style={styles.starSize} source={GreenStar} />
            <Image style={styles.starSize} source={GreenStar} />
            <Image style={styles.starSize} source={GreenStar} />
            <Image style={styles.starSize} source={GreenStar} />
            <Image style={styles.starSize} source={GrayStar} />
          </View>
        </View>

        <View style={styles.VAImageContainer}>
          <View style={styles.VAPlayedContainer}>
            <Text style={styles.VAPlayedText}>Played 5 times</Text>
          </View>
          <Image style={styles.VABigImage} source={PR} />
        </View>

        <View style={styles.VAplayTips}>
          <Text style={styles.tipText}>Tips</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.dotText}>• </Text>
            <Text style={styles.VAplayTipsText}>
              <Text style={styles.VAplayTipsTextBold}>Hole 3</Text>: Aim
              slightly left to avoid the fairway bunker on the right side.
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.dotText}>• </Text>
            <Text style={styles.VAplayTipsText}>
              <Text style={styles.VAplayTipsTextBold}>Hole 7</Text>: The green
              slopes from back to front, so leave your approach below the hole.
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.dotText}>• </Text>
            <Text style={styles.VAplayTipsText}>
              <Text style={styles.VAplayTipsTextBold}>Overall Difficulty</Text>:
              High. Navigate tight fairways and well-protected greens.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={styles.startRoundButton}
        >
          <Text style={styles.startRoundButtonText}>Start Round</Text>
        </TouchableOpacity>

        {showModal && (
          <CalibScreen
            modalShown={showModal}
            closeModal={setShowModal}
            navigation={navigation}
            propDate={propDate || singleDate}
            navVar={"playprsround"}
          />
        )}
      </View>
    </ScrollView>
  );
}

export default PlayPR;
