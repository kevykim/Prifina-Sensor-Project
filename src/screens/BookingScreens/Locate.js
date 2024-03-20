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

import { useRoute } from "@react-navigation/native";

import Order from '../../assets/Misc/Order.png';
import GreenStar from '../../assets/Misc/GreenStar.png';
import GrayStar from '../../assets/Misc/GrayStar.png';
import NH from "../../assets/Locations/NH.png";
import SW from "../../assets/Locations/SW.png";
import VA from "../../assets/Locations/VA.png";
import OC from "../../assets/Locations/OC.png";
import PR from "../../assets/Locations/PR.jpg";

function Locate({ navigation }) {
  const route = useRoute();
  // function Locate({navigation, route}) {
  // const { propName } = route?.params;
  //   const fontsLoaded = useCustomFonts();

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
            style={{
              backgroundColor: route.name === "locate" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "locate" ? "white" : "black",
                ...styles.topButtonsText,
              }}
            >
              Locate
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("favorites")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("locatehistory")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>History</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.locateHContainer}>
          <Text style={styles.locateHeader}>Select Course</Text>
          <TouchableOpacity>
            <Image style={styles.locateHImage} source={Order} />
          </TouchableOpacity>
        </View>

        <View style={styles.selectCrsContainer}>
          <View style={styles.selectCrsCard}>
            <View style={styles.starContainer}>
              <Image source={GreenStar} />
              <Image source={GreenStar} />
              <Image source={GreenStar} />
              <Image source={GrayStar} />
              <Image source={GrayStar} />
            </View>

            <Image style={styles.selectCrsImage} source={OC} />

            <View style={styles.selectCrsTContainer}>
              <View style={styles.SCTBox}>
                <Text style={styles.SCTBoxTop}>Oakwood Clubs</Text>
                <Text style={styles.SCTBoxBot}>1.7 miles</Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("ocoverview")}
                style={styles.seeDeetsButton}
              >
                <Text style={styles.seeDeetsText}>See Details</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.selectCrsCard}>
            <View style={styles.starContainer}>
              <Image source={GreenStar} />
              <Image source={GreenStar} />
              <Image source={GreenStar} />
              <Image source={GreenStar} />
              <Image source={GrayStar} />
            </View>

            <Image style={styles.selectCrsImage} source={NH} />

            <View style={styles.selectCrsTContainer}>
              <View style={styles.SCTBox}>
                <Text style={styles.SCTBoxTop}>North Hill</Text>
                <Text style={styles.SCTBoxBot}>3.6 miles</Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("nhoverview")}
                style={styles.seeDeetsButton}
              >
                <Text style={styles.seeDeetsText}>See Details</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.selectCrsCard}>
            <View style={styles.starContainer}>
              <Image source={GreenStar} />
              <Image source={GreenStar} />
              <Image source={GreenStar} />
              <Image source={GreenStar} />
              <Image source={GrayStar} />
            </View>

            <Image style={styles.selectCrsImage} source={VA} />

            <View style={styles.selectCrsTContainer}>
              <View style={styles.SCTBox}>
                <Text style={styles.SCTBoxTop}>Ventura Acres</Text>
                <Text style={styles.SCTBoxBot}>5.5 miles</Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("vaoverview")}
                style={styles.seeDeetsButton}
              >
                <Text style={styles.seeDeetsText}>See Details</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.selectCrsCard}>
            <View style={styles.starContainer}>
              <Image source={GreenStar} />
              <Image source={GreenStar} />
              <Image source={GreenStar} />
              <Image source={GreenStar} />
              <Image source={GrayStar} />
            </View>

            <Image style={styles.selectCrsImage} source={SW} />

            <View style={styles.selectCrsTContainer}>
              <View style={styles.SCTBox}>
                <Text style={styles.SCTBoxTop}>South West</Text>
                <Text style={styles.SCTBoxBot}>7.5</Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("swoverview")}
                style={styles.seeDeetsButton}
              >
                <Text style={styles.seeDeetsText}>See Details</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.selectCrsCard}>
            <View style={styles.starContainer}>
              <Image source={GreenStar} />
              <Image source={GreenStar} />
              <Image source={GreenStar} />
              <Image source={GreenStar} />
              <Image source={GrayStar} />
            </View>

            <Image style={styles.selectCrsImage} source={PR} />

            <View style={styles.selectCrsTContainer}>
              <View style={styles.SCTBox}>
                <Text style={styles.SCTBoxTop}>Pine Ridge</Text>
                <Text style={styles.SCTBoxBot}>13.3 miles</Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("proverview")}
                style={styles.seeDeetsButton}
              >
                <Text style={styles.seeDeetsText}>See Details</Text>
              </TouchableOpacity>
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
    width: 69,
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
  locateHContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  locateHeader: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  locateHImage: {
    marginRight: 6,
  },
  selectCrsContainer: {
    flexDirection: "column",
    marginBottom: 125,
  },
  selectCrsCard: {
    height: 196,
    width: 361,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#D3D3D3",
    marginTop: 10,
  },
  starContainer: {
    flexDirection: "row",
    backgroundColor: "#358DD1",
    position: "absolute",
    zIndex: 5,
    width: 104,
    height: 24,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 6,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
  },
  selectCrsImage: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    height: 136,
    width: 361
  },
  selectCrsTContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    height: 44,
  },
  SCTBox: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 42,
  },
  SCTBoxTop: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 12,
  },
  SCTBoxBot: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
  },
  seeDeetsButton: {
    backgroundColor: "#2FDA74",
    width: 123,
    height: 42,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  seeDeetsText: {
    fontFamily: "Quicksand-SemiBold",
    color: "white",
    fontSize: 16,
    lineHeight: 22,
  },
});



export default Locate;
