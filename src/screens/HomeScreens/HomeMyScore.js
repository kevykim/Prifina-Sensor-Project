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
import download from "../../assets/Misc/download.png";

import { useFakeDates } from "../../context/FakeDates";


function HomeMyScore({ navigation, route }) {
  const newDay = new Date();
  const month = newDay.getMonth() + 1;
  const day = newDay.getDate();
  const year = newDay.getFullYear();
  const shortDate = `${month}.${day}`;

  const {
    propKey = "NH",
    propScore = "102",
    propTime = "5 hr 16 min",
    propDate = `${month}/${day}/${year}`,
    propName = "North Hill",
  } = route?.params || {};
  

  const current = useRoute();

  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  const { fakeScoreCards, fakeDates } = useFakeDates();

  // const filteredDate = fakeDates.filter(el => el.image === propKey)

  //  const longDate = () => {
  //    const lastDate = filteredDate[filteredDate.length - 1].date;

  //    const options = { month: "numeric", day: "numeric", year: "numeric" };
  //    const newDate = new Date(year, month - 1, day).toLocaleDateString(
  //      "en-US",
  //      options
  //    );
  //    return newDate;
  //  };

  const renderScoreRow = (label, data, index) => (
    <View
      style={[
        styles.ASCContainerRow,
        label === "Hole" && {
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          borderBottomWidth: 0,
        },
        label === "Par" && {
          borderBottomWidth: 0,
        },
        label === "Handicap" && {
          borderBottomWidth: 0,
        },
      ]}
    >
      <View
        style={{
          ...styles.ASCLabel,
          borderTopRightRadius: 4,
          borderTopLeftRadius: index === 0 ? 4 : 0,
        }}
      >
        <Text style={styles.ASCTextBold}>{label}</Text>
      </View>
      {data.map((value, index) => (
        <View
          key={index}
          style={
            index === data.length - 1
              ? { ...styles.ASCBorder, borderRightWidth: 0 }
              : styles.ASCBorder
          }
        >
          <Text style={label === "Hole" ? styles.ASCTextBold : styles.ASCText}>
            {value}
          </Text>
        </View>
      ))}
    </View>
  );

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
            <Image source={sunnyIcon} />
            <Text style={styles.HBCBot}>Today</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homecalendar");
            }}
            style={styles.HBCards}
          >
            <Text style={styles.HBCTop}>{shortDate}</Text>
            <Text style={styles.HBCBot}>Calendar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homemyscore");
            }}
            style={styles.HBCards}
          >
            <Text
              style={{
                color: current.name === "homemyscore" ? "#2FDA74" : "black",
                ...styles.HBCTop,
              }}
            >
              {propScore}
            </Text>
            <Text
              style={{
                color: current.name === "homemyscore" ? "#2FDA74" : "black",
                ...styles.HBCBot,
              }}
            >
              My Score
            </Text>
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
          <View>
            <View style={styles.SCHeader}>
              <Text style={styles.SCHeaderText}>
                {propName} {propDate}
              </Text>
              <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>Download</Text>
                <Image source={download} />
              </TouchableOpacity>
            </View>

            <View style={styles.scoreChart}>
              <View style={styles.scoreChartHeaderContainer}>
                <View style={styles.scoreChartHLeft}>
                  <Text style={styles.scoreChartHLeftGray}>{propTime}</Text>
                  <Text style={styles.scoreChartHLeftBlack}>18 holes</Text>
                </View>
                <Text style={styles.scoreChartHRight}>{propScore}</Text>
              </View>

              <View style={styles.ASCContainer}>
                {fakeScoreCards[propKey].map((row, index) => (
                  <View
                    key={index}
                    style={
                      index === fakeScoreCards[propKey].length - 5
                        ? styles.ASCContainer
                        : styles.none
                    }
                  >
                    {renderScoreRow(row.label, row.values, index)}
                  </View>
                ))}
                <View style={styles.BPBDContainer}>
                  <View style={styles.BPBDCard}>
                    <View style={styles.boxGreen}></View>
                    <Text style={styles.BPBDText}>Buddy</Text>
                  </View>

                  <View style={styles.BPBDCardMid}>
                    <View style={styles.boxDrkGreen}></View>
                    <Text style={styles.BPBDText}>Par</Text>
                  </View>

                  <View style={styles.BPBDCard}>
                    <View style={styles.boxGray}></View>
                    <Text style={styles.BPBDText}>Bogey</Text>
                  </View>

                  <View style={styles.BPBDCardLast}>
                    <View style={styles.boxDrkGray}></View>
                    <Text style={styles.BPBDText}>Double Bogey</Text>
                  </View>
                </View>
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

  SCHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 20,
  },
  SCHeaderText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 16,
    lineHeight: 24,
  },
  downloadButton: {
    backgroundColor: "#358DD1",
    height: 24,
    width: 98,
    borderRadius: 4,
    padding: 4,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  downloadButtonText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
  },
  scoreChart: {
    backgroundColor: "#F1F1F1",
    width: 361,
    height: 400,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 150,
  },
  scoreChartHeaderContainer: {
    height: 62,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  scoreChartHLeft: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 42,
  },
  scoreChartHLeftGray: {
    color: "#AFAFAF",
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
  },
  scoreChartHLeftBlack: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
  },

  scoreChartHRight: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 48,
  },

  ASCContainer: {
    height: 45,
  },
  ASCContainerRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.3,
    borderColor: "#AFAFAF",
  },
  ASCLabel: {
    borderRightWidth: 0.3,
    width: 75,
    height: 32,
    justifyContent: "center",
    paddingLeft: 12,
    borderColor: "#AFAFAF",
  },
  ASCTextBold: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
  },
  ASCText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
  },
  ASCBorder: {
    width: 26.5,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 0.3,
    borderColor: "#AFAFAF",
  },
  BPBDContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 17,
  },
  BPBDCard: {
    width: 45,
    height: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  BPBDCardMid: {
    width: 31,
    height: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  BPBDCardLast: {
    width: 80,
    height: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  BPBDText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 10,
  },
  boxGreen: {
    backgroundColor: "#2FDA74",
    borderRadius: 2,
    width: 8,
    height: 8,
  },
  boxDrkGreen: {
    borderRadius: 2,
    width: 8,
    height: 8,
    backgroundColor: "#1B6E3C",
  },
  boxGray: {
    borderRadius: 2,
    width: 8,
    height: 8,
    backgroundColor: "#AFAFAF",
  },
  boxDrkGray: {
    borderRadius: 2,
    width: 8,
    height: 8,
    backgroundColor: "#202020",
  },
});

export default HomeMyScore;
