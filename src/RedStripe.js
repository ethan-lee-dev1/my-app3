import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { userNameAtom } from "./atoms";
import "./RedStripe.scss";

export const RedStripe = () => {
  let [username, setUserName] = useRecoilState(userNameAtom);
  let [email, setEmail] = useState("");

  const url = "http://jsonplaceholder.typicode.com/users/1";
  const usersQuery = useQuery(`users/1`, async () => await axios.get(url), {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  console.log(usersQuery);

  useEffect(() => {
    if (usersQuery.isFetched && username === "") {
      //This catches the infinite re-rendering
      //because it might constantly update the state and re-render infinitely.
      setUserName(usersQuery.data.data.name);
      setEmail(usersQuery.data.data.email);
    }
  }, [
    username,
    setEmail,
    setUserName,
    usersQuery.isFetched,
    usersQuery.data?.data.name,
    usersQuery.data?.data.email,
  ]);

  const onHandlePush = () => {
    usersQuery.refetch();
  };

  return (
    <div className="redstripe">
      <button onClick={onHandlePush}>Get User</button>
      Username: {username}
      Email Address: {email}
    </div>
  );
};
