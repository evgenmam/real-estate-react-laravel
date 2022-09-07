import { gql } from '@apollo/client'

export const FILTER_PROPERTIES = gql`
  query filterPropertiesQuery($filterInput: filterInput) {
    filterProperties(input: $filterInput) {
      id
      name
      rooms
      bathrooms
      longitude
      latitude
      description
      price
      img_path
    }
  }
`
// $rooms: Int
// $bathrooms: Int
// $types: [String]
// $price: [Int]
// $search: String

// rooms: $rooms
// bathrooms: $bathrooms
// types: $types
// price: $price
// search: $search
