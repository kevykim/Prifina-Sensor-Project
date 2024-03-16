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
import VA from "../../../../assets/Locations/VA.png";


import CalibScreen from "../../../../utils/calibScreen";

import { useState } from "react";


function PlayVA({ navigation }) {
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
          <Text style={styles.VAHeader}>Ventura Acres</Text>
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
            <Text style={styles.VAPlayedText}>Played 8 times</Text>
          </View>
          <Image style={styles.VABigImage} source={VA} />
        </View>

        <View style={styles.VAplayTips}>
          <Text style={styles.tipText}>Tips</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.dotText}>• </Text>
            <Text style={styles.VAplayTipsText}>
              <Text style={styles.VAplayTipsTextBold}>Hole 12</Text>: A
              challenging lake near the green demands accuracy. Be aware of the
              water hazard.
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.dotText}>• </Text>
            <Text style={styles.VAplayTipsText}>
              <Text style={styles.VAplayTipsTextBold}>Hole 5</Text>: Consider
              laying up before the water hazard for a safer and simpler approach
              to the green.
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.dotText}>• </Text>
            <Text style={styles.VAplayTipsText}>
              <Text style={styles.VAplayTipsTextBold}>Overall Difficulty</Text>:
              Moderate. Expect a mix of challenges and strategic opportunities.
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => setShowModal(true)} style={styles.startRoundButton}>
          <Text style={styles.startRoundButtonText}>Start Round</Text>
        </TouchableOpacity>

        {showModal && (
          <CalibScreen
            modalShown={showModal}
            closeModal={setShowModal}
            navigation={navigation}
            navVar={"playvasround"}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    flexDirection: "column",
    padding: 15,
    backgroundColor: "white",
  },
  container: {
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backPlay: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 50,
    justifyContent: "space-between",
  },
  nameHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 150,
  },
  VAContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  VAHeader: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  starContainer: {
    flexDirection: "row",
    width: 124,
    height: 24,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
  },
  starSize: {
    width: 17,
    height: 17,
  },
  VAImageContainer: {
    width: 361,
    height: 200,
    borderRadius: 8,
    marginBottom: 30,
  },
  VAPlayedContainer: {
    backgroundColor: "#358DD1",
    width: 104,
    height: 24,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 16,
    padding: 4,
    position: "absolute",
    zIndex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  VAPlayedText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    lineHeight: 16,
  },
  VABigImage: {
    height: 200,
    width: 361,
    borderRadius: 8,
  },
  VAplayTips: {
    height: 219,
    width: 361,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: "center",
  },
  tipText: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 20,
    lineHeight: 18,
    marginBottom: 10,
  },
  VAplayTipsText: {
    fontFamily: "Quicksand-Light",
    fontSize: 12,
    lineHeight: 22,
  },
  VAplayTipsTextBold: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    lineHeight: 22,
  },
  dotText: {
    marginTop: 2.5,
  },
  startRoundButton: {
    height: 42,
    borderRadius: 8,
    backgroundColor: "#2FDA74",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 155,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  startRoundButtonText: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 16,
    lineHeight: 22,
    color: 'white'
  },
});

export default PlayVA;
