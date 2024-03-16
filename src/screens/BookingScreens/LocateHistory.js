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

import Carousel from "pinar";

import NH from "../../assets/Locations/NH.png";
import PP from "../../assets/Locations/PP.png";
import VA from "../../assets/Locations/VA.png";

import { useState } from "react";
import ALPScreen from "../../utils/ALPScreen";
import { useRoute } from "@react-navigation/native";

function LocateHistory({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();

  const [showLModal, setShowLModal] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            style={styles.backBooking}
            onPress={() => navigation.navigate("booking")}
          >
            <Image source={leftArrow} />
            <Text
              style={{
                color: "#AFAFAF",
                fontFamily: "Quicksand-SemiBold",
                fontSize: 12,
              }}
            >
              Booking
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
          onPress={() => navigation.navigate("locate")}
          style={styles.topButtons}
        >
          <Text style={styles.topButtonsText}>Locate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("favorites")}
          style={ styles.topButtons }
        >
          <Text
            style={styles.topButtonsText}
          >
            Favorites
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("locatehistory")}
          style={{
            backgroundColor:
              route.name === "locatehistory" ? "#2FDA74" : "#D3D3D3",
            ...styles.topButtons,
          }}
        >
          <Text
            style={{
              color: route.name === "locatehistory" ? "white" : "black",
              ...styles.topButtonsText,
            }}
          >
            History
          </Text>
        </TouchableOpacity>
      </View>

      {showLModal && (
        <ALPScreen
          modalShown={showLModal}
          closeModal={setShowLModal}
          navigation={navigation}
          navVar={"locate"}
        />
      )}

      <Text style={styles.courseHistoryText}>Course History</Text>

      <View style={styles.CHContainer}>
        <View style={styles.CHCards}>
          <Image source={PP} style={styles.CHImage} />
          <View style={styles.CHCardsTContainer}>
            <Text style={styles.CHCardsTHeader}>Papago Park</Text>
            <Text style={styles.CHCardsText}>Played at 3:00 pm on 2/23/24</Text>
            <Text style={styles.CHCardsText}>
              Duration: 1 hr 4 min, 9 holes
            </Text>
            <View style={styles.PFContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("")}
                style={styles.CHCardsButton}
              >
                <Text style={styles.CHCardsButtonText}>Play here again</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.CHCards}>
          <Image source={NH} style={styles.CHImage} />
          <View style={styles.CHCardsTContainer}>
            <Text style={styles.CHCardsTHeader}>North Hill</Text>
            <Text style={styles.CHCardsText}>Played at 1:00 pm on 2/05/24</Text>
            <Text style={styles.CHCardsText}>
              Duration: 1 hr 45 min, 9 holes
            </Text>
            <View style={styles.PFContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("")}
                style={styles.CHCardsButton}
              >
                <Text style={styles.CHCardsButtonText}>Play here again</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.CHCards}>
          <Image source={VA} style={styles.CHImage} />
          <View style={styles.CHCardsTContainer}>
            <Text style={styles.CHCardsTHeader}>Ventura Acres</Text>
            <Text style={styles.CHCardsText}>
              Played at 10:00 am on 1/23/24
            </Text>
            <Text style={styles.CHCardsText}>
              Duration: 1 hr 14 min, 9 holes
            </Text>
            <View style={styles.PFContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("")}
                style={styles.CHCardsButton}
              >
                <Text style={styles.CHCardsButtonText}>Play here again</Text>
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
    backgroundColor: 'white',
    padding: 15,
  },
  container: {
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backBooking: {
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
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
  },
  bookingHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  bookingInfo: {
    fontFamily: "Quicksand-Light",
    borderWidth: 1,
    color: "#202020",
    borderColor: "#D3D3D3",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    height: 122,
    lineHeight: 22,
  },
  courseLocater: {
    backgroundColor: "#2FDA74",
    height: 40,
    width: 361,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 30,
  },
  courseLocaterText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
  },
  favoriteCoursesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 25,
  },
  favoritesCoursesText: {
    fontFamily: "Quicksand-Med",
    fontSize: 18,
    lineHeight: 24,
  },
  seeAllButton: {
    backgroundColor: "#358DD1",
    borderRadius: 4,
    width: 80,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  seeAllButtonText: {
    fontFamily: "Quicksand-SemiBold",
    color: "white",
    fontSize: 12,
  },
  favCoCards: {
    borderWidth: 1,
    height: 196,
    width: 160,
    borderRadius: 6,
    borderColor: "#D3D3D3",
    marginRight: 15,
  },
  favCoImage: {
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  favCoTextContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 10,
    paddingLeft: 8,
  },
  favCoTextTop: {
    color: "#202020",
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 16,
  },
  favCoTextBot: {
    fontSize: 16,
    fontFamily: "Quicksand-Med",
    lineHeight: 24,
  },
  courseHistoryText: {
    fontFamily: "Quicksand-Med",
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 10,
    marginTop: 25
  },

  CHContainer: {
    marginBottom: 200,
  },
  CHCards: {
    height: 106,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.2,
    borderColor: "#AFAFAF",
  },
  CHImage: {
    width: 80,
    height: 88,
    borderRadius: 8,
  },
  CHCardsTContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 265,
    height: 88,
  },
  CHCardsTHeader: {
    fontFamily: "Quicksand-Med",
    height: 20,
    fontSize: 16,
  },
  CHCardsText: {
    fontFamily: "Quicksand-Reg",
    color: "#AFAFAF",
    // padding: 4,
    width: 265,
    fontSize: 12,
    lineHeight: 18,
  },
  PFContainer: {
    flexDirection: "row",
    width: 190,
    justifyContent: "space-between",
  },
  CHCardsButton: {
    backgroundColor: "#2FDA74",
    height: 24,
    width: 108,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  CHCardsButtonText: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    color: "white",
  },
});

export default LocateHistory;
