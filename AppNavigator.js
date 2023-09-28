import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./pages/Login/LoginScreen";
import RegistrationScreen from "./pages/Registration/RegistrationScreen";
import MainScreen from "./pages/Main/MainScreen";

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
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
