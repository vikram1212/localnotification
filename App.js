import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  Dimensions,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { notifikasi } from "./src/Notifikasi";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#4285f4",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  bg: {
    flex: 1,
    justifyContent: "center",
    width: width,
    height: height * 1.1,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  klikTombol = () => {
    notifikasi.configure();
    notifikasi.buatChannel("1");
    notifikasi.kirimNotifikasiJadwal(
      "1",
      "Hello, Sandeep Sappal Sir",
      "Numeric infosystem Private Limited"
    );
  };
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <ImageBackground
          resizeMode={"cover"}
          source={require("./src/bg.png")}
          style={styles.bg}
        >
          <View
            style={{
              width: width * 0.5,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <TouchableOpacity
              onPress={this.klikTombol}
              style={styles.appButtonContainer}
            >
              <Text style={styles.appButtonText}>Shoot Notification</Text>
            </TouchableOpacity>
            {/* <Button title="Shoot Notification" onPress={this.klikTombol} /> */}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default App;
