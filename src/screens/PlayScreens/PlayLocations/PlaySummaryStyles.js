import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    flexDirection: "column",
    padding: 15,
    backgroundColor: "white",
  },
  container: {
    marginTop: 55,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backHome: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 60,
    justifyContent: "space-between",
  },
  nameHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  saveButtonText: {
    fontFamily: "Quicksand-Bold",
    fontSize: 16,
    lineHeight: 24,
    color: "#2FDA74",
  },

  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 30,
  },
  summaryText: {
    fontFamily: "Quicksand-Med",
    fontSize: 32,
  },
  dateText: {
    fontFamily: "Quicksand-Med",
    fontSize: 12,
    lineHeight: 16,
    color: "#AFAFAF",
  },

  summaryInfo: {
    backgroundColor: "#2FDA74",
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 25,
  },
  summaryInfoText: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
    lineHeight: 22,
    color: "white",
  },

  percInfoC: {
    height: 254,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#D3D3D3",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 32.5,
    marginBottom: 15,
  },
  PICard: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 65,
  },
  PICardHeader: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
    textAlign: "center",
  },
  PICardInner: {
    flexDirection: "column",
    height: 40,
    justifyContent: "space-between",
  },
  PICardBold: {
    fontFamily: "Quicksand-Bold",
    fontSize: 32,
    textAlign: "center",
  },
  PICardText: {
    fontFamily: "Quicksand-Med",
    fontSize: 12,
    textAlign: "center",
  },
  PICardTextWhite: {
    fontFamily: "Quicksand-Med",
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
  PICardBDrkG: {
    width: 56,
    height: 16,
    backgroundColor: "#AFAFAF",
    borderRadius: 8,
    paddingLeft: 4,
    paddingRight: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  PICardBG: {
    width: 56,
    height: 16,
    backgroundColor: "#D3D3D3",
    borderRadius: 8,
    paddingLeft: 4,
    paddingRight: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  PICardBBlue: {
    width: 56,
    height: 16,
    backgroundColor: "#358DD1",
    borderRadius: 8,
    paddingLeft: 4,
    paddingRight: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  SCHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 20,
  },
  SCHeaderText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 16,
    lineHeight: 24,
  },
  downloadButton: {
    backgroundColor: "#358DD1",
    height: 24,
    width: 98,
    borderRadius: 4,
    padding: 4,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  downloadButtonText: {
    color: "white",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
  },
  scoreChart: {
    backgroundColor: "#F1F1F1",
    width: 361,
    height: 400,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  scoreChartHeaderContainer: {
    height: 62,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  scoreChartHLeft: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 42,
  },
  scoreChartHLeftGray: {
    color: "#AFAFAF",
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
  },
  scoreChartHLeftBlack: {
    fontFamily: "Quicksand-Med",
    fontSize: 16,
  },

  scoreChartHRight: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 48,
  },

  ASCContainer: {
    height: 145,
  },
  ASCContainerRowFirst: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.3,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderColor: "#AFAFAF",
  },
  ASCContainerRowSecond: {
    flexDirection: "row",
    alignItems: "center",
    borderRightWidth: 0.3,
    borderLeftWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: "#AFAFAF",
  },
  ASCContainerRowThird: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderColor: "#AFAFAF",
  },
  ASCLabel: {
    borderRightWidth: 0.3,
    width: 75,
    height: 32,
    justifyContent: "center",
    paddingLeft: 12,
    borderColor: "#AFAFAF",
  },
  ASCTextBold: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 12,
  },
  ASCText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 12,
  },
  ASCBorderRight: {
    borderRightWidth: 0.3,
    width: 26.5,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#AFAFAF",
  },
  ASCBorderLast: {
    width: 26.5,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  BPBDContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  BPBDCard: {
    width: 45,
    height: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  BPBDCardMid: {
    width: 31,
    height: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  BPBDCardLast: {
    width: 80,
    height: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  BPBDText: {
    fontFamily: "Quicksand-Reg",
    fontSize: 10,
  },
  boxGreen: {
    backgroundColor: "#2FDA74",
    borderRadius: 2,
    width: 8,
    height: 8,
  },
  boxDrkGreen: {
    borderRadius: 2,
    width: 8,
    height: 8,
    backgroundColor: "#1B6E3C",
  },
  boxGray: {
    borderRadius: 2,
    width: 8,
    height: 8,
    backgroundColor: "#AFAFAF",
  },
  boxDrkGray: {
    borderRadius: 2,
    width: 8,
    height: 8,
    backgroundColor: "#202020",
  },
});



export default styles;