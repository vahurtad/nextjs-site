import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import '../static/scss/style.scss';
import { Image,ResponsiveContext, Grommet, Box, Button, Grid, Text } from "grommet";

const Home = () => (
  <Grommet full>
    <Head title="vanessa hurtado" />
    {/* <Nav /> */}
    <ResponsiveContext.Consumer>
    {(size) => (
      <Grid
        className="grid-layout"
        align="end"
        alignContent="start"
        columns={['1/3','2/3']}
        >
        <Box 
        className="first-box"
          fill="horizontal"
          direction="row"
          flex='grow' justify='start' 
          >

          <div className="box">
            <div className="shape">
            </div>
          </div>

          <div className="hero">
            <h1 className="title">
              <span>Hello</span><span>.</span>
              <br/>
              <span>Hello</span><span>.</span>
            </h1>
            <Text>{size}</Text>

          </div>

          <div className="box-bottom">
            <div className="shape">
          </div>
        </div>
        </Box>
        
        <Box 
          flex='grow' justify='start'
          >

            <Text className="description">
                  Highly determined programmer always finding motivation in merging my hobbies with technology.

                  I play video games with friends, and on my free time I enjoy learning about data science and other new technologies. 
            </Text>

          </Box>

        
        </Grid>
    )}

  </ResponsiveContext.Consumer>
  </Grommet>
)

export default Home
