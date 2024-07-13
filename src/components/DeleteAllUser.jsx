import React from 'react'
import { useDispatch } from 'react-redux'
// import { clearAllUsers } from '../store/slices/userSlice';
// import { clearUsers} from '../store/actions';
import { clearUsers } from '../store/slices/userSlice';

 export const DeleteAllUser =()=>{
    const dispatch = useDispatch();
    const deleteUsers =()=>{
        console.log("clear all user clicked")
        dispatch(clearUsers())
    }
    return(
        <div><button onClick={deleteUsers}>Delete All Users</button></div>
    )
 }
