import { ModalExample } from "@/components/modals";
import { useAuthStore } from "@/config/state";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  const { authToken } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <Text>Ini Token : {authToken}</Text>

      <Text style={{ fontSize: 24 }}>Text biasa</Text>
      <Text style={{ fontSize: 24, fontFamily: "Lato_400Regular" }}>
        Text pakai lato
      </Text>

      <Text style={{ fontFamily: "ProximaNova-Black" }}>
        Text pakai ProximaNova-Black
      </Text>
      <Text
        style={{
          fontFamily: "ProximaNova-BlackIt",
        }}
      >
        Text pakai ProximaNova-BlackIt
      </Text>

      <Text style={{ fontFamily: "ProximaNova-Bold" }}>
        Text pakai ProximaNova-Bold
      </Text>
      <Text
        style={{
          fontFamily: "ProximaNova-BoldIt",
        }}
      >
        Text pakai ProximaNova-BoldIt
      </Text>

      <Text style={{ fontFamily: "ProximaNova-Extrabld" }}>
        Text pakai ProximaNova-Extrabld
      </Text>
      <Text
        style={{
          fontFamily: "ProximaNova-ExtrabldIt",
        }}
      >
        Text pakai ProximaNova-ExtrabldIt
      </Text>

      <Text style={{ fontFamily: "ProximaNova-Light" }}>
        Text pakai ProximaNova-Light
      </Text>
      <Text
        style={{
          fontFamily: "ProximaNova-LightIt",
        }}
      >
        Text pakai ProximaNova-LightIt
      </Text>

      <Text style={{ fontFamily: "ProximaNova-Medium" }}>
        Text pakai ProximaNova-Medium
      </Text>
      <Text
        style={{
          fontFamily: "ProximaNova-MediumIt",
        }}
      >
        Text pakai ProximaNova-MediumIt
      </Text>

      <Text style={{ fontFamily: "ProximaNova-Regular" }}>
        Text pakai ProximaNova-Regular
      </Text>
      <Text
        style={{
          fontFamily: "ProximaNova-RegularIt",
        }}
      >
        Text pakai ProximaNova-RegularIt
      </Text>

      <Text style={{ fontFamily: "ProximaNova-Semibold" }}>
        Text pakai ProximaNova-Semibold
      </Text>
      <Text
        style={{
          fontFamily: "ProximaNova-SemiboldIt",
        }}
      >
        Text pakai ProximaNova-SemiboldIt
      </Text>

      <Text style={{ fontFamily: "ProximaNova-Thin" }}>
        Text pakai ProximaNova-Thin
      </Text>
      <Text
        style={{
          fontFamily: "ProximaNova-ThinIt",
        }}
      >
        Text pakai ProximaNova-ThinIt
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
