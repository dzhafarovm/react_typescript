import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import { IUser } from "../types/types";

interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavLink to="/users">Back</NavLink>
      <h1>Страница пользователя {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city}, {user?.address.street}, {user?.address.zipcode}
      </div>
    </div>
  );
};
export default UserItemPage;
