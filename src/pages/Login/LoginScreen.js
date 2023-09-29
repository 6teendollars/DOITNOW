import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import SocialButtons from "../../components/SocialButtons/SocialButtons.js";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
      <Text style={styles.welcomeText}>
        Welcome back! We've missed your presence here
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your password"
          placeholderTextColor="#003f5c"
          secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={toggleShowPassword}
          style={styles.toggleButton}
        >
          <MaterialIcons
            name={showPassword ? "visibility" : "visibility-off"}
            size={22}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

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
        Don’t have an account?{" "}
        <Text
          style={styles.boldText}
          onPress={() => navigation.navigate("Registration")}
        >
          Register Now
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

    marginBottom: 38,
  },
  inputView: {
    backgroundColor: "#F7F8F9",
    borderRadius: 8,
    width: 331,
    height: 56,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    paddingLeft: 20,
  },
  TextInput: {
    color: "black",
    height: 60,
    flex: 1,
    paddingLeft: 17,
  },
  toggleButton: {
    position: "absolute",
    top: 17,
    right: 17,
  },
  forgot_button: {
    paddingLeft: 210,
    color: "black",
    marginBottom: 30,
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
    marginTop: 150,
    marginLeft: 40,
  },
  boldText: {
    fontWeight: "bold",
    color: "black", // You can set your desired color for the clickable text
  },
});

export default LoginScreen;
