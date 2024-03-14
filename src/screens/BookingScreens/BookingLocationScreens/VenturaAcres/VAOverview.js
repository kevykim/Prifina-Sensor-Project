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
import VA from '../../../../assets/Locations/VA.png';

import rain from '../../../../assets/Weather/rain.png';
import golficon from '../../../../assets/Misc/golficon.png';

import { useRoute } from "@react-navigation/native";

function VAOverview({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            style={styles.backBooking}
            onPress={() => navigation.navigate("locate")}
          >
            <Image source={leftArrow} />
            <Text
              style={{
                color: "#AFAFAF",
                fontFamily: "Quicksand-SemiBold",
                fontSize: 12,
              }}
            >
              Locate
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

      <View style={styles.topButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("vaoverview")}
          style={{
            backgroundColor:
              route.name === "vaoverview" ? "#2FDA74" : "#D3D3D3",
            ...styles.topButtons,
          }}
        >
          <Text
            style={{
              color: route.name === "vaoverview" ? "white" : "black",
              ...styles.topButtonsText,
            }}
          >
            Overview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("varegulations")}
          style={styles.topButtons}
        >
          <Text style={styles.topButtonsText}>Regulations</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("vateetimes")}
          style={styles.topButtons}
        >
          <Text style={styles.topButtonsText}>Tee Times</Text>
        </TouchableOpacity>
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

      <View style={{ height: 100 }}>
        <ScrollView style={styles.VAScrollImageContainer} horizontal>
          <Image source={VA} style={styles.VASImage} />
          <Image source={VA} style={styles.VASImage} />
          <Image source={VA} style={styles.VASImage} />
          <Image source={VA} style={styles.VASImage} />
          <Image source={VA} style={styles.VASImage} />
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.readReviewsButton}>
        <Text style={styles.readReviewButtonText}>Read Reviews</Text>
      </TouchableOpacity>

      <View style={styles.CMContainer}>
        <View style={styles.CMLeft}>
          <Image style={styles.golfIconSize} source={golficon} />
          <View style={styles.CMInnerBox}>
            <Text style={styles.CMInnerBoxTop}>Course maintenance</Text>
            <Text style={styles.CMInnerBoxBot}>Play limited unitl 10 a.m.</Text>
          </View>
        </View>
        <Text style={styles.CMRight}>Please plan accordingly</Text>
      </View>

      <View style={styles.VAWeatherContainer}>
        <Image source={rain}/>
        <View style={styles.VAWeatherInfo}>
          <Text style={styles.VAWTextTop}>Weather Impact</Text>
          <Text style={styles.VAWTextBot}>
            30% chance of rain between 11 a.m and 3 p.m Rain can affect swing
            and distance, plan for adjustments
          </Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    flexDirection: "column",
    marginTop: 55,
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backBooking: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 65,
    justifyContent: "space-between",
  },
  nameHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 150,
  },
  topButtonContainer: {
    width: 361,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topButtons: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    width: 112,
    height: 32,
    borderRadius: 6,
    padding: 8,
    alignItems: "center",
  },
  topButtonsText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
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
  VAScrollImageContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  VASImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginRight: 10,
  },
  readReviewsButton: {
    backgroundColor: "#2FDA74",
    height: 40,
    width: 361,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 25,
  },
  readReviewButtonText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 22,
  },
  CMContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 68,
    borderBottomWidth: 0.7,
    borderColor: '#AFAFAF',
  },
  CMLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    height: 40,
    width: 200,
  },
  golfIconSize: {
    marginTop: 5,
    width: 38,
    height: 38
  },
  CMInnerBox: {
    flexDirection: 'column',
    justifyContent:'space-between',
    height: 38
  },
  CMInnerBoxTop: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 16,
    lineHeight: 20
  },
  CMInnerBoxBot: {
    fontFamily: 'Quicksand-Reg',
    fontSize: 12,
    lineHeight: 16
  },
  CMRight: {
    width: 90,
    height: 40,
    fontFamily: 'Quicksand-Med',
    fontSize: 12,
    lineHeight: 20,
    color: '#AFAFAF',
    textAlign: 'right',
    paddingRight: 8
  },

  VAWeatherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 104,
    marginTop: 5,
    marginBottom: 200
  },
  VAWeatherInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
  VAWTextTop: {
    fontFamily: 'Quicksand-Med',
    fontSize: 16,
    lineHeight: 20
  },
  VAWTextBot: {
    fontFamily: 'Quicksand-Reg',
    fontSize: 12,
    lineHeight: 20,
    width: 270
  },
});

export default VAOverview;
