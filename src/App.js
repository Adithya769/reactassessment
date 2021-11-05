// import logo from './logo.svg';
import './App.css';

import React,{useState, Fragment} from 'react';
import AddUserForm from './forms/adduserform';
import EditUserForm from './forms/editUserform';
import UserTable from './tables/userTable';
// import { Table } from './tables/table';


const App =() =>{
  //Data


  const usersData =[
    {id:1,itemname:'Fashions Women',description:'Floor Length, Taffeta Silk, Striped', price:'800',quantity:'A1',stockreceivedDate:'10-20-2021'},
    {id:2,itemname:'Men Slim Fit Solid Spread ',description:'LATEST LOOKING NEW DESIGN SHIRT ,MARRIAGE-PARTY,ETC', price:'900',quantity:'A1',stockreceivedDate:'10-22-2021'},
    {id:3,itemname:'Cotton Silk Blend ',description:'Blend Printed Shirt Fabric', price:'1000',quantity:'A1',stockreceivedDate:'10-20-2021'},

  ]
  const initialFormState ={id:null,itemname:'',description:'',price:'',quantity:'',stockreceivedDate:''}
  //Setting sate
  const [users,SetUsers] = useState(usersData)
  const [currentUser,setCurrentUser] = useState(initialFormState)
  const [editing,setEditing] =  useState(false)
  //CURD Operations
  const addUser = user =>{
    user.id =users.length + 1
    SetUsers([...users,user])
  }
  const deleteUser = id =>{
    setEditing(false)
    SetUsers(users.filter(user => user.id !== id))
  }
  const updateUser = (id, updateUser)=>{
    setEditing(false)
    SetUsers(users.map(user=>(user.id === id ? updateUser :user)))
  }

  const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, itemname: user.itemname, description: user.description,price:user.price,quantity:user.quantity,stockreceivedDate:user.stockreceivedDate })
	}

	return (
		<div className="container">
			<h1>Fashions </h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
        {/* <Table  /> */}
			</div>
		</div>
	)
}


export default App;
