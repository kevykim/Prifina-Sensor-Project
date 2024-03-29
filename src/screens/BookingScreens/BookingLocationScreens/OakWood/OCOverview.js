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
import OC from "../../../../assets/Locations/OC.png";

import OC1 from '../../../../assets/OC_Mini/OC1.png'
import OC2 from "../../../../assets/OC_Mini/OC2.png";
import OC3 from "../../../../assets/OC_Mini/OC3.png";
import OC4 from "../../../../assets/OC_Mini/OC4.jpg";


import windy from "../../../../assets/Weather/windy.png";
import golficon from "../../../../assets/Misc/golficon.png";

import { useRoute } from "@react-navigation/native";

import styles from '../OverviewStyles.js';

import { useState } from "react";


function OCOverview({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();

  if (!fontsLoaded) {
    return null;
  }

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const images = [OC, OC1, OC2, OC3, OC4];

    const handleImagePress = (index) => {
      setSelectedImageIndex(index);
    };



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
            onPress={() => navigation.navigate("ocoverview")}
            style={{
              backgroundColor:
                route.name === "ocoverview" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "ocoverview" ? "white" : "black",
                ...styles.topButtonsText,
              }}
            >
              Overview
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ocregulations")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Regulations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("octeetimes")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Tee Times</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.VAContainer}>
          <Text style={styles.VAHeader}>Oakwood Clubs</Text>
          <View style={styles.starContainer}>
            <Image style={styles.starSize} source={GreenStar} />
            <Image style={styles.starSize} source={GreenStar} />
            <Image style={styles.starSize} source={GreenStar} />
            <Image style={styles.starSize} source={GrayStar} />
            <Image style={styles.starSize} source={GrayStar} />
          </View>
        </View>

        <View style={styles.VAImageContainer}>
          <View style={styles.VAPlayedContainer}>
            <Text style={styles.VAPlayedText}>Played 3 times</Text>
          </View>
          <Image
            style={styles.VABigImage}
            source={images[selectedImageIndex]}
          />
        </View>

        <View style={{ height: 100 }}>
          <ScrollView
            style={styles.VAScrollImageContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {images.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleImagePress(index)}
              >
                <Image source={image} style={styles.VASImage} />
              </TouchableOpacity>
            ))}
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
                Play limited unitl 9 a.m.
              </Text>
            </View>
          </View>
          <Text style={styles.CMRight}>Please plan accordingly</Text>
        </View>

        <View style={styles.VAWeatherContainer}>
          <View style={styles.weatherBox}>
            <Image style={styles.weatherImage} source={windy} />
          </View>
          <View style={styles.VAWeatherInfo}>
            <Text style={styles.VAWTextTop}>Weather Impact</Text>
            <Text style={styles.VAWTextBot}>
              Gusty winds between 10 a.m and 6 p.m Anticipate challenges in
              maintaining accuracy and controlling ball flight.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}



export default OCOverview;
