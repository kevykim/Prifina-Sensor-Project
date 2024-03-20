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
import NH from "../../../../assets/Locations/NH.png";

import styles from '../RegulationsStyles.js'

import { useRoute } from "@react-navigation/native";

function NHRegulations({ navigation }) {
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
              style={styles.backLocate}
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
            onPress={() => navigation.navigate("nhoverview")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("nhregulations")}
            style={{
              backgroundColor:
                route.name === "nhregulations" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "nhregulations" ? "white" : "black",
                ...styles.topButtonsText,
              }}
            >
              Regulations
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("nhteetimes")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Tee Times</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.VAContainer}>
          <Text style={styles.VAHeader}>North Hill</Text>
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
          <Image style={styles.VABigImage} source={NH} />
        </View>

        <View style={{ height: 100 }}>
          <ScrollView
            style={styles.VAScrollImageContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Image source={NH} style={styles.VASImage} />
            <Image source={NH} style={styles.VASImage} />
            <Image source={NH} style={styles.VASImage} />
            <Image source={NH} style={styles.VASImage} />
            <Image source={NH} style={styles.VASImage} />
          </ScrollView>
        </View>

        <View style={styles.VARegulationsInfo}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.dotText}>• </Text>
            <Text style={styles.VARegulationsText}>
              North Hill is a par 72, 18-hole golf course featuring large greens and scenic mountains
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.dotText}>• </Text>
            <Text style={styles.VARegulationsText}>
              Scenic fairways winding through lush, rolling terrain
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.dotText}>• </Text>
            <Text style={styles.VARegulationsText}>
              Elevated greens providing exciting approach shots and putting
              challenges
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}



export default NHRegulations;
