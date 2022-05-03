import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserDetail = () => {
const navigate = useNavigate();
const location = useLocation();
  return (
    <div>
      <h2>{location.state.name}</h2>
      <img src={location.state.image} alt='Profile'/>
      <button onClick={() => navigate(-1, {replace:true})}>go back</button>
    </div>
  );
};

export default UserDetail;
