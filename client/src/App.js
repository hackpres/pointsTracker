import { useEffect, useState } from 'react';
import './App.css';
import getUsers from './utils/api';
import UserSelect from './components/form/UserSelect';
import H2 from './components/headers/H2';
import getNames from './utils/usersFunctions';

function App() {
  const [users, setUsers] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  useEffect(() => {
    getUsers().then(
      json => setUsers(json.userData)
    ).catch(
      err => new Error(err)
    )
  }, [])
  const updateSelected = (e) => {
    const selected = e.target.value.split(' ');
    for (let i = 0; i < users.length; i++) {
      if(users[i].firstName === selected[0]) {
        setSelectedUser(users[i]);
      }
    }
  }
  return (
    <>
      <h1>Points Tracker</h1>
      <H2 name={selectedUser} />
      <UserSelect name={getNames(users)} change={updateSelected} />
    </>
  );
}

export default App;
