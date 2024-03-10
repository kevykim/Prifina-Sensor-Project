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

import GreenCheck from "../../../assets/Shots/GreenCheck.png";
import XCheck from "../../../assets/Shots/XCheck.png";

import GrayCheck from "../../../assets/Shots/GrayCheck.png";
import GrayXCheck from "../../../assets/Shots/GrayXCheck.png";

import { useRoute } from "@react-navigation/native";

function PuttTrack({ navigation }) {
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
            backgroundColor: route.name === "arctrack" ? "#2FDA74" : "#D3D3D3",
            ...styles.topButtons,
          }}
        >
          <Text
            style={{
              color: route.name === "arctrack" ? "white" : "black",
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

      <Text style={styles.PTHeader}>Putting - 5 feet</Text>
      <Text style={styles.PTInfo}>Tap smartwatch to begin</Text>

      <View style={styles.shotContainer}>
        <View style={styles.shotCard}>
          <View style={styles.shotGreen}>
            <Text style={styles.shotText}>Shot 1</Text>
          </View>
          <View style={styles.shotCXImage}>
            <Image source={GreenCheck} />
            <Image source={XCheck} />
          </View>
        </View>
        <View style={styles.shotCard}>
          <View style={styles.shotGreen}>
            <Text style={styles.shotText}>Shot 2</Text>
          </View>
          <View style={styles.shotCXImage}>
            <Image source={GreenCheck} />
            <Image source={XCheck} />
          </View>
        </View>

        <View style={styles.shotCard}>
          <View style={styles.shotGray}>
            <Text style={styles.shotText}>Shot 3</Text>
          </View>
          <View style={styles.shotCXImage}>
            <Image source={GrayCheck} />
            <Image source={GrayXCheck} />
          </View>
        </View>

        <View style={styles.shotCard}>
          <View style={styles.shotGreen}>
            <Text style={styles.shotText}>Shot 4</Text>
          </View>
          <View style={styles.shotCXImage}>
            <Image source={GreenCheck} />
            <Image source={XCheck} />
          </View>
        </View>

        <View style={styles.shotCard}>
          <View style={styles.shotBlue}>
            <Text style={styles.shotText}>Shot 5</Text>
          </View>
          <View style={styles.shotCXImage}>
            <Image source={GrayCheck} />
            <Image source={GrayXCheck} />
          </View>
        </View>

        <View style={styles.shotCard}>
          <View style={styles.newShot}>
            <Text style={styles.shotText}>Shot 6</Text>
          </View>
          <View style={styles.shotCXImage}>
            <Image source={GrayCheck} />
            <Image source={XCheck} />
          </View>
        </View>
        <View style={styles.shotCard}>
          <View style={styles.newShot}>
            <Text style={styles.shotText}>Shot 7</Text>
          </View>
          <View style={styles.shotCXImage}>
            <Image source={GrayCheck} />
            <Image source={XCheck} />
          </View>
        </View>
        <View style={styles.shotCard}>
          <View style={styles.newShot}>
            <Text style={styles.shotText}>Shot 8</Text>
          </View>
          <View style={styles.shotCXImage}>
            <Image source={GrayCheck} />
            <Image source={XCheck} />
          </View>
        </View>
        <View style={styles.shotCard}>
          <View style={styles.newShot}>
            <Text style={styles.shotText}>Shot 9</Text>
          </View>
          <View style={styles.shotCXImage}>
            <Image source={GrayCheck} />
            <Image source={XCheck} />
          </View>
        </View>
        <View style={styles.shotCard}>
          <View style={styles.newShot}>
            <Text style={styles.shotText}>Shot 10</Text>
          </View>
          <View style={styles.shotCXImage}>
            <Image source={GrayCheck} />
            <Image source={XCheck} />
          </View>
        </View>
        <View style={styles.shotCard}>
          <View style={styles.newShot}>
            <Text style={styles.shotText}>Shot 11</Text>
          </View>
          <View style={styles.shotCXImage}>
            <Image source={GrayCheck} />
            <Image source={XCheck} />
          </View>
        </View>
        <View style={styles.shotCard}>
          <View style={styles.newShot}>
            <Text style={styles.shotText}>Shot 12</Text>
          </View>
          <View style={styles.shotCXImage}>
            <Image source={GrayCheck} />
            <Image source={XCheck} />
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
  PTHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 28,
  },
  PTInfo: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  shotContainer: {
    flexDirection: "column",
    marginBottom: 150,
  },
  shotCard: {
    height: 32,
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  shotGreen: {
    width: 123,
    height: 32,
    borderRadius: 100,
    backgroundColor: "#2FDA74",
    alignItems: "center",
    justifyContent: "center",
  },
  shotGray: {
    width: 123,
    height: 32,
    borderRadius: 100,
    backgroundColor: "#7C7C7C",
    alignItems: "center",
    justifyContent: "center",
  },
  shotBlue: {
    width: 123,
    height: 32,
    borderRadius: 100,
    backgroundColor: "#358DD1",
    alignItems: "center",
    justifyContent: "center",
  },
  newShot: {
    width: 123,
    height: 32,
    borderRadius: 100,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
  },
  shotText: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    color: "white",
  },
  shotCXImage: {
    width: 76,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default PuttTrack;
