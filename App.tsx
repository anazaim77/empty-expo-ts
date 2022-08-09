import Navigation from "@/config/navigator";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useCachedResources } from "@/hooks";

export default function App() {
  const { isLoadingComplete, fontsLoaded } = useCachedResources();

  if (!isLoadingComplete && !fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
