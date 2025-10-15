import { secureStorage } from "@/utils/secureStorage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string | null) => set({ token }),
    }),
    {
      name: "auth-storage", // Nama key di localStorage
      storage: createJSONStorage(() => secureStorage),
    }
  )
);
