import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import {userSlice,addUser,deleteUser,updateUserName} from './../../features/Users'
import AddUser from "./addUser";


export default function UserComponent() {

    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [newUsername, setNewUserName] = useState("");

    const userList = useSelector((state) => state.users.value);
    // console.log(userList);
    const dispatch = useDispatch();

    return (
        <div className="p-5">
            <div className="py-2">
                <input type="text" onChange={e=>{setName(e.target.value)}} className="input-adduser" placeholder="enter name..." />
                <input type="text" onChange={e=>{setUserName(e.target.value)}} className="input-adduser" placeholder="enter username..." />
                <button onClick={()=>{
                    dispatch(
                        addUser({     //reducer in file Users.js
                            id:userList.length,
                            name,
                            username
                        })
                    )
                }} className="btn btn-success">add user</button>
            </div>
            {userList.map((usr) => {
                return (
                    <div className="p-2 mt-2 rounded bg-warning">
                        <h4>{usr.username} - {usr.name}</h4>
                        <button onClick={()=>dispatch(deleteUser({id:usr.id}))}>delete</button>
                        <input type="text" placeholder="enter new username..." className="input-adduser2" onChange={(e)=>{setNewUserName(e.target.value)}}/>
                        <button onClick={()=>dispatch(updateUserName({id:usr.id,username :newUsername }))}>update</button>
                    </div>
                )
            })}
        </div>
    )
}   