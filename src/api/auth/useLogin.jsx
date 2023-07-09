import { useMutation } from "react-query";
import APIClient from "../client";

export const useLogin = () =>
  useMutation(async (username, password) => {
    try {
      const response = await APIClient.post("auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
    } catch {
      throw Error("User or password incorrect");
    }
  });
