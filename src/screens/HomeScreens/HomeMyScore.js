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


function HomeMyScore({ navigation }) {
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
                color: route.name === "homemyscore" ? "#2FDA74" : "black",
                ...styles.HBCTop,
              }}
            >
              102
            </Text>
            <Text
              style={{
                color: route.name === "homemyscore" ? "#2FDA74" : "black",
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
              <Text style={styles.SCHeaderText}>North Hill 3/23/24</Text>
              <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>Download</Text>
                <Image source={download} />
              </TouchableOpacity>
            </View>

            <View style={styles.scoreChart}>
              <View style={styles.scoreChartHeaderContainer}>
                <View style={styles.scoreChartHLeft}>
                  <Text style={styles.scoreChartHLeftGray}>5 hr 16 min</Text>
                  <Text style={styles.scoreChartHLeftBlack}>18 holes</Text>
                </View>
                <Text style={styles.scoreChartHRight}>108</Text>
              </View>

              <View style={styles.ASCContainer}>
                <View style={styles.ASCContainerRowFirst}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Hole</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>2</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>3</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>6</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>7</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>8</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCTextBold}>9</Text>
                  </View>
                </View>

                <View style={styles.ASCContainerRowSecond}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Par</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>3</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                </View>
                <View style={styles.ASCContainerRowSecond}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Par</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>3</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                </View>
                <View style={styles.ASCContainerRowThird}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Score</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>0</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>0</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>0</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>+2</Text>
                  </View>
                </View>
              </View>

              <View style={{ ...styles.ASCContainer, marginBottom: 5 }}>
                <View style={styles.ASCContainerRowFirst}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Hole</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>10</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>11</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>12</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>13</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>14</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>15</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>16</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>17</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCTextBold}>18</Text>
                  </View>
                </View>

                <View style={styles.ASCContainerRowSecond}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Par</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>3</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                </View>
                <View style={styles.ASCContainerRowSecond}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Par</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>3</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                </View>
                <View style={styles.ASCContainerRowThird}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Score</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>0</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>0</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>0</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>+2</Text>
                  </View>
                </View>
              </View>

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
    height: 145,
  },
  ASCContainerRowFirst: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.3,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderColor: "#AFAFAF",
  },
  ASCContainerRowSecond: {
    flexDirection: "row",
    alignItems: "center",
    borderRightWidth: 0.3,
    borderLeftWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: "#AFAFAF",
  },
  ASCContainerRowThird: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
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
  ASCBorderRight: {
    borderRightWidth: 0.3,
    width: 26.5,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#AFAFAF",
  },
  ASCBorderLast: {
    width: 26.5,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  BPBDContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
