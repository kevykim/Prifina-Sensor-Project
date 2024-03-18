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
import Putt from '../../../assets/Golf/Putt.jpeg'

import { LineChart } from "react-native-gifted-charts";

import CalibScreen from "../../../utils/calibScreen";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";


function Putting({ navigation }) {
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

 const [showModal, setShowModal] = useState(false);

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
              backgroundColor: route.name === "putting" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "putting" ? "white" : "black",
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

        <Text style={styles.puttHeader}>Putting</Text>
        <Image style={styles.puttImage} source={Putt} />
        <View>
          <Text style={styles.puttInfo}>
            Tuning your swing angle by focusing on stance, posture, and grip
            techniques.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={styles.startPracticeButton}
        >
          <Text style={styles.startPracticeButtonText}>Start Practice</Text>
        </TouchableOpacity>

        {showModal && (
          <CalibScreen
            modalShown={showModal}
            closeModal={setShowModal}
            navigation={navigation}
            navVar={"putttrack"}
          />
        )}

        <Text style={styles.PCHeader}>Progress</Text>
        <View style={styles.PCChart}>
          <View style={styles.chartHeaderContainer}>
            <Text style={styles.CHCTopText}>75% Accuracy</Text>
            <Text style={styles.CHCBotText}>Over 20 shots</Text>
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
  puttHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  puttImage: {
    height: 200,
    width: 361,
    borderRadius: 8,
    marginBottom: 25,
  },
  puttInfo: {
    fontFamily: "Quicksand-Light",
    borderWidth: 1,
    color: "#202020",
    borderColor: "#D3D3D3",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    height: 80,
    lineHeight: 22,
  },
  startPracticeButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 361,
    height: 40,
    backgroundColor: "#2FDA74",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 25,
    marginBottom: 35,
  },
  startPracticeButtonText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 22,
  },
  PCHeader: {
    fontFamily: "Quicksand-Med",
    lineHeight: 24,
    fontSize: 18,
    marginBottom: 20,
  },
  PCChart: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    borderColor: "#AFAFAF",
    marginBottom: 200,
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
});

export default Putting;
