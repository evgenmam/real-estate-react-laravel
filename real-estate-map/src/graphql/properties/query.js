import { gql } from '@apollo/client'

export const FILTER_PROPERTIES = gql`
  query filterPropertiesQuery($filterInput: FilterInput) {
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
