import { useReducer, useState } from "react";
import authReducers from "./reducers/authReducers";

const LoginStatus = () => {
  const [user, dispatch] = useReducer(authReducers, "");
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "Kunal Kumar" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
