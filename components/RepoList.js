import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import PostUpvoter from './PostUpvoter'

export const gitRepo = gql`
  query listRepos($queryString: String!){
    user(login: $queryString) {
     
    }
  }
`
export const gitRepoVars = {
  queryString: 'vahurtad'
}

export default function RepoList () {
  return (
    <Query query={gitRepo} variables={gitRepoVars}></Query>
  )
}