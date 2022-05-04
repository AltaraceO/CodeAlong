import UserList from "./components/UserList";
import { Route, Routes } from "react-router-dom";
import UserDetail from "./components/UserDetail";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(
    function () {
      const fetchUsers = async () => {
        await fetch("https://randomuser.me/api/?results=10")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data) {
              setUsers(data.results);
            }
          });
      };
      if (!users.length) {
        fetchUsers();
      }
    },
    [users]
  );
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<UserList users={users} />}></Route>
        <Route path="/:userId" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
