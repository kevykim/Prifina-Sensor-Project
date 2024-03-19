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

import { BarChart, LineChart } from "react-native-gifted-charts";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Carousel from "pinar";

function Trends({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();

  const [carouselRendered, setCarouselRendered] = useState(false);

  const today = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);


   useEffect(() => {
     const timer = setTimeout(() => {
       setCarouselRendered(true);
     }, 100);

     return () => clearTimeout(timer);
   }, []);

  if (!fontsLoaded) {
    return null;
  }

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
    { value: 10, label: "Mo", customDataPoint: customDataPoint },
    { value: 5, label: "Tu" },
    { value: 6, label: "We", customDataPoint: customDataPoint },
    { value: 5, label: "Th" },
    { value: 7, label: "Fr", customDataPoint: customDataPoint },
    { value: 8, label: "Sa" },
    { value: 9, label: "Su", customDataPoint: customDataPoint },
  ];

  const firstChartData = [
    { label: "Fairway Hit Rate", levelAvg: "50%", myAvg: "60%" },
    { label: "Driving Distance", levelAvg: "40%", myAvg: "50%" },
    { label: "Putting Accuracy", levelAvg: "50%", myAvg: "70%" },
    { label: "Bogey Avoidance", levelAvg: "50%", myAvg: "70%" },
  ];

  const secondChartData = [
    { label: "Greens In Regulation", levelAvg: "50%", myAvg: "60%" },
    { label: "Driving Accuracy", levelAvg: "30%", myAvg: "40%" },
    { label: "Eagles and Birdies", levelAvg: "50%", myAvg: "70%" },
    { label: "Strokes Gained", levelAvg: "50%", myAvg: "70%" },
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
            style={{
              backgroundColor: route.name === "trends" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "trends" ? "white" : "black",
                ...styles.topButtonsText,
              }}
            >
              Trends
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("statistics")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Statistics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("history")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>History</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.trendsHeader}>Trends</Text>

        <View style={styles.scoreChart}>
          <View style={styles.chartLine}></View>
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
                  spacing={48}
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
        </View>

        <View style={{ ...styles.scoreChart, marginBottom: 200 }}>
          <View style={styles.chartLine}></View>
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
            {secondChartData.map((item, index) => (
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
                  spacing={48}
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
    borderColor: '#D3D3D3',
    position: 'absolute',
    width: 300,
    bottom: 42,
    left: 30
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
    marginTop: 5,
    lineHeight: 16,
  },
  averageContainer: {
    position: "absolute",
    right: 10,
    top: 27,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
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
});

export default Trends;
