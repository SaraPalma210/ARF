import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { navigate } from "react-router-dom";
import {auth} from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";


const ProfilePage = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  console.log(user);
  

  return (
    <div >
        <div
          style={{
            background: `url(${photoURL || 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'})  no-repeat center center`,
            backgroundSize: "cover",
            height: "75px",
            width: "75px"
          }}
          
        ></div>
        <div >
        <h2 className = "text-2xl font-semibold">{displayName}</h2>
        <h3 className = "italic">{email}</h3>
        </div>
      <button  onClick = {() => {auth.signOut()}}>Sign out</button>
    </div>
  ) 
};

export default ProfilePage;

