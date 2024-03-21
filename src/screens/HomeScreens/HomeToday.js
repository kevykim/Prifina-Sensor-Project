import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useCustomFonts } from "../../utils/CustomFonts";


import Avatar from "../../assets/Misc/Avatar.png";
import updateIcon from "../../assets/Misc/updateIcon.png";
import sunnyIcon from "../../assets/Weather/sunnyIcon.png";
import greenSunny from "../../assets/Weather/greenSunny.png";
import daytime from '../../assets/Weather/daytime.png';
import night from '../../assets/Weather/night.png'
import sun from '../../assets/Weather/sun.png'
import moon from '../../assets/Weather/moon.png'
import airplane from '../../assets/Weather/airplane.png'

import Carousel from "pinar";

import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";

function HomeToday({navigation}) {
  const route = useRoute();

  const fontsLoaded = useCustomFonts();

  const newDay = new Date();
  const month = newDay.getMonth() + 1;
  const day = newDay.getDate();
  const shortDate = `${month}.${day}`;

  const weatherTimes = [
    { id: 1, time: 1, degree: 60, hour: "AM" },
    { id: 2, time: 2, degree: 59, hour: "AM" },
    { id: 3, time: 3, degree: 56, hour: "AM" },
    { id: 4, time: 4, degree: 55, hour: "AM" },
    { id: 5, time: 5, degree: 54, hour: "AM" },
    { id: 6, time: 6, degree: 54, hour: "AM" },
    { id: 7, time: 7, degree: 59, hour: "AM" },
    { id: 8, time: 8, degree: 61, hour: "AM" },
    { id: 9, time: 9, degree: 65, hour: "AM" },
    { id: 10, time: 10, degree: 68, hour: "AM" },
    { id: 11, time: 11, degree: 70, hour: "AM" },
    { id: 12, time: 12, degree: 72, hour: "PM" },
    { id: 13, time: 1, degree: 73, hour: "PM" },
    { id: 14, time: 2, degree: 74, hour: "PM" },
    { id: 15, time: 3, degree: 75, hour: "PM" },
    { id: 16, time: 4, degree: 76, hour: "PM" },
    { id: 17, time: 5, degree: 75, hour: "PM" },
    { id: 18, time: 6, degree: 74, hour: "PM" },
    { id: 19, time: 7, degree: 72, hour: "PM" },
    { id: 20, time: 8, degree: 70, hour: "PM" },
    { id: 21, time: 9, degree: 68, hour: "PM" },
    { id: 22, time: 10, degree: 65, hour: "PM" },
    { id: 23, time: 11, degree: 64, hour: "PM" },
    { id: 24, time: 12, degree: 63, hour: "AM" },
  ];

  function getCurrentWeatherTimes() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentTimeIndex = currentHour % 12 || 12;
    const currentTimePeriod = currentHour >= 12 ? "PM" : "AM";

    const currentIndex = weatherTimes.findIndex(
      (time) =>
        time.time === currentTimeIndex && time.hour === currentTimePeriod
    );

    const nextWeatherTimes = [
      ...weatherTimes.slice(currentIndex),
      ...weatherTimes.slice(0, 5 - (weatherTimes.length - currentIndex)),
    ];

    return nextWeatherTimes;
  }

  const currentWeatherTimes = getCurrentWeatherTimes();
  const currentDegreeMap = currentWeatherTimes.map(el => el.degree)
  const currentHourArr = [...currentWeatherTimes]
  const currentHour = currentHourArr.shift()


  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        {/* <Text>Home</Text> */}
        <View style={styles.homeHeaderContainerShadow}>
          <LinearGradient
            colors={["#13A14C", "#30DA74", "#2FDA74", "#13A14C"]}
            style={styles.homeHeaderContainer}
          >
            <View style={styles.homeAvatarContainer}>
              <Text style={styles.homeAvatarName}>Andy Haynes</Text>
              <Image source={Avatar} />
            </View>

            <View style={styles.updateContainer}>
              <Image source={updateIcon} />
              <View>
                <Text style={styles.updateContainerTextTop}>
                  You achieved 2 strokes less than the last game.
                </Text>
                <Text style={styles.updateContainerTextBot}>
                  Good job on improving your skill every day!
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.homeButtonsContainer}>
          <TouchableOpacity style={styles.HBCards}>
            <Image
              source={route.name === "hometoday" ? greenSunny : sunnyIcon}
            />
            <Text
              style={{
                color: route.name === "hometoday" ? "#2FDA74" : "black",
                ...styles.HBCBot,
              }}
            >
              Today
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homecalendar");
            }}
            style={styles.HBCards}
          >
            <Text style={styles.HBCTop}>{shortDate}</Text>
            <Text style={styles.HBCBot}>Calendar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homemyscore");
            }}
            style={styles.HBCards}
          >
            <Text style={styles.HBCTop}>102</Text>
            <Text style={styles.HBCBot}>My Score</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homeperformance");
            }}
            style={{ ...styles.HBCards, width: 80 }}
          >
            <View style={styles.HBCSpan}>
              <Text style={styles.HBCTop}>10 </Text>
              <Text style={styles.HBCTopSpan}> HCP</Text>
            </View>
            <Text style={styles.HBCBot}>Performance</Text>
          </TouchableOpacity>
        </View>

        <Carousel
          showsControls={false}
          height={420}
          renderDots={({ index, total }) => (
            <View style={styles.dotsContainer}>
              <Image
                source={airplane}
                style={{
                  tintColor: index === 0 ? "white" : "#AFAFAF",
                  marginRight: 2,
                }}
              />
              <View
                style={{
                  ...styles.dotStyle,
                  backgroundColor: index === 1 ? "white" : "#AFAFAF",
                }}
              ></View>
              <View
                style={{
                  ...styles.dotStyle,
                  backgroundColor: index === 2 ? "white" : "#AFAFAF",
                }}
              ></View>
            </View>
          )}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ height: 420, borderRadius: 8, width: 361 }}
              source={
                currentHour.time > 7 && currentHour.hour === "PM"
                  ? night
                  : currentHour.time === 12 && currentHour.hour === "AM"
                  ? night
                  : currentHour.time < 6 && currentHour.hour === "AM"
                  ? night
                  : daytime
              }
            />
            <View style={styles.weatherInfo}>
              <Text style={styles.currentLocation}>Current Location</Text>
              <View style={styles.degreeBox}>
                <Text style={styles.degree}>{currentDegreeMap[0]}°</Text>
                <Text style={styles.currentInfo}>
                  {currentHour.time > 7 && currentHour.hour === "PM"
                    ? "Mostly Clear"
                    : currentHour.time === 12 && currentHour.hour === "AM"
                    ? "Mostly Clear"
                    : currentHour.time < 6 && currentHour.hour === "AM"
                    ? "Mostly Clear"
                    : "Sunny"}
                </Text>
              </View>
              <View
                style={{
                  ...styles.weatherRow,
                  backgroundColor:
                    currentHour.time > 7 && currentHour.hour === "PM"
                      ? "#24283c"
                      : currentHour.time === 12 && currentHour.hour === "AM"
                      ? "#24283c"
                      : currentHour.time < 6 && currentHour.hour === "AM"
                      ? "#24283c"
                      : "#358DD1",
                }}
              >
                <View style={styles.weatherCard}>
                  <Text style={styles.weatherText}>Now</Text>
                  <Image
                    source={
                      currentHour.time > 7 && currentHour.hour === "PM"
                        ? moon
                        : currentHour.time === 12 && currentHour.hour === "AM"
                        ? moon
                        : currentHour.time < 6 && currentHour.hour === "AM"
                        ? moon
                        : sun
                    }
                  />
                  <Text style={{ ...styles.weatherText, marginLeft: 5 }}>
                    {currentDegreeMap[0]}°
                  </Text>
                </View>
                {currentWeatherTimes.slice(1).map((el) => (
                  <View style={styles.weatherCard} key={el.id}>
                    <Text style={styles.weatherText}>{el.time}</Text>
                    <Image
                      source={
                        currentHour.time > 7 && currentHour.hour === "PM"
                          ? moon
                          : currentHour.time === 12 && currentHour.hour === "AM"
                          ? moon
                          : currentHour.time < 6 && currentHour.hour === "AM"
                          ? moon
                          : sun
                      }
                    />
                    <Text style={{ ...styles.weatherText, marginLeft: 5 }}>
                      {el.degree}°
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ height: 420, borderRadius: 8, width: 361 }}
              source={
                currentHour.time > 7 && currentHour.hour === "PM"
                  ? night
                  : currentHour.time === 12 && currentHour.hour === "AM"
                  ? night
                  : currentHour.time < 6 && currentHour.hour === "AM"
                  ? night
                  : daytime
              }
            />
            <View style={styles.weatherInfo}>
              <Text style={styles.currentLocation}>New York</Text>
              <View style={styles.degreeBox}>
                <Text style={styles.degree}>{currentDegreeMap[0]}°</Text>
                <Text style={styles.currentInfo}>
                  {currentHour.time > 7 && currentHour.hour === "PM"
                    ? "Mostly Clear"
                    : currentHour.time === 12 && currentHour.hour === "AM"
                    ? "Mostly Clear"
                    : currentHour.time < 6 && currentHour.hour === "AM"
                    ? "Mostly Clear"
                    : "Sunny"}
                </Text>
              </View>
              <View
                style={{
                  ...styles.weatherRow,
                  backgroundColor:
                    currentHour.time > 7 && currentHour.hour === "PM"
                      ? "#24283c"
                      : currentHour.time === 12 && currentHour.hour === "AM"
                      ? "#24283c"
                      : currentHour.time < 6 && currentHour.hour === "AM"
                      ? "#24283c"
                      : "#358DD1",
                }}
              >
                <View style={styles.weatherCard}>
                  <Text style={styles.weatherText}>Now</Text>
                  <Image
                    source={
                      currentHour.time > 7 && currentHour.hour === "PM"
                        ? moon
                        : currentHour.time === 12 && currentHour.hour === "AM"
                        ? moon
                        : currentHour.time < 6 && currentHour.hour === "AM"
                        ? moon
                        : sun
                    }
                  />
                  <Text style={{ ...styles.weatherText, marginLeft: 5 }}>
                    {currentDegreeMap[0]}°
                  </Text>
                </View>
                {currentWeatherTimes.slice(1).map((el) => (
                  <View style={styles.weatherCard} key={el.id}>
                    <Text style={styles.weatherText}>{el.time}</Text>
                    <Image
                      source={
                        currentHour.time > 7 && currentHour.hour === "PM"
                          ? moon
                          : currentHour.time === 12 && currentHour.hour === "AM"
                          ? moon
                          : currentHour.time < 6 && currentHour.hour === "AM"
                          ? moon
                          : sun
                      }
                    />
                    <Text style={{ ...styles.weatherText, marginLeft: 5 }}>
                      {el.degree}°
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ height: 420, borderRadius: 8, width: 361 }}
              source={
                currentHour.time > 7 && currentHour.hour === "PM"
                  ? night
                  : currentHour.time === 12 && currentHour.hour === "AM"
                  ? night
                  : currentHour.time < 6 && currentHour.hour === "AM"
                  ? night
                  : daytime
              }
            />
            <View style={styles.weatherInfo}>
              <Text style={styles.currentLocation}>Florida</Text>
              <View style={styles.degreeBox}>
                <Text style={styles.degree}>{currentDegreeMap[0]}°</Text>
                <Text style={styles.currentInfo}>
                  {currentHour.time > 7 && currentHour.hour === "PM"
                    ? "Mostly Clear"
                    : currentHour.time === 12 && currentHour.hour === "AM"
                    ? "Mostly Clear"
                    : currentHour.time < 6 && currentHour.hour === "AM"
                    ? "Mostly Clear"
                    : "Sunny"}
                </Text>
              </View>
              <View
                style={{
                  ...styles.weatherRow,
                  backgroundColor:
                    currentHour.time > 7 && currentHour.hour === "PM"
                      ? "#24283c"
                      : currentHour.time === 12 && currentHour.hour === "AM"
                      ? "#24283c"
                      : currentHour.time < 6 && currentHour.hour === "AM"
                      ? "#24283c"
                      : "#358DD1",
                }}
              >
                <View style={styles.weatherCard}>
                  <Text style={styles.weatherText}>Now</Text>
                  <Image
                    source={
                      currentHour.time > 7 && currentHour.hour === "PM"
                        ? moon
                        : currentHour.time === 12 && currentHour.hour === "AM"
                        ? moon
                        : currentHour.time < 6 && currentHour.hour === "AM"
                        ? moon
                        : sun
                    }
                  />
                  <Text style={{ ...styles.weatherText, marginLeft: 5 }}>
                    {currentDegreeMap[0]}°
                  </Text>
                </View>
                {currentWeatherTimes.slice(1).map((el) => (
                  <View style={styles.weatherCard} key={el.id}>
                    <Text style={styles.weatherText}>{el.time}</Text>
                    <Image
                      source={
                        currentHour.time > 7 && currentHour.hour === "PM"
                          ? moon
                          : currentHour.time === 12 && currentHour.hour === "AM"
                          ? moon
                          : currentHour.time < 6 && currentHour.hour === "AM"
                          ? moon
                          : sun
                      }
                    />
                    <Text style={{ ...styles.weatherText, marginLeft: 5 }}>
                      {el.degree}°
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

        </Carousel>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    flexDirection: "column",
    backgroundColor: "white",
    padding: 15,
  },
  container: {
    marginTop: 50,
  },
  homeHeaderContainer: {
    height: 128,
    width: 361,
    borderRadius: 16,
    padding: 16,
  },
  homeHeaderContainerShadow: {
    shadowColor: "#2FDA74AB",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 3,
    shadowRadius: 18.84,
  },
  homeAvatarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  homeAvatarName: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 24,
    lineHeight: 24,
    color: "white",
  },
  updateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    width: 305,
  },
  updateContainerTextTop: {
    fontFamily: "Quicksand-Med",
    fontSize: 12,
    lineHeight: 20,
    color: "white",
  },
  updateContainerTextBot: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 20,
    color: "white",
  },
  homeButtonsContainer: {
    height: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
    paddingRight: 12,
    paddingLeft: 12,
    marginBottom: 25,
  },
  HBCards: {
    width: 56,
    height: 48,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HBCSpan: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HBCTop: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
  },
  HBCTopSpan: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 15,
  },
  HBCBot: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
  },

  weatherInfo: {
    position: "absolute",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 25,
    height: 325,
  },

  currentLocation: {
    fontFamily: "Quicksand-Reg",
    fontSize: 24,
    color: "white",
  },

  degreeBox: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
  },
  degree: {
    fontFamily: "Quicksand-Reg",
    fontSize: 48,
    color: "white",
    marginLeft: 10,
  },
  currentInfo: {
    fontFamily: "Quicksand-Reg",
    fontSize: 16,
    color: "white",
  },

  weatherRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 304,
    height: 97,
    marginTop: 25,
    borderRadius: 10,
    padding: 6,
  },
  weatherCard: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: 40,
    padding: 5
  },
  weatherText: {
    color: "white",
    fontFamily: "Quicksand-Bold",
    fontSize: 12,
  },
  dotsContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dotStyle: {
    backgroundColor: "#D3D3D3",
    borderRadius: 100,
    width: 6,
    height: 6,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    marginBottom: 2,
  },
});

export default HomeToday;
