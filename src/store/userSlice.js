import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      { id: 1, username: 'admin', email: 'admin@example.com', role: 'admin', status: '激活' },
      { id: 2, username: 'user1', email: 'user1@example.com', role: 'user', status: '激活' },
      { id: 3, username: 'user2', email: 'user2@example.com', role: 'user', status: '禁用' },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push({ ...action.payload, id: state.users.length + 1 });
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;