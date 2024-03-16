import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useCustomFonts } from "../../utils/CustomFonts";

import Avatar from "../../assets/Misc/Avatar.png";
import updateIcon from "../../assets/Misc/updateIcon.png";
import sunnyIcon from "../../assets/Weather/sunnyIcon.png";
import greenSunny from "../../assets/Weather/greenSunny.png";

import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import GreenStar from "../../assets/Misc/GreenStar.png";
import GrayStar from "../../assets/Misc/GrayStar.png";

import NHG from "../../assets/Locations/NHG.png";
import SB from "../../assets/Locations/SB.png";

function HomeCalendar({ navigation }) {
  const route = useRoute();

  const fontsLoaded = useCustomFonts();

  const newDay = new Date();
  const month = newDay.getMonth() + 1;
  const day = newDay.getDate();
  const shortDate = `${month}.${day}`;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        {/* <Text>Home</Text> */}
        <View style={styles.homeHeaderContainerShadow}>
          <LinearGradient
            colors={["#13A14C", "#30DA74", "#2FDA74", "#13A14C"]}
            style={styles.homeHeaderContainer}
          >
            <View style={styles.homeAvatarContainer}>
              <Text style={styles.homeAvatarName}>Andy Haynes</Text>
              <Image source={Avatar} />
            </View>

            <View style={styles.updateContainer}>
              <Image source={updateIcon} />
              <View>
                <Text style={styles.updateContainerTextTop}>
                  You achieved 2 strokes less than the last game.
                </Text>
                <Text style={styles.updateContainerTextBot}>
                  Good job on improving your skill every day!
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.homeButtonsContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("hometoday");
            }}
            style={styles.HBCards}
          >
            <Image
              source={sunnyIcon}
            />
            <Text
              style={styles.HBCBot}
            >
              Today
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homecalendar");
            }}
            style={styles.HBCards}
          >
            <Text
              style={{
                color: route.name === "homecalendar" ? "#2FDA74" : "black",
                ...styles.HBCTop,
              }}
            >
              {shortDate}
            </Text>
            <Text
              style={{
                color: route.name === "homecalendar" ? "#2FDA74" : "black",
                ...styles.HBCBot,
              }}
            >
              Calendar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homemyscore");
            }}
            style={styles.HBCards}
          >
            <Text style={styles.HBCTop}>102</Text>
            <Text style={styles.HBCBot}>My Score</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homeperformance");
            }}
            style={{ ...styles.HBCards, width: 80 }}
          >
            <View style={styles.HBCSpan}>
              <Text style={styles.HBCTop}>10 </Text>
              <Text style={styles.HBCTopSpan}> HCP</Text>
            </View>
            <Text style={styles.HBCBot}>Performance</Text>
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

                <TouchableOpacity style={styles.contactButton}>
                  <Text style={styles.contactText}>Contact</Text>
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

                <TouchableOpacity style={styles.contactButton}>
                  <Text style={styles.contactText}>Contact</Text>
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
    backgroundColor: "white",
    padding: 15,
  },
  container: {
    marginTop: 50,
  },
  homeHeaderContainer: {
    height: 128,
    width: 361,
    borderRadius: 16,
    padding: 16,
  },
  homeHeaderContainerShadow: {
    shadowColor: "#2FDA74AB",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 3,
    shadowRadius: 18.84,
  },
  homeAvatarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  homeAvatarName: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 24,
    lineHeight: 24,
    color: "white",
  },
  updateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    width: 305,
  },
  updateContainerTextTop: {
    fontFamily: "Quicksand-Med",
    fontSize: 12,
    lineHeight: 20,
    color: "white",
  },
  updateContainerTextBot: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 20,
    color: "white",
  },
  homeButtonsContainer: {
    height: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
    paddingRight: 12,
    paddingLeft: 12,
    marginBottom: 25,
  },
  HBCards: {
    width: 56,
    height: 48,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HBCSpan: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HBCTop: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
  },
  HBCTopSpan: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 15,
  },
  HBCBot: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
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
  contactButton: {
    backgroundColor: "#2FDA74",
    width: 123,
    height: 42,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  contactText: {
    fontFamily: "Quicksand-SemiBold",
    color: "white",
    fontSize: 16,
    lineHeight: 22,
  },
});

export default HomeCalendar;
