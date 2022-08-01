import { gql } from '@apollo/client';


export const GET_ALL_CURRENCIES = gql`
        {
          currencies {
            label
            symbol
          }
        }
      `

export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    categories {
      name
    }
  }
`;

export const GET_ALL_PRODUCTS_IN_CATEGORY = gql`
  query getCategories($category: CategoryInput) {
    category(input: $category) {
      name
      products {
        id
        name
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
        inStock
      }
    }
  }
`;