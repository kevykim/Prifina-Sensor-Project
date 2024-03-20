import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useCustomFonts } from "../../utils/CustomFonts";

import Avatar from "../../assets/Misc/Avatar.png";
import updateIcon from "../../assets/Misc/updateIcon.png";
import sunnyIcon from "../../assets/Weather/sunnyIcon.png";
import greenSunny from "../../assets/Weather/greenSunny.png";

import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";

import { BarChart } from "react-native-gifted-charts";

function HomePerformance({ navigation }) {
  const route = useRoute();

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
        <View style={styles.homeHeaderContainerShadow}>
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

        <View style={styles.homeButtonsContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("hometoday");
            }}
            style={styles.HBCards}
          >
            <Image
              source={sunnyIcon}
            />
            <Text
              style={styles.HBCBot}
            >
              Today
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homecalendar");
            }}
            style={styles.HBCards}
          >
            <Text
              style={styles.HBCTop}
            >
              {shortDate}
            </Text>
            <Text
              style={styles.HBCBot}
            >
              Calendar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homemyscore");
            }}
            style={styles.HBCards}
          >
            <Text
              style={styles.HBCTop}
            >
              102
            </Text>
            <Text
              style={styles.HBCBot}
            >
              My Score
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homeperformance");
            }}
            style={{ ...styles.HBCards, width: 80 }}
          >
            <View style={styles.HBCSpan}>
              <Text
                style={{
                  color: route.name === "homeperformance" ? "#2FDA74" : "black",
                  ...styles.HBCTop,
                }}
              >
                10{" "}
              </Text>
              <Text
                style={{
                  color: route.name === "homeperformance" ? "#2FDA74" : "black",
                  ...styles.HBCTopSpan,
                }}
              >
                {" "}
                HCP
              </Text>
            </View>
            <Text
              style={{
                color: route.name === "homeperformance" ? "#2FDA74" : "black",
                ...styles.HBCBot,
              }}
            >
              Performance
            </Text>
          </TouchableOpacity>
        </View>

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
      </View>
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
    marginTop: 50,
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

export default HomePerformance;
