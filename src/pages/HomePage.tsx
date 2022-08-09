import { ModalExample } from "@/components/modals";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <ModalExample />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {},
});
