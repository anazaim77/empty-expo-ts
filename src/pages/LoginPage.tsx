import { RootStackScreenProps } from "@/config/navigator/types";
import { useAuthStore } from "@/config/state";
import { StorageUtils } from "@/utils";
import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
} from "react-native";

interface LoginPageProps {}

const LoginPage: React.FC<
  RootStackScreenProps<"Authentication"> & LoginPageProps
> = (props) => {
  const { authToken, isLoggedIn, doLogin } = useAuthStore();
  const auth_token_mmkv = StorageUtils.getString("AUTH_TOKEN");

  useEffect(() => {
    if (isLoggedIn) {
      props.navigation.replace("Root");
    }
  }, [isLoggedIn]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>LoginPage</Text>
      <Text>
        Ini Token : {authToken} {auth_token_mmkv}
      </Text>
      <Button
        title={"Coba Login"}
        onPress={() => {
          doLogin("iniCeritanyaToken");
        }}
      />
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {},
});
