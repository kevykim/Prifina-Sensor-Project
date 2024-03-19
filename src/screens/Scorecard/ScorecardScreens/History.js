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
  newDate.setDate(newDate.getDate() - 25);

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
  const [showPine, setShowPine] = useState(false);
  const [showOak, setShowOak] = useState(false);

   const nhData = [
     { label: "Hole", values: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
     { label: "Handicap", values: ["18", "13", "14", "10", "11", "17", "15", "12", "16"] },
     { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
     { label: "Score", values: ["+4", "+3", "+2", "+1", "+5", "+5", "+3", "+2", "+4"] },
     { label: "Hole", values: ["10", "11", "12", "13", "14", "15", "16", "17", "18"] },
     { label: "Handicap", values: ["9", "7", "3", "6", "5", "4", "2", "1", "8"] },
     { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
     { label: "Score", values: ["+4", "+4", "+3", "+3", "+4", "+3", "+5", "+6", "+5"] },
   ];

   const swData = [
  { label: "Hole", values: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
  { label: "Handicap", values: ["13", "8", "9", "14", "18", "17", "11", "16", "15"] },
  { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
  { label: "Score", values: ["+2", "+3", "+2", "+1", "+5", "+4", "+2", "+3", "+4"] },
  { label: "Hole", values: ["10", "11", "12", "13", "14", "15", "16", "17", "18"] },
  { label: "Handicap", values: ["10", "6", "7", "12", "17", "16", "8", "15", "14"] },
  { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
  { label: "Score", values: ["+3", "+4", "+2", "+2", "+3", "+5", "+3", "+2", "+4"] },
];

const vaData = [
  { label: "Hole", values: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
  { label: "Handicap", values: ["15", "10", "11", "18", "17", "16", "12", "13", "14"] },
  { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
  { label: "Score", values: ["+3", "+2", "+1", "+1", "+5", "+4", "+2", "+3", "+3"] },
  { label: "Hole", values: ["10", "11", "12", "13", "14", "15", "16", "17", "18"] },
  { label: "Handicap", values: ["8", "6", "5", "4", "13", "12", "7", "11", "9"] },
  { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
  { label: "Score", values: ["+3", "+4", "+2", "+2", "+3", "+4", "+3", "+2", "+4"] },
];

const pineData = [
  { label: "Hole", values: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
  { label: "Handicap", values: ["14", "11", "12", "17", "16", "15", "10", "13", "18"] },
  { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
  { label: "Score", values: ["+1", "+3", "+2", "+2", "+4", "+3", "+1", "+2", "+3"] },
  { label: "Hole", values: ["10", "11", "12", "13", "14", "15", "16", "17", "18"] },
  { label: "Handicap", values: ["9", "7", "6", "12", "11", "10", "5", "8", "4"] },
  { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
  { label: "Score", values: ["+2", "+4", "+3", "+3", "+2", "+4", "+2", "+3", "+4"] },
];

const oakData = [
  { label: "Hole", values: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
  { label: "Handicap", values: ["14", "11", "12", "17", "16", "15", "10", "13", "18"] },
  { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
  { label: "Score", values: ["+1", "+3", "+2", "+2", "+6", "+3", "+4", "+2", "+3"] },
  { label: "Hole", values: ["10", "11", "12", "13", "14", "15", "16", "17", "18"] },
  { label: "Handicap", values: ["9", "7", "6", "12", "11", "10", "5", "8", "4"] },
  { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
  { label: "Score", values: ["+5", "+4", "+3", "+1", "+3", "+4", "+5", "+3", "+4"] },
];

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

            <Text style={styles.HTCBold}>63</Text>
          </TouchableOpacity>
          {showNorth && (
            <View style={styles.scoreCardContainer}>
              <View>
                <View style={styles.SCHeader}>
                  <Text style={styles.SCHeaderText}>
                    North Hill {shortToday}
                  </Text>
                  <TouchableOpacity style={styles.downloadButton}>
                    <Text style={styles.downloadButtonText}>Download</Text>
                    <Image source={download} />
                  </TouchableOpacity>
                </View>

                <View style={styles.scoreChart}>
                  <View style={styles.scoreChartHeaderContainer}>
                    <View style={styles.scoreChartHLeft}>
                      <Text style={styles.scoreChartHLeftGray}>
                        5 hr 16 min
                      </Text>
                      <Text style={styles.scoreChartHLeftBlack}>18 Holes</Text>
                    </View>
                    <Text style={styles.scoreChartHRight}>63</Text>
                  </View>
                  {nhData.map((row, index) => (
                    <View
                      key={index}
                      style={
                        index === nhData.length - 5
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
          )}

          <TouchableOpacity
            onPress={() => setShowSouth(!showSouth)}
            style={styles.HTCards}
          >
            <View style={styles.HTCLeft}>
              <Text style={styles.HTCDate}>{formattednewDate}</Text>
              <Text style={styles.HTCName}>South West</Text>
            </View>

            <Text style={styles.HTCBold}>100</Text>
          </TouchableOpacity>
          {showSouth && (
            <View style={styles.scoreCardContainer}>
              <View>
                <View style={styles.SCHeader}>
                  <Text style={styles.SCHeaderText}>
                    South West {shortnewDate}
                  </Text>
                  <TouchableOpacity style={styles.downloadButton}>
                    <Text style={styles.downloadButtonText}>Download</Text>
                    <Image source={download} />
                  </TouchableOpacity>
                </View>

                <View style={styles.scoreChart}>
                  <View style={styles.scoreChartHeaderContainer}>
                    <View style={styles.scoreChartHLeft}>
                      <Text style={styles.scoreChartHLeftGray}>
                        8 hr 16 min
                      </Text>
                      <Text style={styles.scoreChartHLeftBlack}>18 holes</Text>
                    </View>
                    <Text style={styles.scoreChartHRight}>100</Text>
                  </View>

                  {swData.map((row, index) => (
                    <View
                      key={index}
                      style={
                        index === swData.length - 5
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
                  <Text style={styles.SCHeaderText}>
                    Ventura Acres 1/14/2024
                  </Text>
                  <TouchableOpacity style={styles.downloadButton}>
                    <Text style={styles.downloadButtonText}>Download</Text>
                    <Image source={download} />
                  </TouchableOpacity>
                </View>

                <View style={styles.scoreChart}>
                  <View style={styles.scoreChartHeaderContainer}>
                    <View style={styles.scoreChartHLeft}>
                      <Text style={styles.scoreChartHLeftGray}>
                        6 hr 16 min
                      </Text>
                      <Text style={styles.scoreChartHLeftBlack}>18 holes</Text>
                    </View>
                    <Text style={styles.scoreChartHRight}>93</Text>
                  </View>
                  {vaData.map((row, index) => (
                    <View
                      key={index}
                      style={
                        index === vaData.length - 5
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
          )}

          <TouchableOpacity
            onPress={() => setShowPine(!showPine)}
            style={styles.HTCards}
          >
            <View style={styles.HTCLeft}>
              <Text style={styles.HTCDate}>December 15, 2023</Text>
              <Text style={styles.HTCName}>Pine Ridge</Text>
            </View>

            <Text style={styles.HTCBold}>96</Text>
          </TouchableOpacity>
          {showPine && (
            <View style={styles.scoreCardContainer}>
              <View>
                <View style={styles.SCHeader}>
                  <Text style={styles.SCHeaderText}>
                    Pine Ridge 12/15/2023
                  </Text>
                  <TouchableOpacity style={styles.downloadButton}>
                    <Text style={styles.downloadButtonText}>Download</Text>
                    <Image source={download} />
                  </TouchableOpacity>
                </View>

                <View style={styles.scoreChart}>
                  <View style={styles.scoreChartHeaderContainer}>
                    <View style={styles.scoreChartHLeft}>
                      <Text style={styles.scoreChartHLeftGray}>
                        7 hr 16 min
                      </Text>
                      <Text style={styles.scoreChartHLeftBlack}>18 holes</Text>
                    </View>
                    <Text style={styles.scoreChartHRight}>96</Text>
                  </View>
                  {pineData.map((row, index) => (
                    <View
                      key={index}
                      style={
                        index === vaData.length - 5
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
          )}

          <TouchableOpacity
            onPress={() => setShowOak(!showOak)}
            style={styles.HTCards}
          >
            <View style={styles.HTCLeft}>
              <Text style={styles.HTCDate}>November 14, 2023</Text>
              <Text style={styles.HTCName}>Oakwood Clubs</Text>
            </View>

            <Text style={styles.HTCBold}>83</Text>
          </TouchableOpacity>
          {showOak && (
            <View style={styles.scoreCardContainer}>
              <View>
                <View style={styles.SCHeader}>
                  <Text style={styles.SCHeaderText}>
                    Oakwood Clubs 11/14/2023
                  </Text>
                  <TouchableOpacity style={styles.downloadButton}>
                    <Text style={styles.downloadButtonText}>Download</Text>
                    <Image source={download} />
                  </TouchableOpacity>
                </View>

                <View style={styles.scoreChart}>
                  <View style={styles.scoreChartHeaderContainer}>
                    <View style={styles.scoreChartHLeft}>
                      <Text style={styles.scoreChartHLeftGray}>
                        6 hr 16 min
                      </Text>
                      <Text style={styles.scoreChartHLeftBlack}>18 holes</Text>
                    </View>
                    <Text style={styles.scoreChartHRight}>83</Text>
                  </View>
                  {oakData.map((row, index) => (
                    <View
                      key={index}
                      style={
                        index === vaData.length - 5
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
    backgroundColor: "white",
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
    width: 81,
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
    marginBottom: 125,
  },
  HTCards: {
    width: 363,
    height: 72,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
    backgroundColor: "#F1F1F1",
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
    alignItems: "center",
    borderColor: "#AFAFAF",
  },
  ASCText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
  },
  ASCTextBold : {
    fontFamily: "Quicksand-SemiBold",
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
    marginTop: 17
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

export default History;
