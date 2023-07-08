import { create } from "zustand";
import manageUserStorage from "./manageUserStorage";
const useStore = create((...a) => ({
  ...manageUserStorage(...a),
}));

export default useStore;
