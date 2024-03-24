import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    flexDirection: "column",
  },
  container: {
    marginTop: 35,
  },
  header: {
    zIndex: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    width: "100%",
    position: "absolute",
  },
  backPlay: {
    flexDirection: "row",
    alignItems: "center",
    width: 48,
    justifyContent: "space-between",
  },
  hamburgerContainer: {
    width: 30,
    height: 30,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  leftInfo: {
    flexDirection: "column",
    width: 136,
    height: 378,
    justifyContent: "space-between",
    top: 80,
    left: 15,
  },
  leftInfoCards: {
    width: 85,
    height: 65,
    borderRadius: 8,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center",
  },
  LICTop: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 24,
    color: "#9E9E9E",
  },
  LICBot: {
    fontFamily: "Quicksand-Bold",
    fontSize: 20,
  },
  scoreCardButton: {
    height: 56,
    width: 136,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2FDA74",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginTop: 25,
  },
  scoreCardButtonText: {
    color: "white",
    fontFamily: "Quicksand-Bold",
    fontSize: 20,
  },
});



export default styles;