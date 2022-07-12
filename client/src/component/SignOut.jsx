import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function SignOut() {
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
      alert(data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return <></>;
}
