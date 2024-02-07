// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/user/list'); // Update the URL
      setUsers(response.data);
      console.log(response.data); 
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const createUser = async (userData) => {
    try {
      await axios.post('http://localhost:3001/user/create', userData); // Update the URL
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const updateUser = async (userId, userData) => {
    try {
      await axios.put(`http://localhost:3001/user/update/${userId}`, userData); // Update the URL
      fetchUsers();
      setSelectedUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/user/delete/${userId}`); // Update the URL
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onSubmit={selectedUser ? (data) => updateUser(selectedUser._id, data) : createUser} initialData={selectedUser} /> 
      {/* <UserForm onSubmit={createUser} initialData={selectedUser} /> */}
      <UserList users={users} onDelete={deleteUser} onEdit={(user) => setSelectedUser(user)} />
    </div>
  );
};

export default App;
