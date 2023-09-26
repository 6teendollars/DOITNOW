import React, { useState } from "react";
import {
  NativeBaseProvider,
  Input,
  Stack,
  Icon,
  Pressable,
  Button,
  Text,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import MainScreen from "../Main/MainScreen";

const LoginScreen = ({ navigation }) => {
  const [show, setShow] = React.useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  const getBackgroundColor = () => {
    return isLightTheme ? "white" : "black";
  };

  return (
    <NativeBaseProvider>
      <Stack
        space={4}
        w="100%"
        top={"30%"}
        alignItems="center"
        _light={{
          bg: getBackgroundColor(), // Set background color based on the theme
        }}
        _dark={{
          bg: getBackgroundColor(), // Set background color based on the theme
        }}
      >
        <Input
          size="lg"
          placeholder="lg Input"
          variant="rounded"
          w={{
            base: "70%",
            md: "25%",
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="person" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="Name"
        />
        <Input
          variant="rounded"
          size="lg"
          placeholder="lg Input"
          w={{
            base: "70%",
            md: "25%",
          }}
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
          placeholder="Password"
        />
        <Button onPress={toggleTheme}>
          <Text>Toggle Theme ({isLightTheme ? "Light" : "Dark"})</Text>
        </Button>
      </Stack>
    </NativeBaseProvider>
  );
};

export default LoginScreen;
