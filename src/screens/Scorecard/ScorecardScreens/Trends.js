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

import { BarChart } from "react-native-gifted-charts";
import { useRoute } from "@react-navigation/native";

import Carousel from "pinar";

function Trends({ navigation }) {
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
        </Carousel>
      </View>

      <View style={{ ...styles.scoreChart, marginBottom: 200 }}>
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
        >
          <View>
            <View style={styles.chartHeaderContainer}>
              <Text style={styles.CHCTopText}>Distance Rate</Text>
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
          <View>
            <View style={styles.chartHeaderContainer}>
              <Text style={styles.CHCTopText}>Distance Rate</Text>
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
          <View>
            <View style={styles.chartHeaderContainer}>
              <Text style={styles.CHCTopText}>Distance Rate</Text>
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
  chartHeaderContainer: {
    position: "absolute",
    left: 50,
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

export default Trends;
