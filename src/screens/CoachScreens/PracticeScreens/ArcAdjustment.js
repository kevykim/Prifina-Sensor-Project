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
import Arc from '../../../assets/Golf/Arc.png'

import { LineChart } from "react-native-gifted-charts";


import { useRoute } from "@react-navigation/native";

import CalibScreen from "../../../utils/calibScreen";
import { useState } from "react";

function ArcAdjustment({ navigation }) {
  const route = useRoute();

  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

 const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }, {value : 49}, {value: 51}, {value: 60}];

 const [showModal, setShowModal] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            style={styles.backTraining}
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
              route.name === "arcadjustment" ? "#2FDA74" : "#D3D3D3",
            ...styles.topButtons,
          }}
        >
          <Text
            style={{
              color: route.name === "arcadjustment" ? "white" : "black",
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

      <Text style={styles.arcHeader}>Arc Adjustment</Text>
      <Image style={styles.arcImage} source={Arc} />
      <View>
        <Text style={styles.arcInfo}>
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
          navVar={'arctrack'}
        />
      )}

      <Text style={styles.PCHeader}>Progress</Text>
      <View style={styles.PCChart}>
        <LineChart
          data={data}
          areaChart
          curved
          spacing={50}
          startFillColor="#2FDA74"
          // color="transparent"
          hideDataPoints
          width={270}
          yAxisLabelTexts={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60]}
          xAxisLabelTexts={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
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
    height: "auto",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backTraining: {
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
  arcHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  arcImage: {
    height: 200,
    width: 361,
    borderRadius: 8,
    marginBottom: 25,
  },
  arcInfo: {
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
});

export default ArcAdjustment;
