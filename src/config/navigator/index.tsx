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
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { reactQueryClient } from "../services/QueryClient";
import { RootStackParamList, RootTabParamList } from "./types";
import { addPlugin } from "react-query-native-devtools";

export default function Navigation() {
  useEffect(() => {
    if (__DEV__) {
      addPlugin({ queryClient: reactQueryClient });
    }
  }, []);

  return (
    <QueryClientProvider client={reactQueryClient}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
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
