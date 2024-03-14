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

import { BarChart } from "react-native-gifted-charts";

function Scorecard({ navigation }) {
  const fontsLoaded = useCustomFonts();

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
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            style={styles.backHome}
            onPress={() => navigation.navigate("Home")}
          >
            <Image source={leftArrow} />
            <Text
              style={{
                color: "#AFAFAF",
                fontFamily: "Quicksand-SemiBold",
                fontSize: 12,
              }}
            >
              Home
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
          style={styles.topButtons}
        >
          <Text style={styles.topButtonsText}>History</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.scorecardHeader}>Scorecard</Text>

      <View>
        <Text style={styles.scorecardInfo}>
          Welcome to your personalized training hub. Here you can set and
          customize your equipment, practice specific skills and drills, and
          view tutorials catered towards your personal feedback needs.
          Personalized coaching is available 24/7.
        </Text>
      </View>

      <View style={styles.handicapContainer}>
        <Text style={styles.handicapText}>Your Current Handicap: </Text>
        <Text style={styles.handicapTextGreen}>10 over par</Text>
      </View>

      <TouchableOpacity
        style={styles.breakdownButton}
        onPress={() => navigation.navigate("trends")}
      >
        <Text style={styles.breakdownButtonText}>View Breakdown</Text>
      </TouchableOpacity>

      <Text style={styles.progressText}>In progress</Text>
      <View style={styles.scoreChart}>
        <View style={styles.chartHeaderContainer}>
          <Text style={styles.CHCTopText}>Performance Tracking</Text>
          <Text style={styles.CHCBotText}>Score</Text>
        </View>
        <BarChart
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    flexDirection: "column",
    marginTop: 55,
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backHome: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 60,
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
  scorecardHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  scorecardInfo: {
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
  handicapContainer: {
    marginTop: 35,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  handicapText: {
    fontSize: 18,
    fontFamily: "Quicksand-SemiBold",
    lineHeight: 24,
  },
  handicapTextGreen: {
    fontSize: 18,
    fontFamily: "Quicksand-Med",
    lineHeight: 24,
    color: "#2FDA74",
  },
  breakdownButton: {
    width: 361,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#2FDA74",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 35,
  },
  breakdownButtonText: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 22,
    color: "white",
  },
  progressText: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 25,
  },
  scoreChart: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    borderColor: "#AFAFAF",
    marginBottom: 175,
  },
  chartHeaderContainer: {
    position: "absolute",
    top: 15,
    left: 70,
  },
  CHCTopText: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
  },
  CHCBotText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    color: "#AFAFAF",
    lineHeight: 16,
  },
  
});

export default Scorecard;
