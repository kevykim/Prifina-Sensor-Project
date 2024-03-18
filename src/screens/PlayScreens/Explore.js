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
import mapnearby from "../../assets/Locations/mapnearby.png";

import { SearchBar } from "@rneui/themed";
import Carousel from "pinar";
import NH from "../../assets/Locations/NH.png";

import { useRoute } from "@react-navigation/native";


function Explore({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={styles.backPlay}
              onPress={() => navigation.navigate("play")}
            >
              <Image source={leftArrow} />
              <Text
                style={{
                  color: "#AFAFAF",
                  fontFamily: "Quicksand-SemiBold",
                  fontSize: 12,
                }}
              >
                Play
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
            onPress={() => navigation.navigate("analyze")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Analyze</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("track")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Track</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("explore")}
            style={{
              backgroundColor: route.name === "explore" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "explore" ? "white" : "black",
                ...styles.topButtonsText,
              }}
            >
              Explore
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchBarContainer}>
          <SearchBar
            lightTheme
            autoCorrect={false}
            round
            inputStyle={{
              backgroundColor: "#F1F1F1",
              color: "black",
              fontFamily: "Quicksand-Reg",
              fontSize: 12,
            }}
            containerStyle={{
              backgroundColor: "transparent",
              borderBottomColor: "transparent",
              borderTopColor: "transparent",
            }}
            inputContainerStyle={{
              height: 32,
              width: 361,
              backgroundColor: "#F1F1F1",
              paddingHorizontal: 8,
              paddingVertical: 6,
            }}
            clearButtonMode="never"
          />
        </View>

        <View style={{ marginTop: 80 }}>
          <Image source={mapnearby} />

          <TouchableOpacity style={styles.bookATeeButton}>
            <Text style={styles.bookATeeButtonText}>Book a Tee-Time</Text>
          </TouchableOpacity>

          <View style={styles.favoriteCoursesContainer}>
            <Text style={styles.favoritesCoursesText}>
              Scheduled Appointments
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("favorites")}
              style={styles.seeAllButton}
            >
              <Text style={styles.seeAllButtonText}>See all</Text>
            </TouchableOpacity>
          </View>

          <Carousel
            style={{ marginBottom: 150 }}
            showsControls={false}
            height={250}
            width={361}
            dotsContainerStyle={{
              position: "absolute",
              right: 5,
              top: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            activeDotStyle={{
              backgroundColor: "#2FDA74",
              width: 5,
              height: 5,
              borderRadius: 100,
              marginLeft: 2,
              marginRight: 2,
              marginTop: 2,
              marginBottom: 2,
            }}
            dotStyle={{
              backgroundColor: "#D3D3D3",
              borderRadius: 100,
              width: 5,
              height: 5,
              marginLeft: 2,
              marginRight: 2,
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 25,
                width: 361,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={styles.favCoCards}
                // open modal then navigate to North hill passing down north hill variable to overview component
                onPress={() =>
                  navigation.navigate("locate", { propName: "North Hill" })
                }
              >
                <Image style={styles.favCoImage} source={NH} />
                <View style={styles.favCoTextContainer}>
                  <Text style={styles.favCoTextTop}>North Hill</Text>
                  <Text style={styles.favCoTextBot}>3.6 miles</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.favCoCards}
                // open modal then navigate to North hill passing down north hill variable to overview component
                onPress={() =>
                  navigation.navigate("locate", { propName: "North Hill" })
                }
              >
                <Image style={styles.favCoImage} source={NH} />
                <View style={styles.favCoTextContainer}>
                  <Text style={styles.favCoTextTop}>North Hill</Text>
                  <Text style={styles.favCoTextBot}>3.6 miles</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 25,
                width: 361,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={styles.favCoCards}
                // open modal then navigate to North hill passing down north hill variable to overview component
                onPress={() =>
                  navigation.navigate("locate", { propName: "North Hill" })
                }
              >
                <Image style={styles.favCoImage} source={NH} />
                <View style={styles.favCoTextContainer}>
                  <Text style={styles.favCoTextTop}>North Hill</Text>
                  <Text style={styles.favCoTextBot}>3.6 miles</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.favCoCards}
                // open modal then navigate to North hill passing down north hill variable to overview component
                onPress={() =>
                  navigation.navigate("locate", { propName: "North Hill" })
                }
              >
                <Image style={styles.favCoImage} source={NH} />
                <View style={styles.favCoTextContainer}>
                  <Text style={styles.favCoTextTop}>North Hill</Text>
                  <Text style={styles.favCoTextBot}>3.6 miles</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 25,
                width: 361,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={styles.favCoCards}
                // open modal then navigate to North hill passing down north hill variable to overview component
                onPress={() =>
                  navigation.navigate("locate", { propName: "North Hill" })
                }
              >
                <Image style={styles.favCoImage} source={NH} />
                <View style={styles.favCoTextContainer}>
                  <Text style={styles.favCoTextTop}>North Hill</Text>
                  <Text style={styles.favCoTextBot}>3.6 miles</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.favCoCards}
                // open modal then navigate to North hill passing down north hill variable to overview component
                onPress={() =>
                  navigation.navigate("locate", { propName: "North Hill" })
                }
              >
                <Image style={styles.favCoImage} source={NH} />
                <View style={styles.favCoTextContainer}>
                  <Text style={styles.favCoTextTop}>North Hill</Text>
                  <Text style={styles.favCoTextBot}>3.6 miles</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Carousel>
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
  backPlay: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 48,
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
  scorecardHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  searchBarContainer: {
    position: "absolute",
    top: 115,
    right: -6.5,
  },
  bookATeeButton: {
    height: 40,
    borderRadius: 8,
    backgroundColor: "#2FDA74",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 25,
    marginBottom: 25,
  },
  bookATeeButtonText: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    color: "white",
    lineHeight: 22,
  },
  favoriteCoursesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
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
});

export default Explore;
