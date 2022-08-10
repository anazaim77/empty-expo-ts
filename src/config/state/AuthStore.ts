import create from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthProps = {
  authToken: string | undefined;
  isLoggedIn: boolean;
  doLogin: (authToken: string) => void;
  doLogout: () => void;
};

const authStore = create<AuthProps>(
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
);

export default authStore;
