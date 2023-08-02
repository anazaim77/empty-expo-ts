import Navigation from "@/config/navigator";
import { useCachedResources } from "@/hooks";
import { View } from "@flip.id/mobile-design-system";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";

export default function App() {
  const { isLoadingComplete, fontsLoaded } = useCachedResources();

  if (!isLoadingComplete && !fontsLoaded) {
    return (
      <View alignItems="center" justifyContent="center">
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
