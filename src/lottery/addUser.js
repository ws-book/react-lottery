import React , { useState } from 'react'

const AddUser = prop => {


    const initialFormStae = { id: null , fullName : '' , number : '' , status : false  }
    const [ user,setUser ] = useState(initialFormStae)

    const handleInputChange = event => {
        const { name ,value } = event.target
        console.log(name)
        setUser({...user , [name]:value} )
    }
    return (
        <form onSubmit={ event => {
            event.preventDefault()
            if(!user.fullName || !user.number) return

            prop.addNewUser(user)
            setUser(initialFormStae)

        }}  

        >
            <label>Name</label>
      <input type="text" name="fullName" value={user.fullName} onChange={handleInputChange} />
      <label>Number Lottery</label>
      <input type="text" name="number" value={user.number} onChange={handleInputChange} />
      <button>Add new user</button>

        </form>
    )

}

export default AddUser;