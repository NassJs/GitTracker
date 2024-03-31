import { useState, useEffect } from "react";
import { GitHubUser } from "@/models/models";

type UserType = {
  name: string | number;
};
export const useGetUser = (name: UserType) => {
  const [apiLogin, setApiLogin] = useState<GitHubUser>();

  const fetchApi = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);
      const userData = await response.json();
      if (response.ok) {
        console.log("ok fetch");
        setApiLogin(userData);
      } else {
        console.log("failed request");
      }
    } catch (error) {
      console.log("error call api", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [name]);
  return apiLogin;
};
