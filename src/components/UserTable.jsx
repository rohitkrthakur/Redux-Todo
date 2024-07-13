// src/components/UserTable.jsx
import React, { useEffect } from 'react';
import './UserTable.css';
import { useDispatch, useSelector } from 'react-redux';
import {  addUser } from '../store/slices/userSlice';
import DisplayUsers from './DisplayUsers';
import { DeleteAllUser } from './DeleteAllUser';
import { fakeUserData } from '../api';

const UserTable = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.user.status);

//   useEffect(() => {
//     if (userStatus === 'idle') {
//       dispatch(fetchUsers());
//     }
//   }, [userStatus, dispatch]);

  const addNewUser = () => {
    const newUser = fakeUserData();
    dispatch(addUser(newUser));
  };

  return (
    <>
      <div className="user-table">
        <h2>List of User Details</h2>
        <button onClick={addNewUser}>Add new users</button>
      </div>
      <div>
        <ul>
          <DisplayUsers />
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </>
  );
};

export default UserTable;
