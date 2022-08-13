import Navigation from "@/config/navigator";
import { StatusBar } from "expo-status-bar";
import { useCachedResources } from "@/hooks";
import { ActivityIndicator, View } from "react-native";

export default function App() {
  const { isLoadingComplete, fontsLoaded } = useCachedResources();

  if (!isLoadingComplete && !fontsLoaded) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
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
