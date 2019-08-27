import React from 'react';
import Lottery from './lottery/lottery'
import UserTable from './lottery/userTable'
import './App.css';

const userData = [
  
]

// const addNewUser = user 

function App() {
  return (
    <div className="App"> 
      <Lottery></Lottery>
      <UserTable></UserTable>
    </div>
  );
}

export default App;
