import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BookingIcon from '../../assets/NavIcons/BookingIcon.png'
import CoachIcon from '../../assets/NavIcons/CoachIcon.png'
import HistoryIcon from '../../assets/NavIcons/HistoryIcon.png'
import HomeIcon from '../../assets/NavIcons/HomeIcon.png'
import PlayIcon from '../../assets/NavIcons/PlayIcon.png'


import HomePage from '../screens/HomePage';
import Coach from '../screens/Coach';
import Play from '../screens/Play';
import Book from '../screens/Book';
import History from '../screens/History';


const Tab = createBottomTabNavigator();

function NavBar () {

    
    return (
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
                <Image source={HomeIcon} style={[styles.navIcon, {tintColor: focused ? "white" : 'black'} ]} />
                <Text style={{ color: focused ? "white" : 'black', fontSize: 8 }}>Home</Text>
              </View>
            ),
          }}
          name="Home"
          component={HomePage}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.navContainer}>
                <Image source={CoachIcon} style={[styles.navIcon, {tintColor: focused ? "white" : 'black'} ]} />
                <Text style={{ color: focused ? "white" : 'black', fontSize: 8 }}>Coach</Text>
              </View>
            ),
          }}
          name="Coach"
          component={Coach}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (

              <View style={styles.halfCircle}>
                <View style={ styles.actionBtn}>
                <Image source={PlayIcon} style={[styles.navIcon, {tintColor: focused ? "white" : 'black'} ]} />
                <Text style={{ color: focused ? "white" : 'black', fontSize: 12, position: 'absolute', top: 70 }}>Play</Text>
                </View>
              </View>
            ),
          }}
          name="Play"
          component={Play}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.navContainer}>
                <Image source={BookingIcon} style={[styles.navIcon, {tintColor: focused ? "white" : 'black'} ]} />
                <Text style={{ color: focused ? "white" : 'black', fontSize: 8 }}>Book</Text>
              </View>
            ),
          }}
          name="Book"
          component={Book}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.navContainer}>
                <Image source={HistoryIcon} style={[styles.navIcon, {tintColor: focused ? "white" : 'black'} ]} />
                <Text style={{ color: focused ? "white" : 'black', fontSize: 8 }}>History</Text>
              </View>
            ),
          }}
          name="History"
          component={History}
        />
    </Tab.Navigator>    
    );
  };
  
  const styles = StyleSheet.create({
    nav: {
      backgroundColor: "#2FDA74",
      position: "relative",
      height: 72,
      elevation: 0,
      bottom: 25,
      left: 30,
      width: 336,
      right: 30,
      borderRadius: 25,
         shadowColor: 'black',
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
      borderWidth: 1,
      borderColor: "#white",
    },
  });




export default NavBar;