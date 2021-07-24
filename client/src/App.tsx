import React, { useState } from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import {client} from './graphql/graphql';
import { UserSelection } from './components/UserSelection';

function App() {
  const [userType, setUserType] = useState("Admin");

  const handleUserType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType((event.target as HTMLInputElement).value);
  };

  return (
    <ApolloProvider client={client}>
        <div className="App">
          <UserSelection userType={userType} onUserTypeChange={handleUserType}/> 
        </div>
      </ApolloProvider>
  );
}

export default App;
