import { StyleUtils } from "@/utils";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";

interface ModalExampleProps {}

export const ModalExample = (props: ModalExampleProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const _handleOpen = () => setModalVisible(true);
  const _handleClose = () => setModalVisible(false);

  return (
    <>
      <Button title="Buka Modal" onPress={_handleOpen} />
      <Modal
        isVisible={isModalVisible}
        deviceWidth={StyleUtils.deviceWidth}
        deviceHeight={StyleUtils.deviceHeight}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: "white",
              padding: 21,
              borderRadius: 16,
            }}
          >
            <Text>I am the modal content!</Text>
            <Button title="Tutup Modal" onPress={_handleClose} />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalExample;

const styles = StyleSheet.create({
  container: {},
});
