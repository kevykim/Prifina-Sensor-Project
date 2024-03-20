
import { StyleSheet } from "react-native";


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
  backLocate: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 62,
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
  VAImageContainer: {
    width: 361,
    height: 200,
    borderRadius: 8,
  },
  VAPlayedContainer: {
    backgroundColor: "#358DD1",
    width: 104,
    height: 24,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 16,
    padding: 4,
    position: "absolute",
    zIndex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  VAPlayedText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    lineHeight: 16,
  },
  VABigImage: {
    height: 200,
    width: 361,
    borderRadius: 8,
  },
  VAScrollImageContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  VASImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginRight: 10,
  },
  readReviewsButton: {
    backgroundColor: "#2FDA74",
    height: 40,
    width: 361,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 25,
  },
  readReviewButtonText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 22,
  },
  CMContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 68,
    borderBottomWidth: 0.7,
    borderColor: "#AFAFAF",
  },
  CMLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    width: 200,
  },
  golfIconSize: {
    marginTop: 5,
    width: 38,
    height: 38,
  },
  CMInnerBox: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 38,
  },
  CMInnerBoxTop: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 20,
  },
  CMInnerBoxBot: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 16,
  },
  CMRight: {
    width: 90,
    height: 40,
    fontFamily: "Quicksand-Med",
    fontSize: 12,
    lineHeight: 20,
    color: "#AFAFAF",
    textAlign: "right",
    paddingRight: 8,
  },

  VAWeatherContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 104,
    marginTop: 5,
    marginBottom: 200,
  },
  VAWeatherInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  VAWTextTop: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
    lineHeight: 20,
  },
  VAWTextBot: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    lineHeight: 20,
    width: 270,
  },
  weatherBox: {
    width: 80,
    height: 88,
    backgroundColor: "#F1F1F1",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  weatherImage: {
    width: 56,
    height: 56,
    objectFit: "contain",
  },
});


export default styles;