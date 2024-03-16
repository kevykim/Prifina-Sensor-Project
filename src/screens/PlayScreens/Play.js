import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useCustomFonts } from "../../utils/CustomFonts";

import leftArrow from "../../assets/Misc/leftArrow.png";

import Avatar from "../../assets/Misc/Avatar.png";


import GreenStar from "../../assets/Misc/GreenStar.png";
import GrayStar from "../../assets/Misc/GrayStar.png";

import NHG from "../../assets/Locations/NHG.png";
import SB from "../../assets/Locations/SB.png";

function Play({ navigation }) {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={styles.backHome}
              onPress={() => navigation.navigate("Home")}
            >
              <Image source={leftArrow} />
              <Text
                style={{
                  color: "#AFAFAF",
                  fontFamily: "Quicksand-SemiBold",
                  fontSize: 12,
                }}
              >
                Home
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
            onPress={() => navigation.navigate("analyze")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Analyze</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("track")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Track</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("explore")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Explore</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.upComingEventContainer}>
            <Text style={styles.upComingEventText}>Upcoming Event</Text>
            <View style={styles.upComingEventNum}>
              <Text style={styles.upComingEventNumText}>2</Text>
            </View>
          </View>

          <View style={styles.eventsContainer}>
            <View style={styles.eventCrsCard}>
              <View style={styles.starContainer}>
                <Image source={GreenStar} />
                <Image source={GreenStar} />
                <Image source={GreenStar} />
                <Image source={GreenStar} />
                <Image source={GrayStar} />
              </View>

              <Image style={styles.eventCrsImage} source={NHG} />

              <View style={styles.eventCrsTContainer}>
                <View style={styles.ECrsBox}>
                  <Text style={styles.ECrsBoxTop}>North Hill</Text>
                  <View style={styles.ECrsBoxBot}>
                    <Text style={styles.ECrsBBText}>Tee Time</Text>
                    <Text style={styles.ECrsBBDate}> 03.01.2024 10:00AM</Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.letsPlayButton}>
                  <Text style={styles.letsPlayText}>Play</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.eventCrsCard}>
              <View style={styles.starContainer}>
                <Image source={GreenStar} />
                <Image source={GreenStar} />
                <Image source={GreenStar} />
                <Image source={GreenStar} />
                <Image source={GrayStar} />
              </View>

              <Image style={styles.eventCrsImage} source={SB} />

              <View style={styles.eventCrsTContainer}>
                <View style={styles.ECrsBox}>
                  <Text style={styles.ECrsBoxTop}>Ventura Acres</Text>
                  <View style={styles.ECrsBoxBot}>
                    <Text style={styles.ECrsBBText}>Tee Time</Text>
                    <Text style={styles.ECrsBBDate}> 03.24.2024 10:00AM</Text>
                  </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('playva')} style={styles.letsPlayButton}>
                  <Text style={styles.letsPlayText}>Play</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
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
  backHome: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 60,
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
  scorecardHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
 

  upComingEventContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 185,
    height: 24,
    marginTop: 15,
    marginBottom: 5,
  },
  upComingEventText: {
    fontFamily: "Quicksand-Med",
    fontSize: 20,
    lineHeight: 24,
  },
  upComingEventNum: {
    borderRadius: 100,
    backgroundColor: "#2FDA74",
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  upComingEventNumText: {
    color: "white",
    fontFamily: "Quicksand-Med",
    fontSize: 12,
    lineHeight: 24,
  },
  eventsContainer: {
    flexDirection: "column",
    marginBottom: 150,
  },
  eventCrsCard: {
    height: 196,
    width: 361,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#D3D3D3",
    marginTop: 10,
  },
  starContainer: {
    flexDirection: "row",
    backgroundColor: "#358DD1",
    position: "absolute",
    zIndex: 5,
    width: 104,
    height: 24,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 6,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
  },
  eventCrsImage: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    height: 136,
  },
  eventCrsTContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    height: 44,
  },
  ECrsBox: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 42,
  },
  ECrsBoxTop: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 12,
  },
  ECrsBoxBot: {
    flexDirection: "row",
  },
  ECrsBBText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 24,
  },
  ECrsBBDate: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    lineHeight: 24,
  },
  letsPlayButton: {
    backgroundColor: "#2FDA74",
    width: 123,
    height: 42,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  letsPlayText: {
    fontFamily: "Quicksand-SemiBold",
    color: "white",
    fontSize: 16,
    lineHeight: 22,
  },
});

export default Play;
