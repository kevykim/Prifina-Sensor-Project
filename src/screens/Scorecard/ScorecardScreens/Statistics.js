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

import { BarChart, PieChart } from "react-native-gifted-charts";
import { useRoute } from "@react-navigation/native";

import Carousel from "pinar";
import chartGreen from "../../../assets/Charts/ChartGreen.png";
import Icony from "../../../assets/Misc/Icony.png";

function Statistics({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();

  const today = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  if (!fontsLoaded) {
    return null;
  }

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
            <View style={styles.CIContainer}>
              <Text style={styles.CHCTopText}>On Green Rate</Text>
              <Text style={styles.CHCBotText}>As of {formattedDate}</Text>
            </View>
            <Image style={styles.chartImage} source={chartGreen} />
          </View>

          <View>
            <View style={styles.CIContainer}>
              <Text style={styles.CHCTopText}>On Green Rate</Text>
              <Text style={styles.CHCBotText}>As of {formattedDate}</Text>
            </View>
            <Image style={styles.chartImage} source={chartGreen} />
          </View>

          <View>
            <View style={styles.CIContainer}>
              <Text style={styles.CHCTopText}>On Green Rate</Text>
              <Text style={styles.CHCBotText}>As of {formattedDate}</Text>
            </View>
            <Image style={styles.chartImage} source={chartGreen} />
          </View>

          <View>
            <View style={styles.CIContainer}>
              <Text style={styles.CHCTopText}>On Green Rate</Text>
              <Text style={styles.CHCBotText}>As of {formattedDate}</Text>
            </View>
            <Image style={styles.chartImage} source={chartGreen} />
          </View>
        </Carousel>
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
          <TouchableOpacity onPress={() => navigation.navigate('history')} style={styles.detailButton}>
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
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0
},
  detailButtonText: {
    color: 'white',
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 12,
  },
});

export default Statistics;
