import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import { useCustomFonts } from "../../utils/CustomFonts";

import leftArrow from "../../assets/Misc/leftArrow.png";

import Avatar from "../../assets/Misc/Avatar.png";


import { useFakeDates } from "../../context/FakeDates";


import { useRoute } from "@react-navigation/native";


function BookingSuccess({ navigation, route }) {
    const { propDate, propTime, currScreen, propName, propImage } = route?.params || {};

  const fontsLoaded = useCustomFonts();
  const current = useRoute();

  const dateParts = propDate.split('-');
const year = dateParts[0];
const monthIndex = parseInt(dateParts[1], 10) - 1; 
const day = parseInt(dateParts[2], 10);


const date = new Date(year, monthIndex, day);


const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


const monthName = monthNames[date.getMonth()];
const formattedDay = date.getDate();
const formattedYear = date.getFullYear();

const formattedDate = `${monthName} ${formattedDay}, ${formattedYear}`;

  if (!fontsLoaded) {
    return null;
  }

  const { addFakeDate, fakeDates } = useFakeDates()

  const month = dateParts[1]
  const shortDate = `${month}.${day}.${year}`

  const addToCalendar = () => {
    Alert.alert("Added to your calendar")
    addFakeDate(propName, shortDate, propTime, currScreen, propImage)
  }


  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={styles.backBooking}
              onPress={() => navigation.navigate("booking")}
            >
              <Image source={leftArrow} />
              <Text
                style={{
                  color: "#AFAFAF",
                  fontFamily: "Quicksand-SemiBold",
                  fontSize: 12,
                }}
              >
                Booking
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
            onPress={() => navigation.navigate(`${currScreen}overview`)}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(`${currScreen}regulations`)}
            style={styles.topButtons}
          >
            <Text style={styles.topButtonsText}>Regulations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("success")}
            style={{
              backgroundColor:
                current.name === "success" ? "#2FDA74" : "#D3D3D3",
              ...styles.topButtons,
            }}
          >
            <Text
              style={{
                color: current.name === "success" ? "white" : "black",
                ...styles.topButtonsText,
              }}
            >
              Tee Times
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.successHeader}>Success</Text>

        <View style={styles.successInfo}>
          <Text style={styles.successInfoTop}>
            You have successfully reserved a tee time at {propTime} on{" "}
            {formattedDate}. Your tee time is now available under the Play tab.
          </Text>
          <Text style={styles.successInfoBot}>
            If you would like make accommodations please use the fields below.
          </Text>
        </View>

        <TouchableOpacity
          onPress={addToCalendar}
          style={styles.addToCalendarButton}
        >
          <Text style={styles.addToCalendarButtonText}>Add to Calendar</Text>
        </TouchableOpacity>

        <View style={styles.helpContainer}>
          <Text style={styles.helpText}>Help</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.returnHomeButton}
          >
            <Text style={styles.returnHomeText}>Return Home</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rescheduleContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(`${currScreen}teetimes`)}
            style={styles.rescheduleButton}
          >
            <Text style={styles.rescheduleButtonText}>Reschedule</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("locate")}
            style={styles.cancelButton}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    flexDirection: "column",
    padding: 15,
    backgroundColor: 'white'
  },
  container: {
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backBooking: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 69,
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
  successHeader: {
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 32,
  },
  successInfo: {
    height: 223,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  successInfoTop: {
    fontFamily: "Quicksand-Reg",
    fontSize: 16,
    lineHeight: 32,
  },
  successInfoBot: {
    fontFamily: "Quicksand-Reg",
    fontSize: 16,
    lineHeight: 32,
  },
  addToCalendarButton: {
    height: 40,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 12,
    paddingLeft: 12,
    backgroundColor: "#2FDA74",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 25,
  },
  addToCalendarButtonText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 22,
  },
  helpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  helpText: {
    fontFamily: "Quicksand-Med",
    fontSize: 18,
    lineHeight: 24,
  },
  returnHomeButton: {
    height: 24,
    backgroundColor: "#358DD1",
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 8,
    paddingLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  returnHomeText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    lineHeight: 16,
  },
  rescheduleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  rescheduleButton: {
    height: 40,
    backgroundColor: "#2FDA74",
    width: 235,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  rescheduleButtonText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
  },
  cancelButton: {
    height: 40,
    backgroundColor: "#D3D3D3",
    width: 120,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
  },
});

export default BookingSuccess;
