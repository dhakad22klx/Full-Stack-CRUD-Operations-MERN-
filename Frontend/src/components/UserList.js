// src/components/UserList.js
import React from 'react';

const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          {user.name} - {user.phonenumber}
          <button onClick={() => onDelete(user._id)}>Delete</button>
          <button onClick={() => onEdit(user)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
