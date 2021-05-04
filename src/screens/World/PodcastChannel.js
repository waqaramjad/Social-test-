import * as React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import Accordian from "../../components/Accordian/Accordian";
import PodcastCard from "../../components/PodcastCard/PodcastCard";
import StarRating from "react-native-star-rating";
import ShareModal from "../../components/Share/Share";

function PodcastChannel({ navigation }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [show100, setShow100] = React.useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
        style={{ marginVertical: 10, paddingRight: 5 }}
      >
        <Image
          style={{ width: 13, height: 17 }}
          source={require("../../assets/World/arrowBack.png")}
        />
      </TouchableOpacity>
      <ScrollView>
        <View>
          <View style={styles.introSection}>
            <View
              style={[
                styles.row,
                { justifyContent: "space-between", paddingHorizontal: 5 },
              ]}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("FollowProfile")}
                activeOpacity={0.7}
                style={styles.row}
              >
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../assets/World/ball.png")}
                />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.title}>The history of the NBA</Text>
                  <Text style={styles.rate}>Rate this product</Text>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={3}
                    emptyStarColor="red"
                    fullStarColor="red"
                    starSize={14}
                    containerStyle={{ width: 80, marginVertical: 4 }}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.row}>
                <TouchableOpacity
                  onPress={() => setShow100(!show100)}
                  activeOpacity={0.7}
                >
                  {show100 ? (
                    <Image
                      style={{
                        width: 24,
                        height: 20,
                        resizeMode: "stretch",
                      }}
                      source={require("../../assets/Home/active100.png")}
                    />
                  ) : (
                    <Image
                      style={{
                        width: 24,
                        height: 20,
                        resizeMode: "stretch",
                      }}
                      source={require("../../assets/Home/inActive100.png")}
                    />
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  activeOpacity={0.7}
                >
                  <Image
                    style={{
                      width: 16,
                      height: 14,
                      resizeMode: "stretch",
                      marginLeft: 10,
                    }}
                    source={require("../../assets/World/share.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginVertical: 10, paddingRight: 5 }}>
              <Text style={[styles.title, { fontSize: 17 }]}>About</Text>
              <Text
                style={{
                  marginVertical: 4,
                  color: "white",
                  opacity: 0.6,
                  fontSize: 12,
                }}
              >
                Ashley Diaz is joined by a special guests as they discuss the
                past and present on "the history of the NBA" podcast
              </Text>

              <TouchableOpacity>
                <Text style={{ fontSize: 11, color: "#F90202" }}>
                  Read more
                </Text>
              </TouchableOpacity>

              <View style={[styles.line, { marginTop: 20 }]} />
              <View
                style={[
                  styles.row,
                  {
                    justifyContent: "space-between",
                    marginVertical: 15,
                    paddingHorizontal: 3,
                  },
                ]}
              >
                <Text style={styles.title}>Teaser-Description</Text>
                <View style={styles.row}>
                  <Text style={{ fontSize: 13, color: "white", opacity: 0.5 }}>
                    10:02
                  </Text>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      resizeMode: "stretch",
                      marginLeft: 10,
                    }}
                    source={require("../../assets/World/play.png")}
                  />
                </View>
              </View>
              <View style={[styles.line, { height: 0.3 }]} />
              <View style={{ marginVertical: 10 }}>
                <Accordian title="Series 1">
                  <PodcastCard />
                  <PodcastCard />
                  <PodcastCard />
                  <PodcastCard />
                </Accordian>
                <Accordian title="Series 2"></Accordian>
                <Accordian title="Series 3"></Accordian>
                <Accordian title="Series 4"></Accordian>
                <Accordian title="Series 5"></Accordian>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Modal */}

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          onPressOut={() => setModalVisible(!modalVisible)}
          style={styles.modalContainer}
        >
          <View style={styles.modal}>
            <ShareModal onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export default PodcastChannel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: "2%",
    paddingVertical: 10,
  },
  introSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 14,
  },
  rate: {
    color: "white",
    fontSize: 12,
    opacity: 0.7,
  },

  line: {
    width: "100%",
    backgroundColor: "white",
    height: 0.5,
    opacity: 0.6,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  modal: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
