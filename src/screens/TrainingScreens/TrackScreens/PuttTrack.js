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
import { useState, useEffect } from "react";


function PuttTrack({ navigation }) {
  const route = useRoute();

  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  const [showView, setShowView] = useState(false);
  const [secondView, setSecondView] = useState(false);

  const [shotObj, setShotObj] = useState([
    {
      id: 1,
      checked: false,
      X: false,
    },
    {
      id: 2,
      checked: false,
      X: false,
    },
    {
      id: 3,
      checked: false,
      X: false,
    },
    {
      id: 4,
      checked: false,
      X: false,
    },
    {
      id: 5,
      checked: false,
      X: false,
    },
    {
      id: 6,
      checked: false,
      X: false,
    },
    {
      id: 7,
      checked: false,
      X: false,
    },
    {
      id: 8,
      checked: false,
      X: false,
    },
    {
      id: 9,
      checked: false,
      X: false,
    },
    {
      id: 10,
      checked: false,
      X: false,
    },
  ]);

  useEffect(() => {
    const allShotsToggled = shotObj.every((shot) => shot.checked || shot.X);
    setShowView(allShotsToggled);
  }, [shotObj]);

  const handleCheck = (id) => {
    setShotObj((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleX = (id) => {
    setShotObj((prevState) =>
      prevState.map((item) => (item.id === id ? { ...item, X: !item.X } : item))
    );
  };

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
              backgroundColor:
                route.name === "putttrack" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "putttrack" ? "white" : "black",
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
          {shotObj.map((shot) => (
            <View key={shot.id} style={styles.shotCard}>
              <View
                style={
                  shot.checked === false && shot.X === false
                    ? styles.newShot
                    : shot.checked === true
                    ? styles.shotGreen
                    : styles.shotGray
                }
              >
                <Text style={styles.shotText}>Shot {shot.id}</Text>
              </View>
              <View style={styles.shotCXImage}>
                <TouchableOpacity onPress={() => handleCheck(shot.id)}>
                  <Image source={shot.checked ? GreenCheck : GrayCheck} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleX(shot.id)}>
                  <Image source={shot.X ? GrayXCheck : XCheck} />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          
          {showView && (
            <View style={styles.shotCard}>
              <TouchableOpacity
                onPress={() => setSecondView(!secondView)}
                style={styles.shotBlue}
              >
                <Text style={styles.shotText}>Finished</Text>
              </TouchableOpacity>
              <View style={styles.shotCXImage}>
                <Image source={GreenCheck} />
                <Image source={GrayXCheck} />
              </View>
            </View>
          )}
          {secondView && (
            <TouchableOpacity
              onPress={() => navigation.navigate("puttresult")}
              style={styles.toResultsButton}
            >
              <Text style={styles.toResultsButtonText}>
                Adjust grip upwards, add a bit more power
              </Text>
            </TouchableOpacity>
          )}
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
  backPractice: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 67,
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
  toResultsButton: {
    height: 80,
    width: 355,
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: "#358DD1",
    justifyContent: "center",
    alignItems: "center",
  },
  toResultsButtonText: {
    fontFamily: "Quicksand-Med",
    fontSize: 12,
    textAlign: "center",
    color: "white",
  },
});

export default PuttTrack;
