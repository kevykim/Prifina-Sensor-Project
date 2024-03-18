



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


import { LineChart } from "react-native-gifted-charts";

import { useRoute } from "@react-navigation/native";

import Consistency from '../../../assets/Results/Consistency.png';

function ArcResult({ navigation }) {
  const route = useRoute();

  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  const data = [
    { value: 45 },
    { value: 30 },
    { value: 26 },
    { value: 40 },
    { value: 49 },
    { value: 51 },
    { value: 60 },
    { value: 51 },
    { value: 49 },
    { value: 49 },
  ];


  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={styles.backPractice}
              onPress={() => navigation.navigate("practice")}
            >
              <Image source={leftArrow} />
              <Text
                style={{
                  color: "#AFAFAF",
                  fontFamily: "Quicksand-SemiBold",
                  fontSize: 12,
                }}
              >
                Practice
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
            onPress={() => navigation.navigate("equipment")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Equipment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor:
                route.name === "arcresult" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "arcresult" ? "white" : "black",
                ...styles.topButtonsText,
              }}
            >
              Practice
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("tutorials")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Tutorials</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.resultHeader}>Results</Text>

        <Text style={styles.ARHeader}>Arc Adjustment - 100 feet</Text>
        <View style={styles.ARChart}>
          <View style={styles.chartHeaderContainer}>
            <Text style={styles.CHCTopText}>75% Accuracy</Text>
            <Text style={styles.CHCBotText}>Over 10 shots</Text>
          </View>

          <LineChart
            width={295}
            maxValue={100}
            hideRules
            areaChart
            curved
            noOfSections={5}
            data={data}
            yAxisThickness={0}
            xAxisThickness={1}
            xAxisColor={"#D3D3D3"}
            hideDataPoints
            hideYAxisText
            xAxisLabelTexts={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            xAxisLabelTextStyle={{
              color: "#AFAFAF",
              fontFamily: "Quicksand-SemiBold",
            }}
            startFillColor="#2FDA74"
            showReferenceLine1
            referenceLine1Position={30}
            referenceLine1Config={{
              color: "#AFAFAF",
              dashWidth: 1,
              dashGap: 10,
            }}
            showReferenceLine2
            referenceLine2Position={60}
            referenceLine2Config={{
              color: "#AFAFAF",
              dashWidth: 1,
              dashGap: 10,
            }}
            showReferenceLine3
            referenceLine3Position={80}
            referenceLine3Config={{
              color: "#AFAFAF",
              dashWidth: 1,
              dashGap: 10,
            }}
          />
        </View>

        <View style={styles.congratsContainer}>
          <Text style={styles.congratsText}>Congrats, new personal best!</Text>
        </View>

        <Text style={styles.feedbackHeader}>Feedback</Text>

        <View style={styles.FBContainer}>
          <View style={styles.FBCards}>
            <View
              style={{
                width: 88,
                height: 88,
                backgroundColor: "gray",
                borderRadius: 8,
              }}
            >
              <Image style={{ opacity: 0.9 }} source={Consistency} />
            </View>
            <View style={styles.FBLeft}>
              <View style={styles.FBTextContainer}>
                <Text style={styles.FBTHeader}>Consistency</Text>
                <Text style={styles.FBTSecond}>Current goal: 80%</Text>
                <Text style={styles.FBTThird}>Personal best: 75%</Text>
                <Text style={styles.FBTFourth}>User average</Text>
              </View>
              <TouchableOpacity style={styles.FBRight}>
                <Text style={styles.FBCoach}>Coach's Advice</Text>
              </TouchableOpacity>
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
  backPractice: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 70,
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
    fontFamily: "Quicksand-Med",
    fontSize: 12,
  },
  resultHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  ARHeader: {
    fontFamily: "Quicksand-Med",
    lineHeight: 24,
    fontSize: 18,
    marginBottom: 20,
  },
  ARChart: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    borderColor: "#D3D3D3",
    marginBottom: 15,
  },

  chartHeaderContainer: {
    position: "absolute",
    left: 10,
    top: 10,
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

  congratsContainer: {
    height: 80,
    width: 360,
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: "#358DD1",
    justifyContent: "center",
    alignItems: "center",
  },
  congratsText: {
    fontFamily: "Quicksand-Med",
    fontSize: 12,
    textAlign: "center",
    color: "white",
  },
  feedbackHeader: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 10,
  },
  FBContainer: {
    flexDirection: "column",
    marginBottom: 200,
  },
  FBCards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  FBTextContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  FBTHeader: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 20,
  },
  FBTSecond: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 20,
    color: "#AFAFAF",
  },
  FBTThird: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 20,
    color: "#AFAFAF",
  },
  FBTFourth: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 20,
    color: "#AFAFAF",
  },
  FBLeft: {
    flexDirection: "row",
    width: 259,
    justifyContent: "space-between",
  },
  FBRight: {
    backgroundColor: "#2FDA74",
    width: 102,
    height: 24,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  FBCoach: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    lineHeight: 16,
    color: "white",
  },
});

export default ArcResult;
