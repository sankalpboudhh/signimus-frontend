import React from "react";
import { useSelector } from "react-redux";

export function Hello() {
  const user = useSelector((state) => state.userReducer.user);
  console.log("from hello.js", user);

  return (
    <div>
      <div>
        <h1>Hello</h1>
        <h1>{user.firstname}</h1>
      </div>
    </div>
  );
}
