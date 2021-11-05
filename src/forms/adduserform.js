import React,{useState} from 'react';

const AddUserForm = props =>{
    const initialFormState = {
        id:null,
        itemname:'', 
        description:'', 
        price:'', 
        quantity:'', 
        stockreceivedDate:''
    }
    const [user,setUser] = useState(initialFormState)
    const handleInputChange = event =>{
        const {name, value} = event.target
        setUser({...user,[name]:value})
    }
    return (
        <form onSubmit ={event =>{
            event.preventDefault()
            if(!user.itemname||!user.description )
            return 
             props.addUser(user)
             setUser(initialFormState)
        }}>
            <label>Itemname</label>
            <input type="text" name="itemname" value={user.itemname} onChange={handleInputChange} />
            <label>Description</label>
            <input type="text" name="description" value={user.description} onChange={handleInputChange} />
            <label>Price</label>
            <input type="text" name="price" value={user.price} onChange={handleInputChange} />
            <label>Quantity</label>
            <input type="text" name="quantity" value={user.quantity} onChange={handleInputChange} />
            <label>stock received Date</label>
            <input type="text" name="stockreceivedDate" value={user.stockreceivedDate} onChange={handleInputChange} />
            <button>Add new user</button>
            
        </form>
    )
}

export default AddUserForm;