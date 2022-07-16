import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function SignOut() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    Signout();
  }, []);
  const Signout = async () => {
    try {
      const response = await fetch("/signout", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (response.status !== 200) {
        alert(data.error);
        throw new Error(data.error);
      }
      //setting dispatch to true to render singin
      dispatch({ type: "toggle", payload: true });
      alert(data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return <></>;
}
