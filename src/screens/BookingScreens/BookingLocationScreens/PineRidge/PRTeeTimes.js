import {
  View,
  ScrollView,
  Text,
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

import styles from '../TeeTimesStyles.js';
import fakeTime from '../FakeTime.js';

function PRTeeTimes({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();

  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1
  const day = today.getDate() 

  const formattedDate = `${year}-${month}-${day}`;

  const [selected, setSelected] = useState(formattedDate);
  const [selectedTimeId, setSelectedTimeId] = useState(null);

  const handleTimeSlotSelection = (id) => {
    setSelectedTimeId(id === selectedTimeId ? null : id);
  };


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
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("prregulations")}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Regulations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("prteetimes")}
            style={{
              backgroundColor:
                route.name === "prteetimes" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: route.name === "prteetimes" ? "white" : "black",
                ...styles.topButtonsText,
              }}
            >
              Tee Times
            </Text>
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.AVTContainer}
        >
          {fakeTime.map((fake) => (
            <View
              key={fake.id}
              style={
                fake.booked
                  ? styles.AVTCardsGray
                  : selectedTimeId === fake.id
                  ? styles.AVTCardsSelected
                  : styles.AVTCards
              }
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.AVTText}>{fake.time}</Text>
                <TouchableOpacity
                  onPress={() => handleTimeSlotSelection(fake.id)}
                >
                  <View
                    style={
                      selectedTimeId === fake.id
                        ? styles.AVTCircleGreen
                        : styles.AVTCircle
                    }
                  ></View>
                </TouchableOpacity>
              </View>
              {selectedTimeId === fake.id && (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("success", {
                      propDate: selected,
                      propTime: fake.time,
                      currScreen: "pr",
                    })
                  }
                  style={styles.confirmTeeTime}
                >
                  <Text style={styles.confirmTeeTimeText}>
                    Confirm tee time
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

export default PRTeeTimes;
