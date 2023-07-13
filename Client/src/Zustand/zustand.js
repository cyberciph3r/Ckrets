import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => {
      return {
        user: null,
        login: (credentials) => {
          set((state) => {
            return { user: credentials };
          });
        },
        logout: () => {
          set((state) => {
            return { user: null };
          });
        },
      };
    },
    { name: "user-store" }
  )
);

export default useStore;
