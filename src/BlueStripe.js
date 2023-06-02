import React from "react";
import "./BlueStripe.scss";
import { useRecoilValue } from "recoil";
import { userNameAtom } from "./atoms";

export const BlueStripe = () => {
  const userName = useRecoilValue(userNameAtom);
  return <div className="bluestripe">Username: {userName}</div>;
};
