// src/components/DisplayUsers.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { removeUser } from '../store/slices/userSlice';

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => deleteUser(user.id)}>
            <MdDelete />
          </button>
        </li>
      ))}
    </div>
  );
};

export default DisplayUsers;
