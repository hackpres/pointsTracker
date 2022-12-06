import { useEffect, useState } from 'react';
import './App.css';
import getUsers from './utils/api';
import UserSelect from './components/form/UserSelect';
import QuarterSelect from './components/form/QuarterSelect';
import getNames from './utils/usersFunctions';
import Points from './components/display/Points';

function App() {
  const [users, setUsers] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [quarter, setQuarter] = useState([]);
  const [userHeading, setUserHeading] = useState('Select a User to view thier points accrual!');
  const [selectQKey, setQKey] = useState('');
  useEffect(() => {
    getUsers().then(
      json => setUsers(json.userData)
    ).catch(
      err => new Error(err)
    )
  }, [])
  const updateSelected = (e) => {
    const selected = e.target.value.split(' ');
    users.map((user) => {
      if(user.firstName === selected[0]) {
        setSelectedUser(user);
        setUserHeading(`Viewing points for ${user.username}.`)
        setQuarter([])
        setQKey(Math.random());
      } else if (selected[0] === '') {
        setSelectedUser('')
        setUserHeading('Select a User to view thier points accrual!')
      }
    })
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
      <h2>{userHeading}</h2>
      <UserSelect name={getNames(users)} change={updateSelected} />
      {selectedUser ? <QuarterSelect QKey={selectQKey} change={updateQuarter} /> : null}
      <Points quarter={quarter} />
    </>
  );
}

export default App;
