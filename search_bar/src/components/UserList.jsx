import React from "react";
import { useNavigate } from "react-router-dom";

const UserList = ({ users }) => {
  const navigate = useNavigate();

  const getSingleUser = (id, name, image) => {
    navigate("/UserDetails", { state: { id, name, image } });
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.login.uuid}>
              <div
                onClick={() =>
                  getSingleUser(
                    user.login.uuid,
                    user.name.first,
                    user.picture.medium
                  )
                }
              >
                {user.name.first}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
