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
import righty from "../../assets/Misc/righty.png";
import Avatar from "../../assets/Misc/Avatar.png";

import Arc from '../../assets/Golf/Arc.png';
import Chip from '../../assets/Golf/Chip.png';
import Putt from '../../assets/Golf/Putt.png';


function Coach({ navigation }) {

  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

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
          onPress={() => navigation.navigate("equipment")}
          style={styles.topButtons}
        >
          <Text style={styles.topButtonsText}>Equipment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("practice")}
          style={styles.topButtons}
        >
          <Text style={styles.topButtonsText}>Practice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("tutorials")}
          style={styles.topButtons}
        >
          <Text style={styles.topButtonsText}>Tutorials</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.trainingHeader}>Training</Text>

      <View>
        <Text style={styles.trainingInfo}>
          Welcome to your personalized training hub. Here you can set and
          customize your equipment, practice specific skills and drills, and
          view tutorials catered towards your personal feedback needs.
          Personalized coaching is available 24/7.
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('practice')} style={styles.practicePlansBT}>
        <Text style={styles.practicePlansBTText}>View Practice Plans</Text>
      </TouchableOpacity>

      <View style={styles.equipContainer}>
        <Text style={styles.equipText}>Equipment Manager</Text>
        <TouchableOpacity onPress={() => navigation.navigate('equipment')} style={styles.equipButton}>
          <Text style={styles.equipButtonText}>View My Bag</Text>
          <Image source={righty} />
        </TouchableOpacity>
      </View>

      <Text style={styles.progressText}>In progress</Text>

      <View style={styles.progressContainer}>
        <View style={styles.progressCards}>
          <Image style={styles.progressImage} source={Arc} />
          <View style={styles.progressCardsTContainer}>
            <Text style={styles.progressCardsTHeader}>Arc Adjustment</Text>
            <Text style={styles.progressCardsText}>
              Turning your swing angle by focusing on stance, posture, and grip
              techniques
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('arcadjustment')} style={styles.progressCardsButton}>
              <Text style={styles.progressCardsButtonText}>
                Continue Practice
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={{borderBottomWidth: 0.5, marginBottom: 4}}></View> */}

        <View style={styles.progressCards}>
          <Image style={styles.progressImage} source={Putt} />
          <View style={styles.progressCardsTContainer}>
            <Text style={styles.progressCardsTHeader}>Putting</Text>
            <Text style={styles.progressCardsText}>
              Turning your swing angle by focusing on stance, posture, and grip
              techniques
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('putting')} style={styles.progressCardsButton}>
              <Text style={styles.progressCardsButtonText}>
                Continue Practice
              </Text>
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
  trainingHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  trainingInfo: {
    fontFamily: "Quicksand-Light",
    borderWidth: 1,
    color: "#202020",
    borderColor: "#D3D3D3",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    height: 142,
  },
  practicePlansBT: {
    marginVertical: 25,
    height: 40,
    width: 361,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2FDA74",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  practicePlansBTText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
  },
  equipContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 24,
    marginBottom: 45,
  },
  equipText: {
    fontFamily: "Quicksand-Med",
    fontSize: 18,
  },
  equipButton: {
    backgroundColor: "#358DD1",
    width: 106,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    height: 24,
  },
  equipButtonText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
  },
  progressText: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    marginBottom: 15,
  },
  progressContainer: {
    marginBottom: 250,
  },
  progressCards: {
    height: 106,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.2,
    borderColor: "#AFAFAF",
  },
  progressImage: {
    width: 80,
    height: 88,
    borderRadius: 8,
  },
  progressCardsTContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 265,
    height: 88,
  },
  progressCardsTHeader: {
    fontFamily: "Quicksand-Med",
    height: 16,
    fontSize: 16,
    lineHeight: 20,
  },
  progressCardsText: {
    fontFamily: "Quicksand-Reg",
    color: "#202020",
    // padding: 4,
    width: 265,
    fontSize: 12,
    lineHeight: 20,
  },
  progressCardsButton: {
    backgroundColor: "#2FDA74",
    height: 24,
    width: 117,
    borderRadius: 4,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  progressCardsButtonText: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    color: "white",
  },
});

export default Coach;
