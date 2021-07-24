//removed email from query as it is not need for this project=
import { gql } from "@apollo/client";

export const ListZellerCustomers = gql`
  query ListZellerCustomers {
  listZellerCustomers {
    items {
      id
      name
      role
    }
  }
}
`