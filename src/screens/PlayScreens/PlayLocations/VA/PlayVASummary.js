import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useCustomFonts } from "../../../../utils/CustomFonts";
import download from "../../../../assets/Misc/download.png";

import { useState } from "react";
import ScoreSave from "../../../../utils/ScoreSave";

function PlayVASummary({ navigation }) {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  }

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  const [showSave, setShowSave] = useState(false)

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={styles.backHome}
              onPress={() => navigation.navigate("playvacourse")}
            >
              <Text
                style={{
                  color: "#AFAFAF",
                  fontFamily: "Quicksand-SemiBold",
                  fontSize: 12,
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontFamily: "Quicksand-Bold",
              fontSize: 20,
              marginRight: 22,
            }}
          >
            End Round
          </Text>
          <TouchableOpacity onPress={() => setShowSave(true)}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>

        {showSave && (
          <ScoreSave
            modalShown={showSave}
            closeModal={setShowSave}
            navigation={navigation}
            navVar={"homemyscore"}
          />
        )}

        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Summary</Text>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </View>

        <View style={styles.summaryInfo}>
          <Text style={styles.summaryInfoText}>
            Great game! Green, landing, and putting scored lower than your
            average.
          </Text>
        </View>

        <View style={styles.percInfoC}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.PICard}>
              <Text style={styles.PICardHeader}>Strike</Text>
              <View style={styles.PICardInner}>
                <Text style={styles.PICardBold}>108</Text>
                <View style={styles.PICardBDrkG}>
                  <Text style={styles.PICardText}>Average</Text>
                </View>
              </View>
            </View>
            <View style={styles.PICard}>
              <Text style={styles.PICardHeader}>Distance</Text>
              <View style={styles.PICardInner}>
                <Text style={styles.PICardBold}>180</Text>
                <View style={styles.PICardBBlue}>
                  <Text style={styles.PICardTextWhite}>Great!</Text>
                </View>
              </View>
            </View>
            <View style={styles.PICard}>
              <Text style={styles.PICardHeader}>Strike</Text>
              <View style={styles.PICardInner}>
                <Text style={styles.PICardBold}>
                  60
                  <Text
                    style={{
                      fontFamily: "Quicksand-Bold",
                      fontSize: 12,
                      color: "#AFAFAF",
                    }}
                  >
                    %
                  </Text>
                </Text>
                <View style={styles.PICardBBlue}>
                  <Text style={styles.PICardTextWhite}>Great!</Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <View style={styles.PICard}>
              <Text style={styles.PICardHeader}>On Green</Text>
              <View style={styles.PICardInner}>
                <Text style={styles.PICardBold}>
                  40
                  <Text
                    style={{
                      fontFamily: "Quicksand-Bold",
                      fontSize: 12,
                      color: "#AFAFAF",
                    }}
                  >
                    %
                  </Text>
                </Text>
                <View style={styles.PICardBG}>
                  <Text style={styles.PICardText}>Practice</Text>
                </View>
              </View>
            </View>
            <View style={styles.PICard}>
              <Text style={styles.PICardHeader}>PAR Save</Text>
              <View style={styles.PICardInner}>
                <Text style={styles.PICardBold}>
                  25
                  <Text
                    style={{
                      fontFamily: "Quicksand-Bold",
                      fontSize: 12,
                      color: "#AFAFAF",
                    }}
                  >
                    %
                  </Text>
                </Text>
                <View style={styles.PICardBBlue}>
                  <Text style={styles.PICardTextWhite}>Average</Text>
                </View>
              </View>
            </View>
            <View style={styles.PICard}>
              <Text style={styles.PICardHeader}>Putting</Text>
              <View style={styles.PICardInner}>
                <Text style={styles.PICardBold}>3.2</Text>
                <View style={styles.PICardBG}>
                  <Text style={styles.PICardText}>Practice</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 150 }}>
          <View>
            <View style={styles.SCHeader}>
              <Text style={styles.SCHeaderText}>Ventura Acres 3/23/24</Text>
              <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>Download</Text>
                <Image source={download} />
              </TouchableOpacity>
            </View>

            <View style={styles.scoreChart}>
              <View style={styles.scoreChartHeaderContainer}>
                <View style={styles.scoreChartHLeft}>
                  <Text style={styles.scoreChartHLeftGray}>5 hr 16 min</Text>
                  <Text style={styles.scoreChartHLeftBlack}>Front 9</Text>
                </View>
                <Text style={styles.scoreChartHRight}>108</Text>
              </View>

              <View style={styles.ASCContainer}>
                <View style={styles.ASCContainerRowFirst}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Hole</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>2</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>3</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>6</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>7</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>8</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>9</Text>
                  </View>
                </View>

                <View style={styles.ASCContainerRowSecond}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Par</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>3</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                </View>
                <View style={styles.ASCContainerRowThird}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Score</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>0</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>0</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>0</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>+2</Text>
                  </View>
                </View>
              </View>

              <View style={{ ...styles.ASCContainer, marginBottom: 3 }}>
                <View style={styles.ASCContainerRowFirst}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Hole</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>10</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>11</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>12</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>13</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>14</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>15</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>16</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>17</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>18</Text>
                  </View>
                </View>

                <View style={styles.ASCContainerRowSecond}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Par</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>3</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>4</Text>
                  </View>
                </View>
                <View style={styles.ASCContainerRowThird}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Score</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>0</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>0</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>0</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>+2</Text>
                  </View>
                </View>
              </View>

              <View style={styles.BPBDContainer}>
                <View style={styles.BPBDCard}>
                  <View style={styles.boxGreen}></View>
                  <Text style={styles.BPBDText}>Buddy</Text>
                </View>

                <View style={styles.BPBDCardMid}>
                  <View style={styles.boxDrkGreen}></View>
                  <Text style={styles.BPBDText}>Par</Text>
                </View>

                <View style={styles.BPBDCard}>
                  <View style={styles.boxGray}></View>
                  <Text style={styles.BPBDText}>Bogey</Text>
                </View>

                <View style={styles.BPBDCardLast}>
                  <View style={styles.boxDrkGray}></View>
                  <Text style={styles.BPBDText}>Double Bogey</Text>
                </View>
              </View>
            </View>
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
    height: 323,
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
    height: 108,
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

export default PlayVASummary;
