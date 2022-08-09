import { RootStackScreenProps } from "@/config/navigator/types";
import * as React from "react";
import { Text, View, StyleSheet, Button, SafeAreaView } from "react-native";

interface LoginPageProps {}

const LoginPage: React.FC<
  RootStackScreenProps<"Authentication"> & LoginPageProps
> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>LoginPage</Text>
      <Button
        title={"Go to main page"}
        onPress={() => props.navigation.navigate("Root")}
      />
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {},
});
