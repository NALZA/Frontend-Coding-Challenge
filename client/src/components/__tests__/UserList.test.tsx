import { render} from '@testing-library/react';
import { UserList } from '../UserList';
import { MockedProvider } from "@apollo/client/testing";
import { ListZellerCustomers } from '../../graphql/queries';
import TestRenderer from 'react-test-renderer'
import { GraphQLError } from 'graphql';

const mocks = [
    {
      request: {
        query: ListZellerCustomers,
      },
      result: {
        data: {
          listZellerCustomers: {
            "items": [
                {
                    "id": "545eba38-680c-4b7b-9250-3f514146f81a",
                    "name": "John Smith",
                    "role": "Admin"
                },
                {
                    "id": "947a7361-c3ea-4c62-a8c4-649460fc6fcd",
                    "name": "Nathan Smith",
                    "role": "Manager"
                },
                {
                    "id": "066cf6cd-0856-4d9b-98b8-6428bb219239",
                    "name": "Glen Tailor",
                    "role": "Manager"
                }]
          }
        }
      },
    },
  ];

describe("User list holder", () => {
    it("Test graphql loading state", () => {
      const component = TestRenderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <UserList userType='Admin'/>
            </MockedProvider>,  
            );
            const p = component.root.findByType('p');
            expect(p.children.join('')).toContain('Loading...');
    })
    it("Test graphql mock data", async () => {
      const component = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <UserList userType='Admin'/>
            </MockedProvider>,  
            );
            await new Promise(resolve => setTimeout(resolve, 0));

            const userType = component.getByTestId('usertype');
            expect(userType).toHaveTextContent('Admin Users')
    })
    it("Test graphql no data state", async () => {
      const mocksNodata = [
        {
          request: {
            query: ListZellerCustomers,
          },
          result: {
          },
        },
      ];
      const component = TestRenderer.create(
            <MockedProvider mocks={mocksNodata} addTypename={false}>
                <UserList userType='Admin'/>
            </MockedProvider>,  
            );
            await new Promise(resolve => setTimeout(resolve, 0));
            const p = component.root.findByType('p');
            expect(p.children.join('')).toContain('Not found');
    })
})
