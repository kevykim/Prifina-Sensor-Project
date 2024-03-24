import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useCustomFonts } from "../../utils/CustomFonts";

import leftArrow from "../../assets/Misc/leftArrow.png";
import Avatar from "../../assets/Misc/Avatar.png";

import Curry from '../../assets/Tutorials/Curry.jpg';
import Anna from '../../assets/Tutorials/Anna.jpg';
import Jimmy from '../../assets/Tutorials/Jimmy.jpeg'
import Ryan from '../../assets/Tutorials/Ryan.jpg'
import Sarah from '../../assets/Tutorials/Sarah.jpg'
import Maria from '../../assets/Tutorials/Maria.jpg'

import { SearchBar } from "@rneui/themed";
import { useRoute } from "@react-navigation/native";

import { useState } from "react";

function Tutorials({ navigation }) {
  const route = useRoute();

  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  const [searchQuery, setSearchQuery] = useState("");

   const searchData = [
     "Curry's Caddle",
     "Measuring Up",
     "Practicing at Home",
     "Onto the Green",
     "Unlock Your Swing",
     "Driving Clinic",
   ];

    const filteredData = searchData.filter((item) =>
      item[0].toLowerCase().includes(searchQuery.toLowerCase())
    );

    const updateSearch = (query) => {
      setSearchQuery(query);
    };

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View>
              <TouchableOpacity
                style={styles.backTraining}
                onPress={() => navigation.navigate("training")}
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
              onPress={() => navigation.navigate("practice")}
              style={styles.topButtons}
            >
              <Text style={styles.topButtonsText}>Practice</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor:
                  route.name === "tutorials" ? "#2FDA74" : "#D3D3D3",
                ...styles.topButtons,
              }}
            >
              <Text
                style={{
                  color: route.name === "tutorials" ? "white" : "black",
                  ...styles.topButtonsText,
                }}
              >
                Tutorials
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.tutorialsHeader}>Tutorials</Text>

          <View>
            <Text style={styles.tutorialsInfo}>
              Browse a curated collection of tutorials created by golfers
              ranging from industry pros to newcomers documenting their own
              personal golf journey.
            </Text>
          </View>

          <View style={styles.BSContainer}>
            <Text style={styles.browseHeader}>Browse</Text>

            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}
              style={{ zIndex: 25 }}
            >
              <View>
                <SearchBar
                  lightTheme
                  autoCorrect={false}
                  onChangeText={updateSearch}
                  value={searchQuery}
                  round
                  inputStyle={{
                    backgroundColor: "#F1F1F1",
                    color: "black",
                    fontFamily: "Quicksand-Reg",
                    fontSize: 12,
                    zIndex: 25,
                  }}
                  containerStyle={{
                    backgroundColor: "transparent",
                    borderBottomColor: "transparent",
                    borderTopColor: "transparent",
                    zIndex: 25,
                  }}
                  inputContainerStyle={{
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    height: 24,
                    width: 188,
                    backgroundColor: "#F1F1F1",
                    borderRadius: 20,
                    paddingHorizontal: 16,
                    paddingVertical: 6,
                    zIndex: 25,
                  }}
                  clearButtonMode="never"
                />
                {searchQuery.length > 0 &&
                  filteredData.length > 0 &&
                  filteredData.map((item, index) => (
                    <View
                      style={{
                        position: "absolute",
                        right: 8,
                        height: 35,
                        top: 28,
                        backgroundColor: "#F1F1F1",
                        width: 188,
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 24,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                      }}
                      key={index}
                    >
                      <Text
                        style={{
                          textAlign: "left",
                          fontFamily: "Quicksand-Reg",
                          fontSize: 12,
                        }}
                      >
                        {item}
                      </Text>
                    </View>
                  ))}
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={{ flexGrow: 1 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.tutContainer}
            >
              <View style={styles.tutCard}>
                <View style={styles.tutTimeContainer}>
                  <Text style={styles.tutTime}>16 min 47 sec</Text>
                </View>
                <Image style={styles.tutImage} source={Curry} />
                <View style={styles.tutInfoContainer}>
                  <Text style={styles.tutInfoH}>Curry's Caddle</Text>
                  <Text style={styles.tutInfoM}>EP2: In's and Outs</Text>
                  <Text style={styles.tutInfoL}>
                    Follow Steph Curry's personal journey through golf, starting
                    from the basics and fundamentals.
                  </Text>
                </View>
              </View>

              <View style={styles.tutCard}>
                <View style={styles.tutTimeContainer}>
                  <Text style={styles.tutTime}>21 min 05 sec</Text>
                </View>
                <Image style={styles.tutImage} source={Anna} />
                <View style={styles.tutInfoContainer}>
                  <Text style={styles.tutInfoH}>Measuring Up</Text>
                  <Text style={styles.tutInfoM}>Choosing the right club</Text>
                  <Text style={styles.tutInfoL}>
                    Anna Yoshiaki walks through the process of choosing your
                    next club, what the cost breakdown looks like.
                  </Text>
                </View>
              </View>

              <View style={styles.tutCard}>
                <View style={styles.tutTimeContainer}>
                  <Text style={styles.tutTime}>30 min 05 sec</Text>
                </View>
                <Image style={styles.tutImage} source={Jimmy} />
                <View style={styles.tutInfoContainer}>
                  <Text style={styles.tutInfoH}>Practicing at Home</Text>
                  <Text style={styles.tutInfoM}> Indoor Golf Essentials</Text>
                  <Text style={styles.tutInfoL}>
                    Jimmy Doe shares indoor golf drills to refine your swing and
                    skills year-round, rain or shine.
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <Text style={styles.favoritesHeader}>Favorites</Text>

          <View style={{ flexGrow: 1, marginBottom: 150 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.tutContainer}
            >
              <View style={styles.tutCard}>
                <View style={styles.tutTimeContainer}>
                  <Text style={styles.tutTime}>26 min 47 sec</Text>
                </View>
                <Image style={styles.tutImage} source={Sarah} />
                <View style={styles.tutInfoContainer}>
                  <Text style={styles.tutInfoH}>Onto the Green</Text>
                  <Text style={styles.tutInfoM}>Sarah's Putting Tutorial</Text>
                  <Text style={styles.tutInfoL}>
                    Enhance your putting precision with Sarah Lee's expert tips
                    on green reading and stroke control.
                  </Text>
                </View>
              </View>

              <View style={styles.tutCard}>
                <View style={styles.tutTimeContainer}>
                  <Text style={styles.tutTime}>41 min 05 sec</Text>
                </View>
                <Image style={styles.tutImage} source={Ryan} />
                <View style={styles.tutInfoContainer}>
                  <Text style={styles.tutInfoH}>Unlock Your Swing</Text>
                  <Text style={styles.tutInfoM}>Swing Technique</Text>
                  <Text style={styles.tutInfoL}>
                    Master your swing technique and unlock your full potential
                    on the course with insights from Ryan Davis.
                  </Text>
                </View>
              </View>

              <View style={styles.tutCard}>
                <View style={styles.tutTimeContainer}>
                  <Text style={styles.tutTime}>25 min 05 sec</Text>
                </View>
                <Image style={styles.tutImage} source={Maria} />
                <View style={styles.tutInfoContainer}>
                  <Text style={styles.tutInfoH}>Driving Clinic</Text>
                  <Text style={styles.tutInfoM}>Master Driving Skills</Text>
                  <Text style={styles.tutInfoL}>
                    Unlock the secrets to powerful and accurate drives with
                    Maria Rodriguez for maximum and precise distances.
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
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
  backTraining: {
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
  tutorialsHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  tutorialsInfo: {
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
  BSContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 24,
    marginTop: 30,
    marginBottom: 25,
    zIndex: 25
  },
  browseHeader: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 18,
  },
  tutContainer: {
    flexDirection: "row",
    height: 320,
    zIndex: 1,
    position: "relative",
  },
  tutCard: {
    width: 160,
    height: 308,
    borderRadius: 8,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#eaeaea",
    marginRight: 15,
    marginBottom: 140,
    zIndex: 1,
    position: "relative",
  },
  tutTimeContainer: {
    backgroundColor: "#358DD1",
    width: 64,
    height: 24,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 16,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 4,
  },
  tutTime: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 8,
    zIndex: 4,
  },
  tutImage: {
    width: 160,
    height: 216,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    position: "absolute",
  },
  tutInfoContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 86,
    marginBottom: 8,
    padding: 4,
    paddingLeft: 8,
  },
  tutInfoH: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    color: "#202020",
    lineHeight: 24,
  },
  tutInfoM: {
    fontFamily: "Quicksand-Med",
    fontSize: 12,
    color: "#202020",
    lineHeight: 24,
  },
  tutInfoL: {
    fontFamily: "Quicksand-Reg",
    fontSize: 8,
    lineHeight: 12,
  },
  favoritesHeader: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 18,
    marginTop: 25,
    marginBottom: 25,
  },
});

export default Tutorials;
