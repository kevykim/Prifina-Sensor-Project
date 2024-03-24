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
    marginBottom: 30,
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
  VAplayTips: {
    height: 219,
    width: 361,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: "center",
  },
  tipText: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 20,
    lineHeight: 18,
    marginBottom: 10,
  },
  VAplayTipsText: {
    fontFamily: "Quicksand-Light",
    fontSize: 12,
    lineHeight: 22,
  },
  VAplayTipsTextBold: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
    lineHeight: 22,
  },
  dotText: {
    marginTop: 2.5,
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
});


export default styles;