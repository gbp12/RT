import { useMutation, useQuery } from "react-query";
import APIClient from "../client";

/*

POST /auth/login -> jwt
GET /auth/profile -> {}

*/

export const useLogin = () =>
  useQuery(async () => {
    try {
      const response = await APIClient.post("auth/profile");
      return response;
    } catch {
      throw Error("User or password incorrect");
    }
  });
