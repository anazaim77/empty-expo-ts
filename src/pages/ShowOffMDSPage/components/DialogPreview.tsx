import { Box, Dialog, Text } from "@flip.id/mobile-design-system";
import React from "react";

interface DialogPreviewProps {}

const DialogPreview = (props: DialogPreviewProps) => {
  return (
    <Box
      borderWidth={1}
      borderColor="neutralBorder"
      p={"eight"}
      borderRadius="eight"
    >
      <Text bold fontSize="twentyTwo">
        Dialog Preview
      </Text>
      <Box
        borderWidth={1}
        borderColor="neutralBorder"
        p={"eight"}
        borderRadius="eight"
      >
        <Dialog
          title={"Lorem Ipsum"}
          descriptions="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          confirmLabel="Yes"
          cancelLabel="Cancel"
          illustrationSrc={{
            uri: "https://img.freepik.com/premium-psd/horizontal-web-banner-with-phone-phone-mockup_451189-72.jpg?w=2000",
          }}
        />
      </Box>
    </Box>
  );
};

export default DialogPreview;
