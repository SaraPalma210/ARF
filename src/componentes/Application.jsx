import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";

function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        <ProfilePage />
      :
        <BrowserRouter>
          <SignIn path="/" />
        </BrowserRouter>
      
  );
}

export default Application;
