import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}