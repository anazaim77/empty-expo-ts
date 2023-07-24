import { Box, Button, Text, VStackView } from "@flip.id/mobile-design-system";
import React from "react";

interface ButtonsPreviewProps {}

const ButtonsPreview = (props: ButtonsPreviewProps) => {
  return (
    <Box
      borderWidth={1}
      borderColor="neutralBorder"
      p={"eight"}
      borderRadius="eight"
    >
      <Text bold fontSize="twentyTwo">
        Button Collection
      </Text>
      <VStackView space={"eight"}>
        <Button variant={"primary"}>primary</Button>
        <Button variant={"secondary"}>secondary</Button>
        <Button variant={"tertiary"}>tertiary</Button>
        <Button variant={"ghost"}>ghost</Button>
      </VStackView>
    </Box>
  );
};

export default ButtonsPreview;
