import React from "react";
import { useSelector } from "react-redux";

export function Hello() {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div>
      <div>
        <h1>Hello {user.firstname} You're logged in.</h1>
      </div>
    </div>
  );
}
