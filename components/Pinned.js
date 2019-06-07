import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from './Loading'
import Error from './Error'
import '../static/scss/style.scss';
import { Anchor,Heading, ResponsiveContext, Grommet, Box, Button, Grid, Text } from "grommet";
import { LinkNext, Github } from 'grommet-icons';

const gitRepo = gql`
query allPosts($queryString: String!, $repoString: String!) {
    repository(owner: $queryString, name: $repoString) {
      name
      url
      id
      description
      languages(last: 5) {
          nodes {
          name
          color
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
`;

const gitRepoVars = {
    queryString: "civic-app",
    repoString: "civic-app"
}
const ownerList =["vahurtad", "civic-app"];
const repoList = {"civic-app": 1,"nextjs-site": 0,"traderfeed": 0,"gdax-tt": 0}
function Pinned(props) {
    return (
        <>
        {Object.keys(repoList).map(function(key) {
            return (
                <Query query={gitRepo} variables={{
                    queryString: ownerList[repoList[key]],
                    repoString: key
                }}>
                    {({ loading, error, data }) => {
                        if (error) return <Error message={error.message}/>
                        if (loading) return <Loading/>
                        return (
                            
                            <Box className="repo-card pinned"                         
                            fill="vertical"
                            direction="column"
                            flex='grow' justify='start' 
                            key={data.repository.id} >
                                <Button
                                    href={data.repository.url}
                                    label={data.repository.name}
                                    icon={<LinkNext color="#403f4c"/>}
                                    reverse="true"
                                    color="#403f4c"
                                />
                                <Box className="repo-desc" background="rgba(195,207,206,0.9)">
                                    <Text>{data.repository.description}</Text>
                                    <br/>
                                    <Text color='#403f4c'  style={{"font-weight": "800"}}  >| </Text>
                                    {data.repository.languages.nodes.map(l => (
                                        <>
                                        <Text className="repo-lang" 
                                        color='#403f4c'  
                                        >{l.name}  </Text> 
                                        <Text color='#403f4c' style={{"font-weight": "800"}} > | </Text>
                                        </>
                                    ))}
                                </Box>
                            </Box>
                        )
                    }}
                </Query>
                )
        })}
        </>
)}

export default Pinned