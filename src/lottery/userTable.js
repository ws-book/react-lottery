import React from 'react'
import AddUser from './addUser'

const UserTable = props => (
<div className="wrapper">
        <h1>ทายผล</h1>
        <AddUser></AddUser>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>FullName</th>
              <th>Number</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Wittawat Sranoy</td>
              <td>123456</td>
              <td>Pendding</td>
              <td>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </td>
            </tr> 
          </tbody>
        </table>
      </div>
)

export default UserTable;