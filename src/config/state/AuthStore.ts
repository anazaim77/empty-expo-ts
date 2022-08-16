import create from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import zustandFlipper from "react-native-flipper-zustand";

type AuthProps = {
  authToken: string | undefined;
  isLoggedIn: boolean;
  doLogin: (authToken: string) => void;
  doLogout: () => void;
};

const authStore = create<AuthProps>(
  // zustandFlipper(
  persist(
    (set, get): AuthProps => ({
      // states
      authToken: get()?.authToken ?? undefined,
      isLoggedIn: false,

      //actions
      doLogin: (authToken) => set({ isLoggedIn: true, authToken }),
      doLogout: () => set({ isLoggedIn: false, authToken: undefined }),
    }),
    {
      name: "auth-store",
      getStorage: () => AsyncStorage,
    }
  )
  // )
);

export default authStore;
