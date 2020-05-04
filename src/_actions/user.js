import { GET_USER } from "../constants/action-type";
import { API, setAuthToken } from "../config/api";

export const getProfile = (id) => {
  return {
    type: GET_USER,
    async payload() {
      try {
        const user = await API.get(
          `/user/${id}`,
          setAuthToken(localStorage.getItem("token"))
        );
        return user.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};
