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

import Course from '../../../../assets/Golf/Course.png';
import distance from '../../../../assets/Misc/distance.png'
import windspeed from '../../../../assets/Misc/windspeed.png'

function PlayVASRound({ navigation }) {
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
        >
          <View style={styles.startingRoundCards}>
            <Text style={styles.SRHoleText}>Hole 1</Text>
            <View style={styles.SRHoleContainer}>
              <View style={styles.SRLeft}>
                <Text style={styles.SRLeftHeader}>PAR 4</Text>

                <View style={styles.SRLeftF}>
                  <View style={styles.blueCircle}>
                    <Image source={distance} />
                  </View>
                  <Text style={styles.SRLeftTopText}>402 yds</Text>
                  <Text style={styles.SRLeftBotText}>To Green</Text>
                </View>

                <View style={styles.SRLeftM}>
                  <View style={styles.blueCircle}>
                    <Image source={windspeed} />
                  </View>
                  <Text style={styles.SRLeftTopText}>7 mph</Text>
                  <Text style={styles.SRLeftBotText}>Wind</Text>
                </View>

                <View style={styles.SRLeftL}>
                  <View style={styles.greenCircle}>
                    <Text style={styles.greenCircleText}>Tip</Text>
                  </View>
                  <Text style={styles.SRLeftLText}>
                    On Hole 1, a well-placed tee shot to the right can open up a
                    favorable angle to attack the pin.
                  </Text>
                </View>
              </View>
              <Image source={Course} />
            </View>
          </View>

          <View style={styles.startingRoundCards}>
            <Text style={styles.SRHoleText}>Hole 2</Text>
            <View style={styles.SRHoleContainer}>
              <View style={styles.SRLeft}>
                <Text style={styles.SRLeftHeader}>PAR 4</Text>

                <View style={styles.SRLeftF}>
                  <View style={styles.blueCircle}>
                    <Image source={distance} />
                  </View>
                  <Text style={styles.SRLeftTopText}>402 yds</Text>
                  <Text style={styles.SRLeftBotText}>To Green</Text>
                </View>

                <View style={styles.SRLeftM}>
                  <View style={styles.blueCircle}>
                    <Image source={windspeed} />
                  </View>
                  <Text style={styles.SRLeftTopText}>7 mph</Text>
                  <Text style={styles.SRLeftBotText}>Wind</Text>
                </View>

                <View style={styles.SRLeftL}>
                  <View style={styles.greenCircle}>
                    <Text style={styles.greenCircleText}>Tip</Text>
                  </View>
                  <Text style={styles.SRLeftLText}>
                    On Hole 1, a well-placed tee shot to the right can open up a
                    favorable angle to attack the pin.
                  </Text>
                </View>
              </View>
              <Image source={Course} />
            </View>
          </View>
        </Carousel>
        <TouchableOpacity onPress={() => navigation.navigate('playvacourse')} style={styles.beginButton}>
          <Text style={styles.beginButtonText}>Begin</Text>
        </TouchableOpacity>
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
    width: 50,
    justifyContent: "space-between",
  },
  nameHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 150,
  },

  startRoundButton: {
    height: 42,
    borderRadius: 8,
    backgroundColor: "#2FDA74",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    marginBottom: 155,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  startRoundButtonText: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 22,
    color: "white",
  },
  startingRoundCards: {
    marginTop: 33,
  },
  SRHoleText: {
    fontFamily: "Quicksand-Med",
    fontSize: 32,
    textAlign: "center",
  },
  SRHoleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  SRLeft: {
    flexDirection: "column",
    width: 152,
    height: 450,
    marginTop: 20,
    justifyContent: "space-between",
  },
  SRLeftHeader: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 24,
  },
  SRLeftF: {
    width: 152,
    height: 96,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#F1F1F1",
    borderRadius: 8,
  },
  SRLeftM: {
    width: 152,
    height: 96,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#F1F1F1",
    borderRadius: 8,
  },
  SRLeftL: {
    width: 152,
    height: 124,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 8,
  },
  SRLeftLText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 18,
  },
  SRLeftTopText: {
    fontFamily: "Quicksand-Med",
    fontSize: 32,
  },
  SRLeftBotText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 24,
  },
  blueCircle: {
    width: 32,
    height: 32,
    position: "absolute",
    backgroundColor: "#358DD1",
    borderRadius: 25,
    top: -15,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  greenCircle: {
    width: 32,
    height: 32,
    position: "absolute",
    backgroundColor: "#2FDA74",
    borderRadius: 25,
    top: -20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
    shadowColor: "#A2F6C4",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 3,
    shadowRadius: 14.84,
  },
  greenCircleText: {
    fontFamily: "Quicksand-Bold",
    fontSize: 16,
    color: "white",
  },
  beginButton: {
    position: 'absolute',
    top: 600,
    height: 42,
    width: 361,
    backgroundColor: "#2FDA74",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8
  },
  beginButtonText: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 16,
    color: 'white'
  },
});

export default PlayVASRound;
