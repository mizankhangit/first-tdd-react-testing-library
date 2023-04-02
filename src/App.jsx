import { useState } from "react";
import UserForm from "./components/user-form";
import UserList from "./components/user-list";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
