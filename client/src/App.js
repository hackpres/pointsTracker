import { useEffect, useState } from 'react';
import './App.css';
import getUsers from './utils/api';
import UserSelect from './components/form/UserSelect';
import QuarterSelect from './components/form/QuarterSelect';
import H2 from './components/headers/H2';
import getNames from './utils/usersFunctions';
import Points from './components/display/Points';

function App() {
  const [users, setUsers] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [quarter, setQuarter] = useState([]);
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
  };
  const updateQuarter = (e) => {
    const selectedQuarter = e.target.value;
    switch (selectedQuarter) {
      case "Q1":
        setQuarter([{january: selectedUser.purchaseHistory.january}, {february: selectedUser.purchaseHistory.february}, {march: selectedUser.purchaseHistory.march}]);
        break;
      case "Q2":
        setQuarter([{april: selectedUser.purchaseHistory.april}, {may: selectedUser.purchaseHistory.may}, {june: selectedUser.purchaseHistory.june}]);
        break;
      case "Q3":
        setQuarter([{july: selectedUser.purchaseHistory.july}, {august: selectedUser.purchaseHistory.august}, {september: selectedUser.purchaseHistory.september}]);
        break;
      case "Q4":
        setQuarter([{october: selectedUser.purchaseHistory.october}, {november: selectedUser.purchaseHistory.november}, {december: selectedUser.purchaseHistory.december}]);
        break;
      default:
        setQuarter([])
        break;
    }
  }
  return (
    <>
      <h1>Points Tracker</h1>
      <H2 name={selectedUser} />
      <UserSelect name={getNames(users)} change={updateSelected} />
      {selectedUser ? <QuarterSelect change={updateQuarter} /> : null}
      <Points quarter={quarter} />
    </>
  );
}

export default App;
