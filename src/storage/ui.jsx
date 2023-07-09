import { create } from "zustand";

export const useUI = create((set) => ({
  isSidebarOpen: true,
  setSidebarOpen: () => {},
}));
