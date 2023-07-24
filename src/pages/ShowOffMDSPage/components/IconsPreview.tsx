import { Box, HStackView, Icon, Text } from "@flip.id/mobile-design-system";
import React from "react";

interface IconsPreviewProps {}

const IconsPreview = (props: IconsPreviewProps) => {
  return (
    <Box
      borderWidth={1}
      borderColor="neutralBorder"
      p={"eight"}
      borderRadius="eight"
    >
      <Text bold fontSize="twentyTwo">
        Icon Collection
      </Text>
      <HStackView flexWrap="wrap" space={"four"}>
        <Icon size="twentyEight" color="flipOrange" name="acceptMoney" />
        <Icon size="twentyEight" color="flipOrange" name="accordionDown" />
        <Icon size="twentyEight" color="flipOrange" name="accordionUp" />
        <Icon size="twentyEight" color="flipOrange" name="accountFill" />
        <Icon size="twentyEight" color="flipOrange" name="accountStroke" />
        <Icon size="twentyEight" color="flipOrange" name="add" />
        <Icon size="twentyEight" color="flipOrange" name="addContained" />
        <Icon size="twentyEight" color="flipOrange" name="addMedium" />
        <Icon size="twentyEight" color="flipOrange" name="alarm" />
        <Icon size="twentyEight" color="flipOrange" name="arrowTip" />
        <Icon size="twentyEight" color="flipOrange" name="australia" />
        <Icon size="twentyEight" color="flipOrange" name="axis" />
        <Icon size="twentyEight" color="flipOrange" name="back" />
        <Icon size="twentyEight" color="flipOrange" name="backMedium" />
        <Icon size="twentyEight" color="flipOrange" name="balance" />
        <Icon size="twentyEight" color="flipOrange" name="balanceColorized" />
        <Icon size="twentyEight" color="flipOrange" name="bayar" />
        <Icon size="twentyEight" color="flipOrange" name="beneficiaryList" />
      </HStackView>
    </Box>
  );
};

export default IconsPreview;
