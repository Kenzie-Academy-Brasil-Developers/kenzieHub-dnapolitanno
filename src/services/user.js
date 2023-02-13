import { useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "./api";

export const Userloged = async (setUser) => {
  const id = localStorage.getItem("Id");

  useEffect(() => {
    async function RequiredUser() {
      try {
        const { data } = await api.get(`/users/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.Id}` },
        });
        setUser(data);
      } catch (error) {
        return error;
      }
    }
    RequiredUser();
  }, []);
};
