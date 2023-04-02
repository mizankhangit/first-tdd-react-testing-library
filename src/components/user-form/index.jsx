import React, { useState } from "react";

const UserForm = ({ onUserAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onUserAdd({ name, email });
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div className="">
          <label htmlFor="name">Name</label>
          <input id="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="">
          <label htmlFor="email">Email</label>
          <input id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button>Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
