import { RootStackScreenProps } from "@/config/navigator/types";
import {
  HStack,
  IconButton,
  ScrollView,
  Text,
  VStackView,
  View,
} from "@flip.id/mobile-design-system";
import React from "react";
import {
  ButtonsPreview,
  DialogPreview,
  IconsPreview,
  TextPreview,
} from "./components";

interface ShowOffMDSPageProps {}

const ShowOffMDSPage: React.FC<
  RootStackScreenProps<"ShowMDS"> & ShowOffMDSPageProps
> = (props) => {
  function goToLogin() {
    props.navigation.popToTop();
  }
  return (
    <View>
      <HStack backgroundColor="neutralWhite" p={"sixteen"} space={"sixteen"}>
        <IconButton
          onPress={goToLogin}
          name={"back"}
          size="thirtyTwo"
          iconColor="neutralMainText"
          backgroundColor="neutralWhite"
          pressedBackgroundColor="neutralDisabledBg"
        />
        <Text fontSize="twentyTwo" fontWeight="semiBold">
          Preview Flip MDS
        </Text>
      </HStack>
      <ScrollView backgroundColor="neutralWhite">
        <VStackView space={"sixteen"} p={"sixteen"}>
          <ButtonsPreview />
          <TextPreview />
          <IconsPreview />
          <DialogPreview />
        </VStackView>
      </ScrollView>
    </View>
  );
};

export default ShowOffMDSPage;
