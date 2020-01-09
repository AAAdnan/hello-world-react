import React from 'react';
import './App.css';
import HelloName from './components/HelloName';
import { UserProvider } from './UserContext';


function App() {

  const user = { name: 'Adnan' }

  return (
    <UserProvider value={user}>
      <div className="App">
        <p>Hello World</p>
        <HelloName />
      </div>
    </UserProvider>
  );
}

export default App;
