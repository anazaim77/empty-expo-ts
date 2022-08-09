import { storage, storageKeys } from "@/config/storage";
import { IStorageKeys } from "@/config/storage/storageKeys";
import { Alert } from "react-native";

export const setValue = (
  key: keyof IStorageKeys,
  value: string | number | boolean | object
) => {
  if (!value) Alert.alert("please set value");
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  storage.set(key, value);
};

export const getString = (key: keyof IStorageKeys) => {
  return storage.getString(key);
};

export const getNumber = (key: keyof IStorageKeys) => {
  return storage.getNumber(key);
};

export const getBoolean = (key: keyof IStorageKeys) => {
  return storage.getBoolean(key);
};

export const getObject = (key: keyof IStorageKeys) => {
  const jsonValue = storage.getString(key) as string;
  if (!jsonValue) return {};
  return JSON.parse(jsonValue);
};
