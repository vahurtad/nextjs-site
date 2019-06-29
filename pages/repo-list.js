import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Container } from 'next/app'
import { Grommet } from 'grommet';
import Nav from '../components/nav'
import Repo from '../components/Repo'
import Head from '../components/head'
import withApolloClient from '../lib/with-apollo-client'


class RepoList extends Container{
  render() {
    const { apolloClient } = this.props
    return (
      <ApolloProvider client={apolloClient}>
        <Grommet full className='full-body3'>
          <Head title="van hurtado" />
          <Nav />
          <Repo />
        </Grommet>
      </ApolloProvider>
    )
  }
} 

export default withApolloClient(RepoList)
