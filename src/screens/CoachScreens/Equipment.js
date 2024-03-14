
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
import Check from '../../assets/Misc/Check.png';
import X from '../../assets/Misc/X.png'

import Putt from "../../assets/Golf/Putt.png";
import TaylorDriver from '../../assets/Golf/TaylorDriver.png';
import WilsonPutt from '../../assets/Golf/WilsonPutt.png';
import { useRoute } from "@react-navigation/native";

function Equipment({ navigation }) {
  const route = useRoute();

  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.container}>
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
          style={{
            backgroundColor: route.name === "equipment" ? "#2FDA74" : "#D3D3D3",
            ...styles.topButtons,
          }}
        >
          <Text
            style={{
              color: route.name === "equipment" ? "white" : "black",
              ...styles.topButtonsText,
            }}
          >
            Equipment
          </Text>
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

      <Text style={styles.equipmentHeader}>Equipment</Text>

      <View>
        <Text style={styles.equipmentInfo}>
          Customize and set your clubs and equipment here. Browse
          recommendations for new gear based on feedback of your skills and
          areas for improvement.
        </Text>
      </View>

      <Text style={styles.myBagHeader}>My Bag</Text>

      <View style={styles.myBagContainer}>
        <View style={styles.myBagCards}>
          <Image source={TaylorDriver} />
          <View style={styles.myBagTContainer}>
            <Text style={styles.myBagTHeader}>TaylorMade RBZ Driver</Text>
            <Text style={styles.myBagText}>Last used February 21, 2024</Text>
            <Text style={styles.myBagUsedText}>Currently in bag</Text>
            <View style={styles.TVButtonContainer}>
              <TouchableOpacity style={styles.takeOutButton}>
                <Text style={styles.takeOutButtonText}>Take out</Text>
                <Image source={X} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewSpecsButton}>
                <Text style={styles.viewSpecsButtonText}>View Specs</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.myBagCards}>
          <Image source={WilsonPutt} />
          <View style={styles.myBagTContainer}>
            <Text style={styles.myBagTHeader}>Wilson Ultra Putter</Text>
            <Text style={styles.myBagText}>Last used January 31, 2024</Text>
            <Text style={styles.myBagUnusedText}>Currently unused</Text>
            <View style={styles.MVButtonContainer}>
              <TouchableOpacity style={styles.addToBagButton}>
                <Text style={styles.addToBagButtonText}>Add to bag</Text>
                <Image source={Check} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewSpecsButton}>
                <Text style={styles.viewSpecsButtonText}>View Specs</Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: 'white'
  },
  container: {
    marginTop: 50,
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
  equipmentHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  equipmentInfo: {
    fontFamily: "Quicksand-Light",
    borderWidth: 1,
    color: "#202020",
    borderColor: "#D3D3D3",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    height: 124,
    lineHeight: 22,
  },
  myBagHeader: {
    fontFamily: "Quicksand-Med",
    fontSize: 18,
    marginTop: 27,
    marginBottom: 15,
  },
  myBagContainer: {
    marginBottom: 250,
  },
  myBagCards: {
    height: 106,
    width: 367,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.2,
    borderColor: "#AFAFAF",
  },
  myBagTContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 265,
    height: 88,
  },
  myBagTHeader: {
    fontFamily: "Quicksand-SemiBold",
    height: 16,
    fontSize: 16,
    lineHeight: 20,
  },
  myBagText: {
    fontFamily: "Quicksand-Reg",
    color: "#202020",
    // padding: 4,
    marginTop: 3,
    width: 265,
    fontSize: 12,
  },
  myBagUsedText: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    color: "#2FDA74",
  },
  myBagUnusedText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    color: "#AFAFAF",
  },
  TVButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 175,
  },
  MVButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 190,
  },
  addToBagButton: {
    backgroundColor: "#2FDA74",
    height: 24,
    width: 100,
    borderRadius: 4,
    paddingHorizontal: 8,
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addToBagButtonText: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    color: "white",
  },
  takeOutButton: {
    width: 86,
    height: 24,
    borderRadius: 4,
    paddingHorizontal: 8,
    padding: 4,
    backgroundColor: "#0F0F0F",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  takeOutButtonText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Quicksand-SemiBold",
  },
  viewSpecsButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#358DD1",
    width: 80,
    height: 24,
    paddingHorizontal: 8,
    padding: 4,
    borderRadius: 4,
  },
  viewSpecsButtonText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Quicksand-SemiBold",
  },
});

export default Equipment;



