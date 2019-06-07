import React from 'react'
import '../static/scss/style.scss';
import Head from '../components/head'
import { Grommet } from "grommet";
import { Container } from 'next/app'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'
import Landing from '../components/Landing'


class Home extends Container{
    timeout = null;
    state = {
      isScrolling: false
    };
    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }
        
        componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    onScroll = () => {
        this.setState({ isScrolling: true });

        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.setState({ isScrolling: false });
        }, 200);
    };
    
    render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <ApolloProvider client={apolloClient}>
          <Grommet full>
              <Head title="vanessa hurtado" />
              <Landing isScroll={this.state.isScrolling}/>
          </Grommet>
      </ApolloProvider>
      
      )
  }
  
}

export default withApolloClient(Home)

