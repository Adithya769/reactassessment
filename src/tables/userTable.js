import React from "react";

const UserTable = props=>(
    <table>
        <thead>
            <tr>
                <th>Itemname</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Stock received Dat</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ?(
                props.users.map(user =>(
                    <tr key={user.id}>
                        <td>{user.itemname}</td>
                        <td>{user.description}</td>
                        <td>{user.price}</td>
                        <td>{user.quantity}</td>
                        <td>{user.stockreceivedDate}</td>
                        <td>
                            <button onClick ={() =>{
                                props.editRow(user)
                            }} className ="Button muted-button">Edit</button>
                            <button onClick ={() =>{
                                props.deleteUser(user.id)
                            }} className ="Button muted-button">Delete</button>
                        </td>
                    </tr>
                ))
            ):(
                <tr>
                    <td colSpan ={3}>No Users</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default UserTable;