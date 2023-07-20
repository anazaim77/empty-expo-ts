import {
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/lato";
import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          "ProximaNova-Black": require("../../assets/fonts/ProximaNova-Black.otf"),
          "ProximaNova-BlackIt": require("../../assets/fonts/ProximaNova-BlackIt.otf"),
          "ProximaNova-Bold": require("../../assets/fonts/ProximaNova-Bold.otf"),
          "ProximaNova-BoldIt": require("../../assets/fonts/ProximaNova-BoldIt.otf"),
          "ProximaNova-Extrabld": require("../../assets/fonts/ProximaNova-Extrabld.otf"),
          "ProximaNova-ExtrabldIt": require("../../assets/fonts/ProximaNova-ExtrabldIt.otf"),
          "ProximaNova-Light": require("../../assets/fonts/ProximaNova-Light.otf"),
          "ProximaNova-LightIt": require("../../assets/fonts/ProximaNova-LightIt.otf"),
          "ProximaNova-Medium": require("../../assets/fonts/ProximaNova-Medium.otf"),
          "ProximaNova-MediumIt": require("../../assets/fonts/ProximaNova-MediumIt.otf"),
          "ProximaNova-Regular": require("../../assets/fonts/ProximaNova-Regular.otf"),
          "ProximaNova-RegularIt": require("../../assets/fonts/ProximaNova-RegularIt.otf"),
          "ProximaNova-Semibold": require("../../assets/fonts/ProximaNova-Semibold.otf"),
          "ProximaNova-SemiboldIt": require("../../assets/fonts/ProximaNova-SemiboldIt.otf"),
          "ProximaNova-Thin": require("../../assets/fonts/ProximaNova-Thin.otf"),
          "ProximaNova-ThinIt": require("../../assets/fonts/ProximaNova-ThinIt.otf"),
          ...FontAwesome.font,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return { isLoadingComplete, fontsLoaded };
}
