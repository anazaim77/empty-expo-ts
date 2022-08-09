import create from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageUtils } from "@/utils";

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
      doLogin: (authToken) => {
        StorageUtils.setValue("AUTH_TOKEN", "adaPanjangdehPokoknya");

        set({ isLoggedIn: true, authToken });
      },
      doLogout: () => {
        StorageUtils.setValue("AUTH_TOKEN", "KOSONG");

        set({ isLoggedIn: false, authToken: undefined });
      },
    }),
    {
      name: "auth-store",
      getStorage: () => AsyncStorage,
    }
  )
);

export default authStore;
