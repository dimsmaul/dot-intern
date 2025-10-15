export const secureStorage = {
  getItem: (key: string) => {
    const item = localStorage.getItem(key);
    return item;
  },

  setItem: (key: string, value: string) => {
    localStorage.setItem(key, value);
  },

  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },
};
