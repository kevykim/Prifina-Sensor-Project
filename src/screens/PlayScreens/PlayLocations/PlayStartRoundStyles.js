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
  backPlay: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 48,
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
    position: "absolute",
    top: 600,
    height: 42,
    width: 361,
    backgroundColor: "#2FDA74",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  beginButtonText: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    color: "white",
  },
});


export default styles;