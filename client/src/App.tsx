import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import {client} from './graphql/graphql';
import { UserSelection } from './components/UserSelection';
import { UserList } from './components/UserList';
import styled from 'styled-components';


const AppContainer = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;

    & > div {
        padding: 20px 0px 20px 0px;
        min-width: 60%;
        max-width: 90%;
        border-bottom: 1px solid lightgrey;
    }
`

function App() {
  const [userType, setUserType] = useState("Admin");

  const handleUserType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType((event.target as HTMLInputElement).value);
  };

  return (
    <ApolloProvider client={client}>
        <AppContainer>
          <UserSelection userType={userType} onUserTypeChange={handleUserType}/> 
          <UserList userType={userType}/>
        </AppContainer>
      </ApolloProvider>
  );
}

export default App;
