import React from 'react';
import '../static/scss/style.scss';
import { ApolloProvider } from 'react-apollo';
import { Container } from 'next/app';
import { Grommet } from 'grommet';
import Head from '../components/head';
import Landing from '../components/Landing';
import withApolloClient from '../lib/with-apollo-client';

class Home extends Container {
  render() {
    const { apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Grommet full className='full-body1'>
          <Head title="van hurtado" />
          <Landing />
        </Grommet>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(Home);
