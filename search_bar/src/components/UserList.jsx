import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = ({ users }) => {
  const [inputValue, setInputValue] = useState("");

  const [filteredUsers, setFilteredUsers] = useState(users);

  const navigate = useNavigate();

  const getSingleUser = (id, name, image) => {
    navigate("/UserDetails", { state: { id, name, image } });
  };

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const searchHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const filter = users.filter((user) => {
      return user.name.first.toLowerCase().includes(inputValue.toLowerCase());
    });

    console.log(filter);
    setFilteredUsers(filter);
  }, [inputValue, users]);

  console.log(filteredUsers);

  return (
    <div>
      <h1>User List</h1>
      <input type="text" value={inputValue} onChange={searchHandler} />
      <ul>
        {filteredUsers.map((user) => {
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
