import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/pages/Login/LoginScreen";
import RegistrationScreen from "./src/pages/Registration/RegistrationScreen";
import MainScreen from "./src/pages/Main/MainScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false, // Hide the header on the "Login" screen
        }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
