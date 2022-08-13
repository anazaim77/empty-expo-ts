import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckTypeUtils as Check } from ".";

export const setItem = async (
  key: string,
  value: boolean | number | object | string
) => {
  try {
    if (value === undefined || value === null) {
      return;
    }
    if (Check.isString(value)) {
      return await AsyncStorage.setItem(key, value.toString());
    }
    // Get value below use `getAnyItem(key: string)`
    if (
      Check.isBoolean(value) ||
      Check.isNumber(value) ||
      Check.isObject(value)
    ) {
      return await AsyncStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    throw new Error("[Local Storage] An error occurred while saving data");
  }
};

export const getString = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    throw new Error("[Local Storage] An error occurred while getting data");
  }
};

export const getAnyItem = async (key: string) => {
  try {
    const items = await AsyncStorage.getItem(key);
    if (!items) {
      return null;
    }
    return JSON.parse(items);
  } catch (error) {
    throw new Error("[Local Storage] An error occurred while getting data");
  }
};

export const removeItem = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    throw new Error("[Local Storage] An error occurred while deleting data");
  }
};

/**
 * EXAMPLE BELOW :v
 * 
 * // useEffect(() => {
  //   // test write storage
  //   StorageUtils.setItem(StorageKeys.EXAMPLE_STRING, "Ini String");
  //   StorageUtils.setItem(StorageKeys.EXAMPLE_BOOLEAN, false);
  //   StorageUtils.setItem(StorageKeys.EXAMPLE_NUMBER, 1212);
  //   StorageUtils.setItem(StorageKeys.EXAMPLE_OBJECT, {
  //     satu: "ibu",
  //     dua: "ayah",
  //   });

  //   // test read storage
  //   StorageUtils.getString(StorageKeys.EXAMPLE_STRING).then((result) =>
  //     console.log(StorageKeys.EXAMPLE_STRING, result, typeof result)
  //   ); // => EXAMPLE_STRING Ini String string
  //   StorageUtils.getAnyItem(StorageKeys.EXAMPLE_NUMBER).then((result) =>
  //     console.log(StorageKeys.EXAMPLE_NUMBER, result, typeof result)
  //   ); // => EXAMPLE_NUMBER 1212 number
  //   StorageUtils.getAnyItem(StorageKeys.EXAMPLE_BOOLEAN).then((result) =>
  //     console.log(StorageKeys.EXAMPLE_BOOLEAN, result, typeof result)
  //   ); // => EXAMPLE_BOOLEAN false boolean
  //   StorageUtils.getAnyItem(StorageKeys.EXAMPLE_OBJECT).then((result) =>
  //     console.log(StorageKeys.EXAMPLE_OBJECT, result, typeof result)
  //   ); // =>
  //    // * EXAMPLE_OBJECT Object {
  //    // *    "dua": "ayah",
  //    // *    "satu": "ibu",
  //    // * } object
  //   StorageUtils.getAnyItem(StorageKeys.EXAMPLE_STRING + ".2").then((result) =>
  //     console.log(StorageKeys.EXAMPLE_STRING + ".2", result, typeof result)
  //   ); // => EXAMPLE_STRING.2 null object EXPECTED ERROR
  // }, []);
 */
