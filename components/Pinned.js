import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from './Loading'
import Error from './Error'
import '../static/scss/style.scss';
import { Anchor,Heading, ResponsiveContext, Grommet, Box, Button, Grid, Text } from "grommet";
import { LinkNext, Github } from 'grommet-icons';

const gitRepo = gql`
    query allPosts($queryString: String!){
        user(login: $queryString) {
            login
            url
        repositories(first: 50, isFork: false, orderBy:{field: CREATED_AT, direction:DESC}) {
            nodes {
                id
                isArchived
                isPrivate
                name
                url
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
        }
    }
`;

const gitRepoVars = {
    queryString: "vahurtad"
}

function Pinned(props) {
    return (
        <Query query={gitRepo} variables={gitRepoVars}>
            {({ loading, error, data }) => {
                if (error) return <Error message={error.message}/>
                if (loading) return <Loading/>
                return (
                  <Text>{data.user.url}</Text>
        )
    }}
</Query>
)}

export default Pinned