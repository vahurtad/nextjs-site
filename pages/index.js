import React from 'react'
import '../static/scss/style.scss';
import Head from '../components/head'
import { Grommet } from "grommet";
import { Container } from 'next/app'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'
import Landing from '../components/Landing'


class Home extends Container{
  render() {
  const { Component, pageProps, apolloClient } = this.props
  return (
      <ApolloProvider client={apolloClient}>
          <Grommet full>
              <Head title="vanessa hurtado" />
              <Landing />
          </Grommet>
      </ApolloProvider>
      
      )
  }
  
}

export default withApolloClient(Home)

