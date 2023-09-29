import React from "react";
import { View, Text, Button } from "react-native";

const MainScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Main Screen</Text>
      <Button
        title="Go to HomePage"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default MainScreen;
