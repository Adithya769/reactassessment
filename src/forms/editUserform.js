import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
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
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm