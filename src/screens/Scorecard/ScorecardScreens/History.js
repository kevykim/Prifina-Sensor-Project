import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useCustomFonts } from "../../../utils/CustomFonts";

import leftArrow from "../../../assets/Misc/leftArrow.png";

import Avatar from "../../../assets/Misc/Avatar.png";

import download from '../../../assets/Misc/download.png'

import { useRoute } from "@react-navigation/native";
import { useState } from "react";

function History({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();

  const today = new Date();
  const newDate = new Date();
  newDate.setDate(newDate.getDate() + 5);

  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  const formattednewDate = newDate.toLocaleDateString("en-US", options);

  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();

  const newMonth = newDate.getMonth() + 1;
  const newDay = newDate.getDate();
  const newYear = newDate.getFullYear();

  const shortToday = `${month}/${day}/${year}`;
  const shortnewDate = `${newMonth}/${newDay}/${newYear}`;

  if (!fontsLoaded) {
    return null;
  }

  const [showNorth, setShowNorth] = useState(false);
  const [showSouth, setShowSouth] = useState(false);
  const [showVentura, setShowVentura] = useState(false);
  const [showBlue, setShowBlue] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            style={styles.backScore}
            onPress={() => navigation.navigate("scorecard")}
          >
            <Image source={leftArrow} />
            <Text
              style={{
                color: "#AFAFAF",
                fontFamily: "Quicksand-SemiBold",
                fontSize: 12,
              }}
            >
              Scorecard
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
          onPress={() => navigation.navigate("trends")}
          style={styles.topButtons}
        >
          <Text style={styles.topButtonsText}>Trends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("statistics")}
          style={styles.topButtons}
        >
          <Text style={styles.topButtonsText}>Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("history")}
          style={{
            backgroundColor: route.name === "history" ? "#2FDA74" : "#D3D3D3",
            ...styles.topButtons,
          }}
        >
          <Text
            style={{
              color: route.name === "history" ? "white" : "black",
              ...styles.topButtonsText,
            }}
          >
            History
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.historyHeader}>History</Text>

      <View>
        <Text style={styles.historyInfo}>
          Welcome to your personalized training hub. Here you can set and
          customize your equipment, practice specific skills and drills, and
          view tutorials catered towards your personal feedback needs.
          Personalized coaching is available 24/7.
        </Text>
      </View>

      <Text style={styles.twelveMonths}>Last 12 months</Text>

      <View style={styles.HTimeContainer}>
        <TouchableOpacity
          onPress={() => setShowNorth(!showNorth)}
          style={styles.HTCards}
        >
          <View style={styles.HTCLeft}>
            <Text style={styles.HTCDate}>{formattedDate}</Text>
            <Text style={styles.HTCName}>North Hill</Text>
          </View>

          <Text style={styles.HTCBold}>104</Text>
        </TouchableOpacity>
        {showNorth && (
          <View style={styles.scoreCardContainer}>
            <View>
              <View style={styles.SCHeader}>
                <Text style={styles.SCHeaderText}>North Hill {shortToday}</Text>
                <TouchableOpacity style={styles.downloadButton}>
                  <Text style={styles.downloadButtonText}>Download</Text>
                  <Image source={download} />
                </TouchableOpacity>
              </View>

              <View style={styles.scoreChart}>
                <View style={styles.scoreChartHeaderContainer}>
                  <View style={styles.scoreChartHLeft}>
                    <Text style={styles.scoreChartHLeftGray}>1 hr 16 min</Text>
                    <Text style={styles.scoreChartHLeftBlack}>6 holes</Text>
                  </View>
                  <Text style={styles.scoreChartHRight}>104</Text>
                </View>

                <View style={styles.ASCContainer}>
                  <View style={styles.ASCContainerRowFirst}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Hole</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>4</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>5</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>6</Text>
                    </View>
                  </View>

                  <View style={styles.ASCContainerRowSecond}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Par</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                  </View>
                  <View style={styles.ASCContainerRowThird}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Score</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>7</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>5</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>4</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>8</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>6</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                  </View>
                  <View style={styles.ASCContainerRowLast}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Putt</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>4</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}

        <TouchableOpacity
          onPress={() => setShowSouth(!showSouth)}
          style={styles.HTCards}
        >
          <View style={styles.HTCLeft}>
            <Text style={styles.HTCDate}>{formattednewDate}</Text>
            <Text style={styles.HTCName}>South West</Text>
          </View>

          <Text style={styles.HTCBold}>110</Text>
        </TouchableOpacity>
        {showSouth && (
          <View style={styles.scoreCardContainer}>
            <View>
              <View style={styles.SCHeader}>
                <Text style={styles.SCHeaderText}>South West {shortnewDate}</Text>
                <TouchableOpacity style={styles.downloadButton}>
                  <Text style={styles.downloadButtonText}>Download</Text>
                  <Image source={download} />
                </TouchableOpacity>
              </View>

              <View style={styles.scoreChart}>
                <View style={styles.scoreChartHeaderContainer}>
                  <View style={styles.scoreChartHLeft}>
                    <Text style={styles.scoreChartHLeftGray}>1 hr 16 min</Text>
                    <Text style={styles.scoreChartHLeftBlack}>6 holes</Text>
                  </View>
                  <Text style={styles.scoreChartHRight}>110</Text>
                </View>

                <View style={styles.ASCContainer}>
                  <View style={styles.ASCContainerRowFirst}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Hole</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>4</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>5</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>6</Text>
                    </View>
                  </View>

                  <View style={styles.ASCContainerRowSecond}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Par</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                  </View>
                  <View style={styles.ASCContainerRowThird}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Score</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>7</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>5</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>4</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>8</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>6</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                  </View>
                  <View style={styles.ASCContainerRowLast}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Putt</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>4</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}

        <TouchableOpacity
          onPress={() => setShowVentura(!showVentura)}
          style={styles.HTCards}
        >
          <View style={styles.HTCLeft}>
            <Text style={styles.HTCDate}>January 14, 2024</Text>
            <Text style={styles.HTCName}>Ventura Acres</Text>
          </View>

          <Text style={styles.HTCBold}>93</Text>
        </TouchableOpacity>
        {showVentura && (
          <View style={styles.scoreCardContainer}>
            <View>
              <View style={styles.SCHeader}>
                <Text style={styles.SCHeaderText}>Ventura Acres 1/14/2024</Text>
                <TouchableOpacity style={styles.downloadButton}>
                  <Text style={styles.downloadButtonText}>Download</Text>
                  <Image source={download} />
                </TouchableOpacity>
              </View>

              <View style={styles.scoreChart}>
                <View style={styles.scoreChartHeaderContainer}>
                  <View style={styles.scoreChartHLeft}>
                    <Text style={styles.scoreChartHLeftGray}>1 hr 16 min</Text>
                    <Text style={styles.scoreChartHLeftBlack}>6 holes</Text>
                  </View>
                  <Text style={styles.scoreChartHRight}>93</Text>
                </View>

                <View style={styles.ASCContainer}>
                  <View style={styles.ASCContainerRowFirst}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Hole</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>4</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>5</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>6</Text>
                    </View>
                  </View>

                  <View style={styles.ASCContainerRowSecond}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Par</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                  </View>
                  <View style={styles.ASCContainerRowThird}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Score</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>7</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>5</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>4</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>8</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>6</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                  </View>
                  <View style={styles.ASCContainerRowLast}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Putt</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>4</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}

        <TouchableOpacity
          onPress={() => setShowBlue(!showBlue)}
          style={styles.HTCards}
        >
          <View style={styles.HTCLeft}>
            <Text style={styles.HTCDate}>February 29, 2024</Text>
            <Text style={styles.HTCName}>Blue Monster</Text>
          </View>
          <Text style={styles.HTCBold}>102</Text>
        </TouchableOpacity>
        {showBlue && (
          <View style={styles.scoreCardContainer}>
            <View>
              <View style={styles.SCHeader}>
                <Text style={styles.SCHeaderText}>Blue Monster 2/29/2024</Text>
                <TouchableOpacity style={styles.downloadButton}>
                  <Text style={styles.downloadButtonText}>Download</Text>
                  <Image source={download} />
                </TouchableOpacity>
              </View>

              <View style={styles.scoreChart}>
                <View style={styles.scoreChartHeaderContainer}>
                  <View style={styles.scoreChartHLeft}>
                    <Text style={styles.scoreChartHLeftGray}>1 hr 16 min</Text>
                    <Text style={styles.scoreChartHLeftBlack}>6 holes</Text>
                  </View>
                  <Text style={styles.scoreChartHRight}>104</Text>
                </View>

                <View style={styles.ASCContainer}>
                  <View style={styles.ASCContainerRowFirst}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Hole</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>4</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>5</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>6</Text>
                    </View>
                  </View>

                  <View style={styles.ASCContainerRowSecond}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Par</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                  </View>
                  <View style={styles.ASCContainerRowThird}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Score</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>7</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>5</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>4</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>8</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>6</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                  </View>
                  <View style={styles.ASCContainerRowLast}>
                    <View style={styles.ASCLabel}>
                      <Text style={styles.ASCText}>Putt</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>3</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>1</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                    <View style={styles.ASCBorderRight}>
                      <Text style={styles.ASCText}>4</Text>
                    </View>
                    <View style={styles.ASCBorderLast}>
                      <Text style={styles.ASCText}>2</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
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
    backgroundColor: 'white'
  },
  container: {
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backScore: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 80,
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
  historyHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  historyInfo: {
    fontFamily: "Quicksand-Light",
    borderWidth: 1,
    color: "#202020",
    borderColor: "#D3D3D3",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    height: 166,
    lineHeight: 22,
  },
  twelveMonths: {
    fontFamily: "Quicksand-Med",
    fontSize: 18,
    lineHeight: 24,
    marginTop: 35,
    marginBottom: 20,
  },
  HTimeContainer: {
    flexDirection: "column",
    marginBottom: 200,
  },
  HTCards: {
    width: 363,
    height: 72,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
    backgroundColor: "#D3D3D3",
  },
  HTCLeft: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 42,
  },
  HTCDate: {
    color: "#AFAFAF",
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 16,
  },
  HTCName: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 16,
  },
  HTCBold: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 48,
  },
  scoreCardContainer: {
    flexDirection: "column",
    marginBottom: 15,
  },
  SCHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
    backgroundColor: "#e5e5e5",
    width: 361,
    height: 236,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  scoreChartHeaderContainer: {
    height: 62,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scoreChartHLeft: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 38,
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
    height: 138,
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
    borderRightWidth: 0.3,
    borderLeftWidth: 0.3,
    borderColor: "#AFAFAF",
  },
  ASCContainerRowLast: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.3,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderColor: "#AFAFAF",
  },
  ASCLabel: {
    borderRightWidth: 0.3,
    width: 75,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#AFAFAF",
  },
  ASCText: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
  },
  ASCBorderRight: {
    borderRightWidth: 0.3,
    width: 40,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#AFAFAF",
  },
  ASCBorderLast: {
    width: 40,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default History;
