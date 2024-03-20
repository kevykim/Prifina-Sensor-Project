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

import rain from "../../../../assets/Weather/rain.png";
import golficon from "../../../../assets/Misc/golficon.png";

import { useRoute } from "@react-navigation/native";

import styles from '../OverviewStyles.js'

function NHOverview({ navigation }) {
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
            style={{
              backgroundColor:
                route.name === "nhoverview" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "nhoverview" ? "white" : "black",
                ...styles.topButtonsText,
              }}
            >
              Overview
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("nhregulations")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Regulations</Text>
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

        <TouchableOpacity style={styles.readReviewsButton}>
          <Text style={styles.readReviewButtonText}>Read Reviews</Text>
        </TouchableOpacity>

        <View style={styles.CMContainer}>
          <View style={styles.CMLeft}>
            <Image style={styles.golfIconSize} source={golficon} />
            <View style={styles.CMInnerBox}>
              <Text style={styles.CMInnerBoxTop}>Course maintenance</Text>
              <Text style={styles.CMInnerBoxBot}>
                Course opens at 11 a.m.
              </Text>
            </View>
          </View>
          <Text style={styles.CMRight}>Please plan accordingly</Text>
        </View>

        <View style={styles.VAWeatherContainer}>
          <Image source={rain} />
          <View style={styles.VAWeatherInfo}>
            <Text style={styles.VAWTextTop}>Weather Impact</Text>
            <Text style={styles.VAWTextBot}>
              Sunny weather promises clear skies and optimal playing conditions.
              Remember to stay hydrated and wear sunscreen!
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}


export default NHOverview;
