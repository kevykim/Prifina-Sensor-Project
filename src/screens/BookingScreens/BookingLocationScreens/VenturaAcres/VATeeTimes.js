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

import { Calendar, LocaleConfig } from "react-native-calendars";

import { useRoute } from "@react-navigation/native";
import { useState } from "react";

function VATeeTimes({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();

  const [selected, setSelected] = useState("");
  const [timeSelect, setTimeSelect] = useState(false)

  if (!fontsLoaded) {
    return null;
  }

  const fakeTime = [
    { id: 1, time: "9:00 a.m.", selected: false },
    { id: 2, time: "9:30 a.m.", selected: true },
    { id: 3, time: "10:00 a.m.", selected: true },
    { id: 4, time: "10:30 a.m.", selected: false },
    { id: 5, time: "11:00 a.m.", selected: true },
    { id: 6, time: "11:30 a.m.", selected: false },
    { id: 7, time: "12:00 p.m.", selected: false },
    { id: 8, time: "12:30 p.m.", selected: false },
    { id: 9, time: "1:00 p.m.", selected: false },
    { id: 10, time: "1:30 p.m.", selected: false },
    { id: 11, time: "2:00 p.m.", selected: false },
    { id: 12, time: "2:30 p.m.", selected: false },
    { id: 13, time: "3:00 p.m.", selected: false },
    { id: 14, time: "3:30 p.m.", selected: false },
    { id: 15, time: "4:00 p.m.", selected: false },
    { id: 16, time: "4:30 p.m.", selected: false },
    { id: 17, time: "5:00 p.m.", selected: false },
  ];

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            style={styles.backBooking}
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
          onPress={() => navigation.navigate("vaoverview")}
          style={styles.topButtons}
        >
          <Text style={styles.topButtonsText}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("varegulations")}
          style={styles.topButtons}
        >
          <Text style={styles.topButtonsText}>Regulations</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("vateetimes")}
          style={{
            backgroundColor:
              route.name === "vateetimes" ? "#2FDA74" : "#D3D3D3",
            ...styles.topButtons,
          }}
        >
          <Text
            style={{
              color: route.name === "vateetimes" ? "white" : "black",
              ...styles.topButtonsText,
            }}
          >
            Tee Times
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.VAContainer}>
        <Text style={styles.VAHeader}>Ventura Acres</Text>
        <View style={styles.starContainer}>
          <Image style={styles.starSize} source={GreenStar} />
          <Image style={styles.starSize} source={GreenStar} />
          <Image style={styles.starSize} source={GreenStar} />
          <Image style={styles.starSize} source={GreenStar} />
          <Image style={styles.starSize} source={GrayStar} />
        </View>
      </View>

      <Text style={styles.selectDate}>Select Date</Text>

      <Calendar
        style={styles.calendar}
        theme={{
          arrowColor: "#B0B7C1",
          textSectionTitleColor: "#B0B7C1",
          selectedDayBackgroundColor: "#2FDA74",
          todayTextColor: "#2FDA74",
          textDayFontFamily: "Quicksand-Med",
          textMonthFontFamily: "Quicksand-Med",
          textDayHeaderFontFamily: "Quicksand-Med",
          textMonthFontSize: 16,
          textDayFontSize: 16,
          textDayHeaderFontSize: 14,

          "stylesheet.calendar.header": {
            week: {
              marginTop: 5,
              flexDirection: "row",
              justifyContent: "space-around",
              borderTopWidth: 1,
              borderColor: "#CED2D8",
              paddingTop: 12,
            },
          },
          "stylesheet.day.basic": {
            selected: {
              backgroundColor: "#2FDA74",
              borderRadius: 10,
              shadowColor: "#2FDA74",
              shadowOffset: { width: 1, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 7,
            },
            // today: {
            //   backgroundColor: "#2FDA74",
            //   borderRadius: 8,
            // },
            // todayText: {
            //     color: 'white'
            // }
          },
        }}
        onDayPress={(day) => {
          setSelected(day.dateString);

          const month = day.month;
          const today = day.day;
          const year = day.year;

          const currentDate = `${month}/${today}/${year}`;

          const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];

          //   let monthName = months[month - 1];

          //   setDate(`${monthName} ${today}, ${year}`);

          //   setCurrentDate(currentDate);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
          },
        }}
      />

      <Text style={styles.availTeeTimes}>Available Tee Times</Text>
      <View style={styles.AVTContainer}>
        <View style={(timeSelect === false) ? styles.AVTCards : styles.AVTCardsSelected}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.AVTText}>09:00 a.m.</Text>
          <TouchableOpacity onPress={() => setTimeSelect(!timeSelect)}>
            <View style={(timeSelect === false) ? styles.AVTCircle : styles.AVTCircleGreen}></View>
          </TouchableOpacity>
            </View>
            { timeSelect && 
            <TouchableOpacity onPress={() => navigation.navigate('success')} style={styles.confirmTeeTime}>
                <Text style={styles.confirmTeeTimeText}>Confirm tee time</Text>
            </TouchableOpacity>
            }
        </View>
         <View style={styles.AVTCardsGray}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.AVTTextGray}>10:00 a.m.</Text>
            <View style={styles.AVTCircleGray}></View>
            </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    flexDirection: "column",
    marginTop: 55,
    padding: 15,

  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backBooking: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 65,
    justifyContent: "space-between",
  },
  nameHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 150,
  },
  topButtonContainer: {
    width: 361,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topButtons: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    width: 112,
    height: 32,
    borderRadius: 6,
    padding: 8,
    alignItems: "center",
  },
  topButtonsText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
  },
  VAContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  VAHeader: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  starContainer: {
    flexDirection: "row",
    width: 124,
    height: 24,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
  },
  starSize: {
    width: 17,
    height: 17,
  },
  selectDate: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  calendar: {
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 9,
    paddingLeft: 25,
    paddingRight: 25,
    shadowColor: "gray",
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    width: 361,
    height: 373,
  },
  availTeeTimes: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 25,
    marginBottom: 10,
  },
  AVTContainer: {
    flexDirection: "column",
    marginBottom: 200,
  },
  AVTCards: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 40,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    marginBottom: 10,
  },
  AVTCardsSelected: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 96,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    backgroundColor: "#2FDA7426",
    marginBottom: 10,
  },
  AVTCardsGray: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 40,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 16,
    backgroundColor: "#D3D3D3",
    marginBottom: 10,
  },
  AVTCircleGray: {
    width: 24,
    height: 24,
    borderRadius: 25,
    backgroundColor: "#AFAFAF",
  },
  AVTTextGray: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
    color: "#AFAFAF",
  },
  AVTCircle: {
    width: 24,
    height: 24,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  AVTCircleGreen: {
    width: 24,
    height: 24,
    borderRadius: 25,
    backgroundColor: "#2FDA74",
  },
  AVTText: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 24,
  },
  confirmTeeTime: {
    backgroundColor: "#2FDA74",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  confirmTeeTimeText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default VATeeTimes;
