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

import styles from "../PlaySummaryStyles";

function PlayPRSummary({ navigation, route }) {
  const fontsLoaded = useCustomFonts();

  const { propDate } = route?.params || {};

  if (!fontsLoaded) {
    return null;
  }

  const [month, day, year] = propDate.split(".");

  const formattedDate = `${year}.${month}.${day}`;

  const [showSave, setShowSave] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={styles.backHome}
              onPress={() =>
                navigation.navigate("playprsround", { propDate: propDate })
              }
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
            propKey={"PR"}
            propScore={"96"}
            propDate={propDate}
            propName={"Pine Ridge"}
            propTime={"7 hr 16 min"}
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
              <Text style={styles.SCHeaderText}>
                Pine Ridge {month}/{day}/{year}
              </Text>
              <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>Download</Text>
                <Image source={download} />
              </TouchableOpacity>
            </View>

            <View style={styles.scoreChart}>
              <View style={styles.scoreChartHeaderContainer}>
                <View style={styles.scoreChartHLeft}>
                  <Text style={styles.scoreChartHLeftGray}>7 hr 16 min</Text>
                  <Text style={styles.scoreChartHLeftBlack}>18 holes</Text>
                </View>
                <Text style={styles.scoreChartHRight}>96</Text>
              </View>

              <View style={styles.ASCContainer}>
                <View style={styles.ASCContainerRowFirst}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Hole</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>2</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>3</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>6</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>7</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>8</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCTextBold}>9</Text>
                  </View>
                </View>

                <View style={styles.ASCContainerRowSecond}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Handicap</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>14</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>11</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>12</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>17</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>16</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>15</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>10</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>13</Text>
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
                    <Text style={styles.ASCText}>4</Text>
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
                    <Text style={styles.ASCText}>3</Text>
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
                    <Text style={styles.ASCText}>+3</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+2</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+2</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+3</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+1</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+2</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>+3</Text>
                  </View>
                </View>
              </View>

              <View style={{ ...styles.ASCContainer, marginBottom: 5 }}>
                <View style={styles.ASCContainerRowFirst}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Hole</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>10</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>11</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>12</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>13</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>14</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>15</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>16</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCTextBold}>17</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCTextBold}>18</Text>
                  </View>
                </View>

                <View style={styles.ASCContainerRowSecond}>
                  <View style={styles.ASCLabel}>
                    <Text style={styles.ASCTextBold}>Handicap</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>9</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>7</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>6</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>12</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>11</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>10</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>5</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>8</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>4</Text>
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
                    <Text style={styles.ASCText}>4</Text>
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
                    <Text style={styles.ASCText}>3</Text>
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
                    <Text style={styles.ASCText}>+2</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+3</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+3</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+2</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+4</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+2</Text>
                  </View>
                  <View style={styles.ASCBorderRight}>
                    <Text style={styles.ASCText}>+3</Text>
                  </View>
                  <View style={styles.ASCBorderLast}>
                    <Text style={styles.ASCText}>+4</Text>
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

export default PlayPRSummary;
