// backend/userData.js

let users = [
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' },
    { id: 3, username: 'user3', email: 'user3@example.com' }
  ];
  
  // Get all users
  const getAllUsers = () => {
    return users;
  };
  
  // Get user by ID
  const getUserById = (userId) => {
    return users.find(user => user.id === userId);
  };
  
  // Add a new user
  const addUser = (userData) => {
    const newUser = { id: users.length + 1, ...userData };
    users.push(newUser);
    return newUser;
  };
  
  // Update user
  const updateUser = (userId, updatedUserData) => {
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUserData };
      return users[index];
    }
    return null; // User not found
  };
  
  // Delete user by ID
  const deleteUser = (userId) => {
    users = users.filter(user => user.id !== userId);
  };
  
  module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };