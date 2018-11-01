import { gql } from "apollo-boost";

export const INDEX_QUERY = gql`
  {
    categories {
      id
      name
    }
    onSale: products(where: { onsale: true }) {
      id
      name
      detail
      price
      photo {
        url
      }
    }
    allProducts: products(where: { onsale: false }) {
      id
      name
      detail
      price
      photo {
        url
      }
    }
  }
`;
