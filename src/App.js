import React, { useState } from 'react';
import './App.css';
import HelloName from './components/HelloName';
import { UserProvider } from './UserContext';

function App() {

  const [formName, setFormName] = useState('');

  const callback = (name) => {
    setFormName(name)
  }

  return (
    <UserProvider value={formName}>
      <div className="App">
        <HelloName parentCallback={callback} />
      </div>
    </UserProvider>
  );
}

export default App;
