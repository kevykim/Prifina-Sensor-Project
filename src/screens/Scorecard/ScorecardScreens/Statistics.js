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

import { LineChart, PieChart } from "react-native-gifted-charts";
import { useRoute } from "@react-navigation/native";

import Carousel from "pinar";
import chartGreen from "../../../assets/Charts/ChartGreen.png";
import Icony from "../../../assets/Misc/Icony.png";

import React, { useEffect, useState } from "react";


function Statistics({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();

  const [carouselRender, setCarouselRendered] = useState(false);

   useEffect(() => {
     const timer = setTimeout(() => {
       setCarouselRendered(true);
     }, 100);

     return () => clearTimeout(timer);
   }, []);

  const today = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  if (!fontsLoaded) {
    return null;
  }

  const data = [
    { value: 50, color: "#2FDA74", text: "50%" },
    { value: 10, color: "#2b6038", text: "10%" },
    { value: 20, color: "#1d1d1d", text: "20%" },
    { value: 20, color: "#717171", text: "20%" },
  ];

  const customDataPoint = () => {
    return (
      <View
        style={{
          width: 8,
          height: 8,
          backgroundColor: "white",
          borderWidth: 1,
          borderRadius: 25,
          borderColor: "#358DD1",
          marginBottom: 5,
        }}
      />
    );
  };

  const barData = [
    { value: 10, label: "1", customDataPoint: customDataPoint },
    { value: 5, label: "2" },
    { value: 6, label: "3", customDataPoint: customDataPoint },
    { value: 5, label: "4" },
    { value: 7, label: "5", customDataPoint: customDataPoint },
    { value: 8, label: "6" },
    { value: 9, label: "7", customDataPoint: customDataPoint },
    { value: 3, label: "8" },
    { value: 2, label: "9", customDataPoint: customDataPoint },
    { value: 7, label: "10" },
  ];

  const firstChartData = [
    { label: "Fairway Hit Rate", levelAvg: "50%", myAvg: "60%" },
    { label: "Driving Distance", levelAvg: "40%", myAvg: "50%" },
    { label: "Putting Accuracy", levelAvg: "50%", myAvg: "70%" },
  ];

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
            <Text
              style={{
                ...styles.topButtonsText,
              }}
            >
              Trends
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("statistics")}
            style={{
              backgroundColor:
                route.name === "statistics" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "statistics" ? "white" : "black",
                ...styles.topButtonsText,
              }}
            >
              Statistics
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("history")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>History</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.trendsHeader}>Statistics</Text>

        <View style={styles.scoreChart}>
          <View style={styles.chartLine}></View>
        {carouselRender && (
          <Carousel
            showsControls={false}
            height={270}
            dotsContainerStyle={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            activeDotStyle={{
              backgroundColor: "#2FDA74",
              width: 5,
              height: 5,
              borderRadius: 100,
              marginLeft: 2,
              marginRight: 2,
              marginTop: 2,
              marginBottom: 2,
            }}
            dotStyle={{
              backgroundColor: "#D3D3D3",
              borderRadius: 100,
              width: 5,
              height: 5,
              marginLeft: 2,
              marginRight: 2,
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            <View>
              <View style={styles.CIContainer}>
                <Text style={styles.CHCTopText}>On Green Rate</Text>
                <Text style={styles.CHCBotText}>As of {formattedDate}</Text>
              </View>
              <Image style={styles.chartImage} source={chartGreen} />
            </View>

            {firstChartData.map((item, index) => (
              <View key={index}>
                <View style={styles.chartHeaderContainer}>
                  <Text style={styles.CHCTopText}>{item.label}</Text>
                  <Text style={styles.CHCBotText}>As of {formattedDate}</Text>
                </View>
                <View style={styles.averageContainer}>
                  <View style={styles.levelAvg}>
                    <Text style={styles.levelAvgText}>Level Average</Text>
                    <Text style={styles.levelAvgPerc}>{item.levelAvg}</Text>
                  </View>
                  <View style={styles.myAvg}>
                    <Text style={styles.myAvgText}>My Average</Text>
                    <Text style={styles.myAvgPerc}>{item.myAvg}</Text>
                  </View>
                </View>
                <LineChart
                  width={305}
                  spacing={33}
                  data={barData}
                  yAxisThickness={0}
                  xAxisThickness={0}
                  initialSpacing={7}
                  endSpacing={7}
                  adjustToWidth
                  scrollAnimation={false}
                  areaChart
                  curved
                  dataPointsColor="#358DD1"
                  color="#358DD1"
                  startFillColor="#2FDA74"
                  xAxisColor="lightgray"
                  hideYAxisText
                  xAxisLabelTextStyle={{
                    color: "#AFAFAF",
                    fontFamily: "Quicksand-SemiBold",
                  }}
                  hideRules
                  showReferenceLine1
                  referenceLine1Position={3}
                  referenceLine1Config={{
                    color: "#AFAFAF",
                    dashWidth: 1,
                    dashGap: 10,
                    width: 290,
                  }}
                  showReferenceLine2
                  referenceLine2Position={6}
                  referenceLine2Config={{
                    color: "#AFAFAF",
                    dashWidth: 1,
                    dashGap: 10,
                    width: 290,
                  }}
                  showReferenceLine3
                  referenceLine3Position={9}
                  referenceLine3Config={{
                    color: "#AFAFAF",
                    dashWidth: 1,
                    dashGap: 10,
                    width: 290,
                  }}
                />
              </View>
            ))}
          </Carousel>
        )}
        </View>


        <View style={{ ...styles.scoreChart, marginBottom: 200 }}>
          <View>
            <Image style={styles.iconyImage} source={Icony} />
            <PieChart
              showText
              textColor="white"
              donut
              innerRadius={60}
              data={data}
            />
            <View style={styles.rightStatsContainer}>
              <View style={styles.RSBoxContainer}>
                <View style={styles.RSBoxOne}>
                  <Text style={styles.RSBoxText}>50%</Text>
                </View>
                <Text style={{ ...styles.RSTextLabel, marginRight: 6 }}>
                  Buddy
                </Text>
              </View>
              <View style={styles.RSBoxContainer}>
                <View style={styles.RSBoxTwo}>
                  <Text style={styles.RSBoxText}>10%</Text>
                </View>
                <Text style={{ ...styles.RSTextLabel, marginRight: 22 }}>
                  Par
                </Text>
              </View>
              <View style={styles.RSBoxContainer}>
                <View style={styles.RSBoxThree}>
                  <Text style={styles.RSBoxText}>20%</Text>
                </View>
                <Text style={{ ...styles.RSTextLabel, marginRight: 6 }}>
                  Bogey
                </Text>
              </View>
              <View style={styles.RSBoxContainer}>
                <View style={styles.RSBoxFour}>
                  <Text style={styles.RSBoxText}>20%</Text>
                </View>
                <Text style={styles.RSTextLabel}>Double Bougey</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("history")}
              style={styles.detailButton}
            >
              <Text style={styles.detailButtonText}>View Details</Text>
            </TouchableOpacity>
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
  trendsHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  scoreChart: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    borderColor: "#AFAFAF",
    marginBottom: 15,
  },
  chartLine: {
    borderBottomWidth: 0.7,
    borderColor: "#D3D3D3",
    position: "absolute",
    width: 300,
    bottom: 42,
    left: 30,
  },
  chartHeaderContainer: {
    position: "absolute",
    left: 10,
  },
  CHCTopText: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 22,
  },
  CHCBotText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    color: "#AFAFAF",
    lineHeight: 16,
    marginTop: 5,
  },
  averageContainer: {
    position: "absolute",
    right: 10,
    top: 27,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  levelAvg: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  levelAvgText: {
    color: "#AFAFAF",
    fontSize: 12,
    fontFamily: "Quicksand-Reg",
  },
  levelAvgPerc: {
    color: "#AFAFAF",
    fontSize: 24,
    fontFamily: "Quicksand-Bold",
  },
  myAvg: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  myAvgText: {
    fontSize: 12,
    fontFamily: "Quicksand-Reg",
  },
  myAvgPerc: {
    fontSize: 24,
    fontFamily: "Quicksand-Bold",
  },
  chartImage: {
    top: 25,
  },
  CIContainer: {
    position: "absolute",
  },
  iconyImage: {
    position: "absolute",
    left: 95,
    top: 95,
    zIndex: 5,
    width: 50,
    height: 50,
  },
  rightStatsContainer: {
    position: "absolute",
    right: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: 115,
  },
  RSBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 65,
  },
  RSBoxOne: {
    backgroundColor: "#2FDA74",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: 2,
  },
  RSBoxTwo: {
    backgroundColor: "#2b6038",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: 2,
  },
  RSBoxThree: {
    backgroundColor: "#1d1d1d",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: 2,
  },
  RSBoxFour: {
    backgroundColor: "#717171",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: 2,
  },
  RSBoxText: {
    color: "white",
    fontSize: 10,
    fontFamily: "Quicksand-Med",
  },
  RSTextLabel: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 11,
  },
  detailButton: {
    backgroundColor: "#358DD1",
    height: 25,
    width: 86,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  detailButtonText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
  },
});

export default Statistics;
