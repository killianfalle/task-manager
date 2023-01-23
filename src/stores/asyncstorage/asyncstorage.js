import AsyncStorage from '@react-native-async-storage/async-storage';

const allowedKeys = [
  'tasks',
];

const unallowedKeyErrorMsg = 'The key is not included in the allowed keys.';

class AsyncStorageService {
  async get(key) {
    if (!allowedKeys.includes(key))
      return {success: false, error: unallowedKeyErrorMsg};

    const value = await AsyncStorage.getItem(key);
    return {success: true, value: value};
  }

  async set(key, value) {
    if (!allowedKeys.includes(key))
      return {success: false, error: unallowedKeyErrorMsg};

    await AsyncStorage.setItem(key, value);
    return {success: true};
  }
  
  async multiRemove(keys) {
    keys.forEach(key => {
      if (!allowedKeys.includes(key))
        return {success: false, error: unallowedKeyErrorMsg};
    });

    await AsyncStorage.multiRemove(keys);
    return {success: true};
  }

  async remove(key) {
    if (!allowedKeys.includes(key))
      return {success: false, error: unallowedKeyErrorMsg};

    await AsyncStorage.removeItem(key);
    return {success: true};
  }
}

export default new AsyncStorageService();
