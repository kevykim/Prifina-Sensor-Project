import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useCustomFonts } from "../../../../utils/CustomFonts";

import leftArrow from "../../../../assets/Misc/leftArrow.png";

import Avatar from "../../../../assets/Misc/Avatar.png";

import GreenStar from "../../../../assets/Misc/GreenStar.png";
import GrayStar from "../../../../assets/Misc/GrayStar.png";
import VA from "../../../../assets/Locations/VA.png";

import rain from "../../../../assets/Weather/rain.png";
import golficon from "../../../../assets/Misc/golficon.png";

import { useRoute } from "@react-navigation/native";

function VARegulations({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            style={styles.backBooking}
            onPress={() => navigation.navigate("locate")}
          >
            <Image source={leftArrow} />
            <Text
              style={{
                color: "#AFAFAF",
                fontFamily: "Quicksand-SemiBold",
                fontSize: 12,
              }}
            >
              Locate
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
          onPress={() => navigation.navigate("vaoverview")}
          style={styles.topButtons}
        >
          <Text style={styles.topButtonsText}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("varegulations")}
          style={{
            backgroundColor:
              route.name === "varegulations" ? "#2FDA74" : "#D3D3D3",
            ...styles.topButtons,
          }}
        >
          <Text
            style={{
              color: route.name === "varegulations" ? "white" : "black",
              ...styles.topButtonsText,
            }}
          >
            Regulations
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("vateetimes")}
          style={styles.topButtons}
        >
          <Text style={styles.topButtonsText}>Tee Times</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.VAContainer}>
        <Text style={styles.VAHeader}>Ventura Acres</Text>
        <View style={styles.starContainer}>
          <Image style={styles.starSize} source={GreenStar} />
          <Image style={styles.starSize} source={GreenStar} />
          <Image style={styles.starSize} source={GreenStar} />
          <Image style={styles.starSize} source={GreenStar} />
          <Image style={styles.starSize} source={GrayStar} />
        </View>
      </View>

      <View style={styles.VAImageContainer}>
        <View style={styles.VAPlayedContainer}>
          <Text style={styles.VAPlayedText}>Played 8 times</Text>
        </View>
        <Image style={styles.VABigImage} source={VA} />
      </View>

      <View style={{ height: 100 }}>
        <ScrollView style={styles.VAScrollImageContainer} horizontal>
          <Image source={VA} style={styles.VASImage} />
          <Image source={VA} style={styles.VASImage} />
          <Image source={VA} style={styles.VASImage} />
          <Image source={VA} style={styles.VASImage} />
          <Image source={VA} style={styles.VASImage} />
        </ScrollView>
      </View>

      <View style={styles.VARegulationsInfo}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.dotText}>•  </Text>
          <Text style={styles.VARegulationsText}>
            Ventura Acres is a par 72, 9-hole golf course featuring mature trees
            and large greens
          </Text>
        </View>
        <View style={{ flexDirection: "row"}}>
          <Text style={styles.dotText}>•  </Text>
          <Text style={styles.VARegulationsText}>
            4.5/5 Golf Digest magazine's "Best Places To Play"
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.dotText}>•  </Text>
          <Text style={styles.VARegulationsText}>
            Lighted driving range and practice facility, and PGA golf
            instruction is offered for players of all ages.
          </Text>
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
  backBooking: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 65,
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
  VAContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  VAHeader: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  starContainer: {
    flexDirection: "row",
    width: 124,
    height: 24,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
  },
  starSize: {
    width: 17,
    height: 17,
  },
  VAImageContainer: {
    width: 361,
    height: 200,
    borderRadius: 8,
  },
  VAPlayedContainer: {
    backgroundColor: "#358DD1",
    width: 104,
    height: 24,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 16,
    padding: 4,
    position: "absolute",
    zIndex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  VAPlayedText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    lineHeight: 16,
  },
  VABigImage: {
    height: 200,
    width: 361,
    borderRadius: 8,
  },
  VAScrollImageContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  VASImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginRight: 10,
  },
  VARegulationsInfo: {
    height: 142,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderStyle: 'solid',
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  VARegulationsText: {
    fontFamily: 'Quicksand-Light',
    fontSize: 12,
    lineHeight: 22,
  },
  dotText: {
    marginTop: 2.5
  }
});

export default VARegulations;
