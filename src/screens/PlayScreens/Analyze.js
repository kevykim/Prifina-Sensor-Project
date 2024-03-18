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
import righty from '../../assets/Misc/righty.png';

import { LineChart } from "react-native-gifted-charts";
import { useRoute } from "@react-navigation/native";

import Carousel from "pinar";

function Analyze({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();

  const today = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  if (!fontsLoaded) {
    return null;
  }

  const barData = [
    { value: 10, label: "M" },
    { value: 5, label: "T" },
    { value: 6, label: "W" },
    { value: 5, label: "T" },
    { value: 7, label: "F" },
    { value: 8, label: "S", frontColor: "#2FDA74" },
    { value: 9, label: "S", frontColor: "#2FDA74" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={styles.backPlay}
              onPress={() => navigation.navigate("play")}
            >
              <Image source={leftArrow} />
              <Text
                style={{
                  color: "#AFAFAF",
                  fontFamily: "Quicksand-SemiBold",
                  fontSize: 12,
                }}
              >
                Play
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
            style={{
              backgroundColor: route.name === "analyze" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "analyze" ? "white" : "black",
                ...styles.topButtonsText,
              }}
            >
              Analyze
            </Text>
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

        <Text style={styles.analyzeHeader}>Analyze</Text>

        <TouchableOpacity style={styles.swingAButton}>
          <Text style={styles.swingAButtonText}>Start Swing Analysis</Text>
        </TouchableOpacity>

        <View style={styles.currInfoContainer}>
            <View style={styles.currInfoLeft}>
          <Text style={styles.currInfoLeftText}>Current Handicap: </Text>
          <Text style={styles.currInfoLeftSpan}>10 over par</Text>
            </View>
            <TouchableOpacity style={styles.breakDownButton}>
                <Text style={styles.breakDownButtonText}>Breakdown</Text>
                <Image source={righty}/>
            </TouchableOpacity>
        </View>
        <View style={styles.scoreChart}>
          <Carousel
            showsControls={false}
            height={240}
            dotsContainerStyle={{
              position: "absolute",
              bottom: -10,
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
              <View style={styles.chartHeaderContainer}>
                <Text style={styles.CHCTopText}>Fairway Hit Rate</Text>
                <Text style={styles.CHCBotText}>As of {formattedDate}</Text>
              </View>
              <View style={styles.averageContainer}>
                <View style={styles.levelAvg}>
                  <Text style={styles.levelAvgText}>Level Average</Text>
                  <Text style={styles.levelAvgPerc}>50%</Text>
                </View>
                <View style={styles.myAvg}>
                  <Text style={styles.myAvgText}>My Average</Text>
                  <Text style={styles.myAvgPerc}>60%</Text>
                </View>
              </View>
              <LineChart
                width={290}
                hideRules
                areaChart
                curved
                color="blue"
                startFillColor="#2FDA74"
                data={barData}
                frontColor={"#307D87"}
                hideYAxisText
                yAxisThickness={0}
                xAxisThickness={0}
                xAxisLabelTextStyle={{
                  color: "#AFAFAF",
                  fontFamily: "Quicksand-SemiBold",
                }}
              />
            </View>
            <View>
              <View style={styles.chartHeaderContainer}>
                <Text style={styles.CHCTopText}>Fairway Hit Rate</Text>
                <Text style={styles.CHCBotText}>As of {formattedDate}</Text>
              </View>
              <View style={styles.averageContainer}>
                <View style={styles.levelAvg}>
                  <Text style={styles.levelAvgText}>Level Average</Text>
                  <Text style={styles.levelAvgPerc}>50%</Text>
                </View>
                <View style={styles.myAvg}>
                  <Text style={styles.myAvgText}>My Average</Text>
                  <Text style={styles.myAvgPerc}>60%</Text>
                </View>
              </View>
              <LineChart
                width={290}
                hideRules
                noOfSections={5}
                data={barData}
                frontColor={"#307D87"}
                yAxisColor="lightgray"
                xAxisColor="lightgray"
                yAxisTextStyle={{
                  color: "#AFAFAF",
                  fontFamily: "Quicksand-SemiBold",
                }}
                xAxisLabelTextStyle={{
                  color: "#AFAFAF",
                  fontFamily: "Quicksand-SemiBold",
                }}
              />
            </View>
            <View>
              <View style={styles.chartHeaderContainer}>
                <Text style={styles.CHCTopText}>Fairway Hit Rate</Text>
                <Text style={styles.CHCBotText}>As of {formattedDate}</Text>
              </View>
              <View style={styles.averageContainer}>
                <View style={styles.levelAvg}>
                  <Text style={styles.levelAvgText}>Level Average</Text>
                  <Text style={styles.levelAvgPerc}>50%</Text>
                </View>
                <View style={styles.myAvg}>
                  <Text style={styles.myAvgText}>My Average</Text>
                  <Text style={styles.myAvgPerc}>60%</Text>
                </View>
              </View>
              <LineChart
                width={290}
                hideRules
                noOfSections={5}
                data={barData}
                frontColor={"#307D87"}
                yAxisColor="lightgray"
                xAxisColor="lightgray"
                yAxisTextStyle={{
                  color: "#AFAFAF",
                  fontFamily: "Quicksand-SemiBold",
                }}
                xAxisLabelTextStyle={{
                  color: "#AFAFAF",
                  fontFamily: "Quicksand-SemiBold",
                }}
              />
            </View>
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
    backgroundColor: "white",
  },
  container: {
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backPlay: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 48,
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
  analyzeHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  swingAButton: {
    height: 40,
    borderRadius: 8,
    backgroundColor: "#2FDA74",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  swingAButtonText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 22,
  },
  currInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  currInfoLeft: {
    flexDirection: "row",
  },
  currInfoLeftText: {
    fontFamily: "Quicksand-Med",
    fontSize: 18,
    lineHeight: 24,
  },
  currInfoLeftSpan: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 18,
    lineHeight: 24,
    color: "#2FDA74",
  },
  breakDownButton: {
    backgroundColor: "#2FDA74",
    width: 91,
    height: 22,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 3,
    paddingHorizontal: 8,
    paddingBottom: 3,
  },
  breakDownButtonText: {
    color: 'white',
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 12
  },
  scoreChart: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    borderColor: "#AFAFAF",
    marginBottom: 15,
  },
  chartHeaderContainer: {
    position: "absolute",
    left: 15,
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
  },
  averageContainer: {
    position: "absolute",
    right: 0,
    top: 55,
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
});

export default Analyze;
