import React from 'react';
import '../static/scss/style.scss';
import { ApolloProvider } from 'react-apollo';
import { Grommet } from 'grommet';
import { Container } from 'next/app';
import Head from '../components/head';
import withApolloClient from '../lib/with-apollo-client';
import Landing from '../components/Landing';

class Home extends Container {
  render() {
    const { apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Grommet full>
          <Head title="vanessa hurtado" />
          <Landing />
        </Grommet>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(Home);
