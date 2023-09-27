import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  // StatusBar as RNStatusBar,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      {/* <RNStatusBar hidden={true} /> */}
      <Image style={styles.image} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00563B",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "gray",
    borderRadius: 30,
    width: "75%",
    height: 60,
    marginBottom: 20,
    // alignItems: "left",
    paddingLeft: 20,
  },
  TextInput: {
    height: 60,
    flex: 1,
    padding: 5,
  },
  forgot_button: {
    height: 30,
    marginTop: 20,
  },
  loginBtn: {
    width: "75%",
    borderRadius: 30,
    height: 55,
    alignItems: "center",
    // paddingLeft: 120,
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "gray",
  },
});

export default LoginScreen;
