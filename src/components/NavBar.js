import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";

import BookingIcon from '../assets/NavIcons/BookingIcon.png'
import TrainingIcon from '../assets/NavIcons/TrainingIcon.png'
import ScorecardIcon from '../assets/NavIcons/ScorecardIcon.png'
import HomeIcon from '../assets/NavIcons/HomeIcon.png'
import PlayIcon from '../assets/NavIcons/PlayIcon.png'








import { useCustomFonts } from "../utils/CustomFonts";
import TrainingStack from "../screens/TrainingScreens/TrainingStack";
import ScorecardStack from "../screens/Scorecard/Scorecardstack";
import BookingStack from "../screens/BookingScreens/BookingStack";
import PlayStack from "../screens/PlayScreens/PlayStack";
import HomeStack from "../screens/HomeScreens/HomeStack";


const Tab = createBottomTabNavigator();

function NavBar () {

   const fontsLoaded = useCustomFonts();
   if (!fontsLoaded) {
     return null;
   }

    
    return (
      <React.Fragment>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: styles.nav,
            headerShown: false,
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            options={{
              // source={focused ? :}
              tabBarIcon: ({ focused }) => (
                <View style={styles.navContainer}>
                  <Image
                    source={HomeIcon}
                    style={[
                      styles.navIcon,
                      { tintColor: focused ? "white" : "black" },
                    ]}
                  />
                  <Text
                    style={{
                      color: focused ? "white" : "black",
                      fontSize: 8,
                      fontFamily: "Quicksand-SemiBold",
                    }}
                  >
                    Home
                  </Text>
                </View>
              ),
            }}
            name="Home"
            component={HomeStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.navContainer}>
                  <Image
                    source={TrainingIcon}
                    style={[
                      styles.navIcon,
                      { tintColor: focused ? "white" : "black" },
                    ]}
                  />
                  <Text
                    style={{
                      color: focused ? "white" : "black",
                      fontSize: 8,
                      fontFamily: "Quicksand-SemiBold",
                    }}
                  >
                    Training
                  </Text>
                </View>
              ),
            }}
            name="Training"
            component={TrainingStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.halfCircle}>
                  <View style={styles.actionBtn}>
                    <Image
                      source={PlayIcon}
                      style={[
                        styles.navIcon,
                        { tintColor: focused ? "white" : "black" },
                      ]}
                    />
                    <Text
                      style={{
                        color: focused ? "white" : "black",
                        fontSize: 12,
                        position: "absolute",
                        top: 70,
                        fontFamily: "Quicksand-SemiBold",
                      }}
                    >
                      Play
                    </Text>
                  </View>
                </View>
              ),
            }}
            name="Play"
            component={PlayStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.navContainer}>
                  <Image
                    source={BookingIcon}
                    style={[
                      styles.navIcon,
                      { tintColor: focused ? "white" : "black" },
                    ]}
                  />
                  <Text
                    style={{
                      color: focused ? "white" : "black",
                      fontSize: 8,
                      fontFamily: "Quicksand-SemiBold",
                    }}
                  >
                    Booking
                  </Text>
                </View>
              ),
            }}
            name="Booking"
            component={BookingStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.navContainer}>
                  <Image
                    source={ScorecardIcon}
                    style={[
                      styles.navIcon,
                      { tintColor: focused ? "white" : "black" },
                    ]}
                  />
                  <Text
                    style={{
                      color: focused ? "white" : "black",
                      fontSize: 8,
                      fontFamily: "Quicksand-SemiBold",
                    }}
                  >
                    Scorecard
                  </Text>
                </View>
              ),
            }}
            name="Scorecard"
            component={ScorecardStack}
          />
        </Tab.Navigator>
        {/* <TouchableOpacity style={styles.fab}>
          <Image source={PlayIcon} style={styles.fabIcon} />
        </TouchableOpacity>

        <View style={styles.curve} /> */}
      </React.Fragment>
    );
  };
  
  const styles = StyleSheet.create({
    nav: {
      backgroundColor: "#2FDA74",
      position: "absolute",
      borderTopWidth: 0,
      height: 72,
      bottom: 25,
      left: 30,
      width: 336,
      right: 30,
      borderRadius: 25,
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    navContainer: {
      alignItems: "center",
      justifyContent: "space-between",
      height: 40,
      top: 15,
    },
    navIcon: {},
    halfCircle: {
      position: "absolute",
      alignSelf: "center",
      backgroundColor: "white",
      width: 70,
      height: 70,
      borderRadius: 35,
      bottom: 5,
      zIndex: 10,
    },
    actionBtn: {
      backgroundColor: "#2FDA74",
      width: 60,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
      position: "absolute",
      bottom: 20,
      right: 0,
      top: 5,
      left: 5,
      borderWidth: 5,
      borderColor: "transparent",
    },
  });




export default NavBar;