import {
  Box,
  HStackView,
  Text,
  VStackView,
} from "@flip.id/mobile-design-system";
import React from "react";

interface TextPreviewProps {}

const TextPreview = (props: TextPreviewProps) => {
  return (
    <Box
      borderWidth={1}
      borderColor="neutralBorder"
      p={"eight"}
      borderRadius="eight"
    >
      <Text bold fontSize="twentyTwo">
        Text Collection
      </Text>
      <HStackView justifyContent="space-between">
        <VStackView mt={"eight"}>
          <Text fontSize="eighteen" fontWeight="bold">
            Bold
          </Text>
          <Text fontSize="eighteen" fontWeight="bold" fontStyle="italic">
            Bold-Italic
          </Text>
          <Text fontSize="eighteen" fontWeight="black">
            Black
          </Text>
          <Text fontSize="eighteen" fontWeight="black" fontStyle="italic">
            Black-Italic
          </Text>
          <Text fontSize="eighteen" fontWeight="extraBold">
            ExtraBold
          </Text>
          <Text fontSize="eighteen" fontWeight="extraBold" fontStyle="italic">
            ExtraBold-Italic
          </Text>
          <Text fontSize="eighteen" fontWeight="light">
            Light
          </Text>
          <Text fontSize="eighteen" fontWeight="light" fontStyle="italic">
            Light-Italic
          </Text>
        </VStackView>
        <VStackView mt={"eight"}>
          <Text fontSize="eighteen" fontWeight="medium">
            Medium
          </Text>
          <Text fontSize="eighteen" fontWeight="medium" fontStyle="italic">
            Medium-Italic
          </Text>
          <Text fontSize="eighteen" fontWeight="regular">
            Regular
          </Text>
          <Text fontSize="eighteen" fontWeight="regular" fontStyle="italic">
            Regular-Italic
          </Text>
          <Text fontSize="eighteen" fontWeight="semiBold">
            SemiBold
          </Text>
          <Text fontSize="eighteen" fontWeight="semiBold" fontStyle="italic">
            SemiBold-Italic
          </Text>
          <Text fontSize="eighteen" fontWeight="thin">
            Thin
          </Text>
          <Text fontSize="eighteen" fontWeight="thin" fontStyle="italic">
            Thin-Italic
          </Text>
        </VStackView>
      </HStackView>
    </Box>
  );
};

export default TextPreview;
