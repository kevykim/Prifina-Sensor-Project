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

import Carousel from "pinar";

import distance from "../../../../assets/Misc/distance.png";
import windspeed from "../../../../assets/Misc/windspeed.png";

import styles from "../PlayStartRoundStyles";

import React, { useEffect, useState } from "react";

import startingRoundObj from "../StartingRoundObject";


function PlayOCSRound({ navigation }) {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  const [carouselRender, setCarouselRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarouselRendered(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

    const [currentCourseId, setCurrentCourseId] = useState(1); 

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
        {carouselRender && (
          <Carousel
            style={{ position: "absolute", top: 25 }}
            controlsContainerStyle={{
              position: "absolute",
              right: 0,
              top: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            controlsButtonStyle={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              height: 80,
            }}
            width={361}
            showsDots={false}
            showsControls={true}
            onIndexChanged={({ index, total }) => {
              setCurrentCourseId(index + 1);
            }}
          >
            {startingRoundObj.map((course) => (
              <View key={course.id} style={styles.startingRoundCards}>
                <Text style={styles.SRHoleText}>Hole {course.id}</Text>
                <View style={styles.SRHoleContainer}>
                  <View style={styles.SRLeft}>
                    <Text style={styles.SRLeftHeader}>PAR {course.par}</Text>

                    <View style={styles.SRLeftF}>
                      <View style={styles.blueCircle}>
                        <Image source={distance} />
                      </View>
                      <Text style={styles.SRLeftTopText}>
                        {course.distance} yds
                      </Text>
                      <Text style={styles.SRLeftBotText}>To Green</Text>
                    </View>

                    <View style={styles.SRLeftM}>
                      <View style={styles.blueCircle}>
                        <Image source={windspeed} />
                      </View>
                      <Text style={styles.SRLeftTopText}>{course.wind}</Text>
                      <Text style={styles.SRLeftBotText}>Wind</Text>
                    </View>

                    <View style={styles.SRLeftL}>
                      <View style={styles.greenCircle}>
                        <Text style={styles.greenCircleText}>Tip</Text>
                      </View>
                      <Text style={styles.SRLeftLText}>{course.tip}</Text>
                    </View>
                  </View>
                  <Image
                    style={{ height: 490, width: 168, objectFit: "cover" }}
                    source={course.image}
                  />
                </View>
              </View>
            ))}
          </Carousel>
        )}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("playoccourse", { propHole: currentCourseId })
          }
          style={styles.beginButton}
        >
          <Text style={styles.beginButtonText}>Begin</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}



export default PlayOCSRound;
