import { useEffect, useState } from 'react';
import './App.css';
import getUsers from './utils/api';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(
      json => setUsers(json.userData)
    ).catch(
      err => new Error(err)
    )
  }, [])
  console.log(users);
  return (
    <>
      <h1>Points Tracker</h1>
      <h2>Select User to view points accrual</h2>
    </>
  );
}

export default App;
