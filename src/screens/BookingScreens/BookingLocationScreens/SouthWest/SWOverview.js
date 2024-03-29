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
import SW from "../../../../assets/Locations/SW.png";

import SW1 from '../../../../assets/SW_Mini/SW1.png'
import SW2 from "../../../../assets/SW_Mini/SW2.png";
import SW3 from "../../../../assets/SW_Mini/SW3.jpg";
import SW4 from "../../../../assets/SW_Mini/SW4.png";


import cloudy from '../../../../assets/Weather/cloudy.png'
import golficon from "../../../../assets/Misc/golficon.png";

import { useRoute } from "@react-navigation/native";
import styles from '../OverviewStyles.js';

import { useState } from "react";



function SWOverview({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();

  if (!fontsLoaded) {
    return null;
  }

   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

   const images = [SW, SW1, SW2, SW3, SW4];

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
            onPress={() => navigation.navigate("swoverview")}
            style={{
              backgroundColor:
                route.name === "swoverview" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "swoverview" ? "white" : "black",
                ...styles.topButtonsText,
              }}
            >
              Overview
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("swregulations")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Regulations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("swteetimes")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Tee Times</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.VAContainer}>
          <Text style={styles.VAHeader}>South West</Text>
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
            <Text style={styles.VAPlayedText}>Played 7 times</Text>
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
                Play limited from 2 - 4 p.m
              </Text>
            </View>
          </View>
          <Text style={styles.CMRight}>Please plan accordingly</Text>
        </View>

        <View style={styles.VAWeatherContainer}>
          <View style={styles.weatherBox}>
            <Image style={styles.weatherImage} source={cloudy} />
          </View>
          <View style={styles.VAWeatherInfo}>
            <Text style={styles.VAWTextTop}>Weather Impact</Text>
            <Text style={styles.VAWTextBot}>
              Cloudy skies until 3 p.m with light wind conditions. Be aware for
              potential changes in wind direction and speed throughout the
              round.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}


export default SWOverview;
