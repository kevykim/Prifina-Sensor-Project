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

import { BarChart, PieChart } from "react-native-gifted-charts";
import { useRoute } from "@react-navigation/native";

import Icony from '../../assets/Misc/Icony.png'

function Track({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();

 
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

  const data = [
    { value: 50, color: "#2FDA74", text: "50%" },
    { value: 10, color: "#1B6E3C", text: "10%" },
    { value: 20, color: "#289956", text: "20%" },
    { value: 20, color: "#15BF59", text: "20%" },
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
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Analyze</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("track")}
            style={{
              backgroundColor: route.name === "track" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "track" ? "white" : "black",
                ...styles.topButtonsText,
              }}
            >
              Track
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("explore")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Explore</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.trackHeader}>Track Score</Text>
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

        <TouchableOpacity style={styles.viewScoreCard}>
          <Text style={styles.viewScoreCardText}>View Scorecard</Text>
        </TouchableOpacity>

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
  backPlay: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 55,
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
  trackHeader: {
    marginTop: 25,
    marginBottom: 10,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
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
    marginBottom: 25
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
  viewScoreCard: {
    backgroundColor: "#2FDA74",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 8,
    marginBottom: 30,
    marginTop: 5,
  },
  viewScoreCardText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 22,
  },
  scoreChart: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    borderColor: "#AFAFAF",
    marginBottom: 15,
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
    backgroundColor: "#1B6E3C",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: 2,
  },
  RSBoxThree: {
    backgroundColor: "#289956",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: 2,
  },
  RSBoxFour: {
    backgroundColor: "#15BF59",
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

export default Track;
