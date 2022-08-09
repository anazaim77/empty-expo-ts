import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface ProfilePageProps {}

const ProfilePage = (props: ProfilePageProps) => {
  return (
    <View style={styles.container}>
      <Text>ProfilePage</Text>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {},
});
