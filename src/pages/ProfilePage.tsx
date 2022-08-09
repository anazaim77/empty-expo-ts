import { RootStackScreenProps } from "@/config/navigator/types";
import { useAuthStore } from "@/config/state";
import React, { useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

interface ProfilePageProps {}

const ProfilePage: React.FC<RootStackScreenProps<"Root"> & ProfilePageProps> = (
  props
) => {
  const { doLogout, isLoggedIn } = useAuthStore();

  useEffect(() => {
    if (!isLoggedIn) {
      props.navigation.replace("Authentication");
    }
  }, [isLoggedIn]);

  return (
    <View style={styles.container}>
      <Text>ProfilePage</Text>
      <Button title="Logout" onPress={doLogout} />
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {},
});
