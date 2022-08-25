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
    id
    name
    gallery
    description
    category
    inStock
    brand
    prices {
      currency {
        label
        symbol
      }
      amount
    }
    attributes {
      name
      type
      items {
        value
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
        attributes {
          name
          type
          items {
            value
            displayValue
          }
        }
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