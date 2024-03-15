import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import { useCustomFonts } from "../utils/CustomFonts";

import { useState } from "react";

import Avatar from '../assets/Misc/Avatar.png'
import updateIcon from '../assets/Misc/updateIcon.png'
import sunnyIcon from '../assets/Weather/sunnyIcon.png'
import greenSunny from '../assets/Weather/greenSunny.png'
import weatherPlaceHolder from '../assets/Weather/weatherPlaceHolder.png'

import GreenStar from '../assets/Misc/GreenStar.png'
import GrayStar from '../assets/Misc/GrayStar.png'
import download from '../assets/Misc/download.png'

import NHG from '../assets/Locations/NHG.png'
import SB from '../assets/Locations/SB.png'

import { BarChart } from "react-native-gifted-charts";
import { LinearGradient } from "expo-linear-gradient";


function Home() {
  
  const [today, setToday] = useState(true);
  const [calendar, setCalendar] = useState(false);
  const [myScore, setMyScore] = useState(false);
  const [performance, setPerformance] = useState(false);

  const fontsLoaded = useCustomFonts();

  const newDay = new Date();
  const month = newDay.getMonth() + 1; 
  const day = newDay.getDate();
  const shortDate = `${month}.${day}`;


   const barData = [
     { value: 1 },
     { value: 4 },
     { value: 3 },
     { value: 10 },
     { value: 3 },
     { value: 2, frontColor: "#2FDA74" },
     { value: 6, frontColor: "#2FDA74" },
   ];

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        {/* <Text>Home</Text> */}
        <View
          style={styles.homeHeaderContainerShadow}
        >
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
      </View>

      <View style={styles.homeButtonsContainer}>
        <TouchableOpacity
          onPress={() => {
            setToday(true);
            setCalendar(false);
            setMyScore(false);
            setPerformance(false);
          }}
          style={styles.HBCards}
        >
          <Image source={today ? greenSunny : sunnyIcon} />
          <Text
            style={{ color: today ? "#2FDA74" : "black", ...styles.HBCBot }}
          >
            Today
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setToday(false);
            setCalendar(true);
            setMyScore(false);
            setPerformance(false);
          }}
          style={styles.HBCards}
        >
          <Text
            style={{ color: calendar ? "#2FDA74" : "black", ...styles.HBCTop }}
          >
            {shortDate}
          </Text>
          <Text
            style={{ color: calendar ? "#2FDA74" : "black", ...styles.HBCBot }}
          >
            Calendar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setToday(false);
            setCalendar(false);
            setMyScore(true);
            setPerformance(false);
          }}
          style={styles.HBCards}
        >
          <Text
            style={{ color: myScore ? "#2FDA74" : "black", ...styles.HBCTop }}
          >
            102
          </Text>
          <Text
            style={{ color: myScore ? "#2FDA74" : "black", ...styles.HBCBot }}
          >
            My Score
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setToday(false);
            setCalendar(false);
            setMyScore(false);
            setPerformance(true);
          }}
          style={{ ...styles.HBCards, width: 80 }}
        >
          <View style={styles.HBCSpan}>
            <Text
              style={{
                color: performance ? "#2FDA74" : "black",
                ...styles.HBCTop,
              }}
            >
              10{" "}
            </Text>
            <Text
              style={{
                color: performance ? "#2FDA74" : "black",
                ...styles.HBCTopSpan,
              }}
            >
              {" "}
              HCP
            </Text>
          </View>
          <Text
            style={{
              color: performance ? "#2FDA74" : "black",
              ...styles.HBCBot,
            }}
          >
            Performance
          </Text>
        </TouchableOpacity>
      </View>

      {today && (
        <View>
          <Image source={weatherPlaceHolder} />
        </View>
      )}

      {calendar && (
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
      )}
      {myScore && (
        <View>
          <View>
            <View style={styles.SCHeader}>
              <Text style={styles.SCHeaderText}>South West 3/23/24</Text>
              <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>Download</Text>
                <Image source={download} />
              </TouchableOpacity>
            </View>

            <View style={styles.scoreChart}>
              <View style={styles.scoreChartHeaderContainer}>
                <View style={styles.scoreChartHLeft}>
                  <Text style={styles.scoreChartHLeftGray}>5 hr 16 min</Text>
                  <Text style={styles.scoreChartHLeftBlack}>Front 9</Text>
                </View>
                <Text style={styles.scoreChartHRight}>108</Text>
              </View>

              <View style={styles.ASCContainer}>
                <View style={styles.ASCContainerRowFirst}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Hole</Text>
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
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>6</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>7</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>8</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>9</Text>
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

              <View style={{ ...styles.ASCContainer, marginBottom: 3 }}>
                <View style={styles.ASCContainerRowFirst}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Hole</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>10</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>11</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>12</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>13</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>14</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>15</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>16</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>17</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>18</Text>
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
      )}
      {performance && (
        <View>
          <Text style={styles.performanceTHeader}>Performance Tracking</Text>
          <View style={styles.performanceBarChart}>
            <View style={styles.PTextBox}>
              <Text style={styles.PTextTop}>Performance Tracking</Text>
              <Text style={styles.PTextBot}>Score</Text>
            </View>
            <BarChart
              data={barData}
              frontColor={"#358DD1"}
              width={300}
              yAxisThickness={0}
              xAxisThickness={1}
              barWidth={30}
              maxValue={12}
              hideYAxisText
              xAxisColor={"#D3D3D3"}
              hideRules
              showReferenceLine1
              referenceLine1Position={3}
              referenceLine1Config={{
                color: "#AFAFAF",
                dashWidth: 1,
                dashGap: 10,
              }}
              showReferenceLine2
              referenceLine2Position={6}
              referenceLine2Config={{
                color: "#AFAFAF",
                dashWidth: 1,
                dashGap: 10,
              }}
              showReferenceLine3
              referenceLine3Position={9}
              referenceLine3Config={{
                color: "#AFAFAF",
                dashWidth: 1,
                dashGap: 10,
              }}
            />
          </View>

          <LinearGradient
            colors={["#358DD1", "#FFFFFF"]}
            style={styles.personalBestContainer}
          >
            <Text style={styles.personalBestText}>
              Congrats, new personal best!
            </Text>
          </LinearGradient>
        </View>
      )}
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
    marginTop: 55,
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
    height: 323,
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
    height: 108,
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

  performanceTHeader: {
    marginTop: 20,
    fontFamily: "Quicksand-Med",
    fontSize: 20,
    lineHeight: 24,
  },
  performanceBarChart: {
    flex: 1,
    borderWidth: 1,
    height: 250,
    width: 361,
    borderRadius: 6,
    borderColor: "#D3D3D3",
    padding: 12,
    marginTop: 15,
  },
  PTextBox: {
    position: "absolute",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 40,
    top: 15,
    left: 10,
  },
  PTextTop: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 22,
  },
  PTextBot: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 16,
    color: "#AFAFAF",
  },
  personalBestContainer: {
    backgroundColor: "#358DD1",
    marginTop: 15,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  personalBestText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 20,
  },
});

export default Home;
