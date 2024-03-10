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

import Arc from "../../assets/Golf/Arc.png";
import Putt from "../../assets/Golf/Putt.png";
import { useRoute } from "@react-navigation/native";

function Practice({ navigation }) {
  const route = useRoute();

  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            style={styles.backTraining}
            onPress={() => navigation.navigate("coach")}
          >
            <Image source={leftArrow} />
            <Text
              style={{
                color: "#AFAFAF",
                fontFamily: "Quicksand-SemiBold",
                fontSize: 12,
              }}
            >
              Training
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
            backgroundColor: route.name === "practice" ? "#2FDA74" : "#D3D3D3",
            ...styles.topButtons,
          }}
        >
          <Text
            style={{
              color: route.name === "practice" ? "white" : "black",
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

      <Text style={styles.practiceHeader}>Practice</Text>

      <View>
        <Text style={styles.practiceInfo}>
          Welcome to your personalized training hub. Here you can set and
          customize your equipment, practice specific skills and drills, and
          view tutorials catered towards your goals.
        </Text>
      </View>

      <Text style={styles.exerciseHeader}>Select an exercise</Text>

      <View style={styles.exerciseContainer}>
        <View style={styles.exerciseCards}>
          <Image style={styles.exerciseImage} source={Arc} />
          <View style={styles.exerciseCardsTContainer}>
            <Text style={styles.exerciseCardsTHeader}>Arc Adjustment</Text>
            <Text style={styles.exerciseCardsText}>
              Turning your swing angle by focusing on stance, posture, and grip
              techniques
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("arcadjustment")}
              style={styles.exerciseCardsButton}
            >
              <Text style={styles.exerciseCardsButtonText}>Set Goals</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={{borderBottomWidth: 0.5, marginBottom: 4}}></View> */}

        <View style={styles.exerciseCards}>
          <Image style={styles.exerciseImage} source={Putt} />
          <View style={styles.exerciseCardsTContainer}>
            <Text style={styles.exerciseCardsTHeader}>Putting</Text>
            <Text style={styles.exerciseCardsText}>
              Turning your swing angle by focusing on stance, posture, and grip
              techniques
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("putting")}
              style={styles.exerciseCardsButton}
            >
              <Text style={styles.exerciseCardsButtonText}>Set Goals</Text>
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
  practiceHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  practiceInfo: {
    fontFamily: "Quicksand-Light",
    borderWidth: 1,
    color: "#202020",
    borderColor: "#D3D3D3",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    height: 122,
    lineHeight: 22
  },
 
  exerciseHeader: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    marginTop: 25,
    marginBottom: 15,
  },
  exerciseContainer: {
    marginBottom: 250,
  },
  exerciseCards: {
    height: 106,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.2,
    borderColor: "#AFAFAF",
  },
  exerciseImage: {
    width: 80,
    height: 88,
    borderRadius: 8
  },
  exerciseCardsTContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 265,
    height: 88,
  },
  exerciseCardsTHeader: {
    fontFamily: "Quicksand-Med",
    height: 20,
    fontSize: 16,
    marginBottom: 1,
  },
  exerciseCardsText: {
    fontFamily: "Quicksand-Reg",
    color: "#202020",
    // padding: 4,
    width: 265,
    fontSize: 12,
    lineHeight: 20,
  },
  exerciseCardsButton: {
    backgroundColor: "#2FDA74",
    height: 24,
    width: 70,
    borderRadius: 4,
    paddingHorizontal: 8,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  exerciseCardsButtonText: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    color: "white",
  },
});

export default Practice;
