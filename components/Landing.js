import React from 'react'
import Link from 'next/link'
import Head from './head'
import Nav from './nav'
import '../static/scss/style.scss';
import { Image,Heading,ResponsiveContext, Grommet, Box, Button, Grid, Text } from "grommet";
import {YOUR_GITHUB_PERSONAL_TOKEN} from '../.env'
import Pinned from './Pinned';

const Landing = () => (
  <Grommet full>
    <Head title="van hurtado" />
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

          <Heading level={1} className="hero title">
            <Text>Hello<Text>.</Text></Text>
            <br/>
            <Text>Hello<Text>.</Text></Text>
            <br/>
            <Text>{size}</Text>
          </Heading>

          <div className="box-bottom">
            <div className="shape">
            </div>
          </div>
        </Box>
        
        <Box 
          flex='grow' justify='start'
          className="description"
        >
          <Text className="about">
            <Text>About.<br/></Text> 
              Highly determined programmer always finding motivation in merging my hobbies with technology.
              <br/>
              <br/>
              I play video games with friends, and on my free time I enjoy learning about data science and other new technologies. 
          </Text>
          <Text className="education">
            <br/>
            <Text>Education.<br/></Text> 
            B.S., Computer Science<br/>
            University of California, Santa Cruz<br/>
            Graduated 2016
          </Text>

        </Box>
        <Box>
          <Pinned/>
        </Box>
        
      </Grid>
    )}

  </ResponsiveContext.Consumer>
  </Grommet>
)

export default Landing
