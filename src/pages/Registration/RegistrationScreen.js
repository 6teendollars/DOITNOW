import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SocialButtons from "../../components/SocialButtons/SocialButtons.js";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFacebookLogin = () => {
    // Логика для Facebook логина
  };

  const handleGoogleLogin = () => {
    // Логика для Google логина
  };

  const handleAppleLogin = () => {
    // Логика для Apple логина
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Register to start exploring</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUserName(username)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setEmail(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm password"
          placeholderTextColor="#003f5c"
          onChangeText={(confirmPassword) => setEmail(confirmPassword)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.loginWith}>Or Login with</Text>
      <SocialButtons
        onFacebookPress={handleFacebookLogin}
        onGooglePress={handleGoogleLogin}
        onApplePress={handleAppleLogin}
      />
      <Text style={styles.buttomText}>
        Already have an account?{" "}
        <Text
          style={styles.boldText}
          onPress={() => navigation.navigate("Login")}
        >
          Login Now
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingLeft: 22,
    paddingRight: 22,
    padding: 0,
  },
  welcomeText: {
    color: "#1E232C",
    fontSize: 28,
    fontWeight: 700,
    letterSpacing: -0.28,
    lineHeight: 36,
    marginTop: 125,

    marginBottom: 74,
  },
  inputView: {
    backgroundColor: "#F7F8F9",
    borderRadius: 8,
    width: 331,
    height: 56,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    paddingLeft: 17,
  },
  TextInput: {
    color: "black",
    height: 60,
    flex: 1,
    paddingLeft: 17,
  },
  loginBtn: {
    width: 331,
    borderRadius: 8,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "black",
    marginBottom: 35,
  },
  loginText: {
    color: "white",
    paddingTop: 19,
    paddingBottom: 19,
    paddingLeft: 147,
    paddingRight: 147,
  },
  loginWith: {
    marginLeft: 124,
    marginBottom: 22,
  },
  buttomText: {
    marginTop: 54,
    marginLeft: 40,
  },
  boldText: {
    fontWeight: "bold",
    color: "black", // You can set your desired color for the clickable text
  },
});
export default RegistrationScreen;
