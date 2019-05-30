import gql from 'graphql-tag'
import { Query } from 'react-apollo';

export const gitRepo = gql`
query listRepos($queryString: String!){
  user(login: $queryString) {
    repositories(first: 50, isFork: false) {
      nodes {
        nameWithOwner
        name
        url
        description
        languages(last: 5) {
          nodes {
            name
          }
        }
          defaultBranchRef {
            name
            target {
              ... on Commit {
                history {
                  totalCount
                  nodes {
                    additions
                    deletions
                  }
                }
              }
            }
          }
      }
    }
  }
}
`
export const gitRepoVars = {
  queryString: 'vahurtad'
}

export default function RepoList() {
  return (
    <Query query={gitRepo} variables={gitRepoVars}></Query>
  )
}