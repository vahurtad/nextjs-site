import Nav from '../components/nav'
import Repo from '../components/Repo'
import Head from '../components/head'
import React from 'react'
import { Grommet } from "grommet";
import { Container } from 'next/app'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'


class RepoList extends Container{
    render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
        <ApolloProvider client={apolloClient}>
            <Grommet full>
                <Head title="vanessa hurtado" />
                <Nav />
                <Repo />
            </Grommet>
        </ApolloProvider>
        
        )
    }
    
}

export default withApolloClient(RepoList)
