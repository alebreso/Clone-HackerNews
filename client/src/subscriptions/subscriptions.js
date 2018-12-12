import gql from "graphql-tag";

export const NEW_LINKS_SUBSCRIPTION = gql`
  subscription {
    newLink {
      node {
        id
        url
        description
        createdAt
        postedBy {
          id
          username
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

export const NEW_VOTES_SUBSCRIPTION = gql`
  subscription {
    newVote {
      node {
        id
        link {
          id
          url
          description
          createdAt
          postedBy {
            id
            username
          }
          votes {
            id
            user {
              id
            }
          }
        }
        user {
          id
        }
      }
    }
  }
`