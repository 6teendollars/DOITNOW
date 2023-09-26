import React from "react";
import { View, Text, Button } from "react-native";

const RegistrationScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Registration Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default RegistrationScreen;
