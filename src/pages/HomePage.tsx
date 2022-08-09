import { ModalExample } from "@/components/modals";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <Text style={{ fontSize: 24 }}>Text biasa</Text>
      <Text style={{ fontSize: 24, fontFamily: "Lato_400Regular" }}>
        Text pakai lato
      </Text>
      <Feather name="home" size={24} color="black" />
      <ModalExample />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {},
});
