import { useQuery } from '@apollo/client'
import React from 'react'
import styled from 'styled-components'
import { ListZellerCustomers } from '../graphql/queries'
import { UserItem } from './UserItem'

interface Props {
    userType: string,
}

const UserHolder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const UserList = (props: Props) => {
    interface User {
        id: string,
        name: string,
        role: string
    }

    const { loading, data } = useQuery(ListZellerCustomers);

    if (loading) return <p>Loading...</p>;
    if (!data) return <p>Not found</p>;

    const users = 
        data.listZellerCustomers.items.filter((val:User) => {
            return val.role === props.userType
        }).map((val:User) => {
            return <UserItem key={val.id} name={val.name} role={val.role}></UserItem>
    })

    return (
        <div>
            <h2 data-testid="usertype">{props.userType} Users</h2>
            <UserHolder>
                {users}
            </UserHolder>
        </div>
    )
}
