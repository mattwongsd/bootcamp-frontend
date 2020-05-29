import gql from "graphql-tag";

export const ALL_BOOTCAMPS_QUERY = gql`
  {
    allBootcamps {
      id
      name
      description
      website
      phone
      email
      address
      careers
      averageRating
      photo
      jobAssistance
      createdAt
    }
  }
`;
