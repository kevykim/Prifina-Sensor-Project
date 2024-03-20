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
import PR from "../../../../assets/Locations/PR.jpg";

import rain from "../../../../assets/Weather/rain.png";
import golficon from "../../../../assets/Misc/golficon.png";

import { useRoute } from "@react-navigation/native";
import styles from '../OverviewStyles.js';

function PROverview({ navigation }) {
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
            onPress={() => navigation.navigate("proverview")}
            style={{
              backgroundColor:
                route.name === "proverview" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "proverview" ? "white" : "black",
                ...styles.topButtonsText,
              }}
            >
              Overview
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("prregulations")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Regulations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("prteetimes")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Tee Times</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.VAContainer}>
          <Text style={styles.VAHeader}>Pine Ridge</Text>
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
            <Text style={styles.VAPlayedText}>Played 5 times</Text>
          </View>
          <Image style={styles.VABigImage} source={PR} />
        </View>

        <View style={{ height: 100 }}>
          <ScrollView
            style={styles.VAScrollImageContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Image source={PR} style={styles.VASImage} />
            <Image source={PR} style={styles.VASImage} />
            <Image source={PR} style={styles.VASImage} />
            <Image source={PR} style={styles.VASImage} />
            <Image source={PR} style={styles.VASImage} />
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.readReviewsButton}>
          <Text style={styles.readReviewButtonText}>Read Reviews</Text>
        </TouchableOpacity>

        <View style={styles.CMContainer}>
          <View style={styles.CMLeft}>
            <Image style={styles.golfIconSize} source={golficon} />
            <View style={styles.CMInnerBox}>
              <Text style={styles.CMInnerBoxTop}>Course Hours Today</Text>
              <Text style={styles.CMInnerBoxBot}>
                Open from 9 a.m - 8 p.m
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
              80% chance of heavy rain between 11 a.m and 3 p.m Rain can affect swing
              and distance, plan for adjustments
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}


export default PROverview;
