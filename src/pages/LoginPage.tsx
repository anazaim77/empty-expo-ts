import { RootStackScreenProps } from "@/config/navigator/types";
import { AxiosClient } from "@/config/services";
import { useAuthStore } from "@/config/state";
import { ApiEndpoint } from "@/constants";
import React, { useEffect } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

interface LoginPageProps {}

const LoginPage: React.FC<
  RootStackScreenProps<"Authentication"> & LoginPageProps
> = (props) => {
  const { authToken, isLoggedIn, doLogin } = useAuthStore();

  useEffect(() => {
    if (isLoggedIn) {
      props.navigation.replace("Root");
    }
  }, [isLoggedIn]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>LoginPage</Text>
      <Text>Ini Token : {authToken}</Text>
      <Button
        title={"Coba Login"}
        onPress={() => {
          doLogin("iniCeritanyaToken");
          AxiosClient.get(ApiEndpoint.POSTS).then(() => {
            // console.log("result " + ApiEndpoint.POSTS, result);
          });
        }}
      />
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {},
});
