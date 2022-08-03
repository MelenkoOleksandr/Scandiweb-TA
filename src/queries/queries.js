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

export const GET_PRODUCT_BY_Id = gql`
 query GetProduct($id: String!) {
  product(id: $id) {
    name
    gallery
    description
    category
    prices {
      currency {
        label
        symbol
      }
      amount
    }
    attributes {
      name
      items {
        displayValue
      }
    }
  }
}
`

export const GET_ALL_PRODUCTS_IN_CATEGORY = gql`
  query getCategories($category: CategoryInput) {
    category(input: $category) {
      name
      products {
        id
        name
        gallery
        category
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