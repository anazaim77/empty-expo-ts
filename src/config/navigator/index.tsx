import {
  HistoryPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
} from "@/pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, RootTabParamList } from "./types";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Authentication"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="TabOne">
      <BottomTab.Screen
        name="TabOne"
        component={HomePage}
        options={{ headerShown: true }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={HistoryPage}
        options={{ headerShown: true }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={ProfilePage}
        options={{ headerShown: true }}
      />
    </BottomTab.Navigator>
  );
}
