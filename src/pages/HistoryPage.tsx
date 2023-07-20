import { Button, Text } from "@flip.id/mobile-design-system";
import * as React from "react";
import { View, StyleSheet } from "react-native";

interface HistoryPageProps {}

const HistoryPage = (props: HistoryPageProps) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="black">ProximaNova-Black</Text>
      <Text fontWeight="black" fontStyle="italic">
        ProximaNova-BlackIt
      </Text>
      <Button onPress={() => {}}> asik</Button>
    </View>
  );
};

export default HistoryPage;

const styles = StyleSheet.create({
  container: {},
});
