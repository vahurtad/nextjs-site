import React from 'react'
import Link from 'next/link'
import Head from './head'
import Nav from './nav'
import '../static/scss/style.scss';
import { Image,Heading,ResponsiveContext, Grommet, Box, Button, Grid, Text } from "grommet";
import {YOUR_GITHUB_PERSONAL_TOKEN} from '../.env'
import Pinned from './Pinned';

const Landing = (props) => (
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
          </Heading>

          {/* <div className="box-bottom">
            <div className="shape">
            </div>
          </div> */}
        </Box>
        
        <Box 
          flex='grow' justify='start'
          className="description"
        >
          <Text className="about">

            <Text weight={800}>About.<br/></Text> 
              Highly determined programmer always finding motivation in merging my hobbies with technology.
              <br/>
              <br/>
              I play video games with friends, and on my free time I enjoy learning about data science and other new technologies. 
          </Text>
          <Text className="education">
            <br/>
            <Text weight={800}>Education.<br/></Text> 
            B.S., Computer Science<br/>
            University of California, Santa Cruz<br/>
            Graduated 2016
          </Text>


        </Box>
        <Box>
        <Text weight={800} className='seeMore'><br/>See Pinned Projects</Text>

        </Box>
        <Grid
          className="grid-layout pinned"
          align="end"
          alignContent="start"
          columns={['1/2','1/2']}
        >
          <Pinned/>
        </Grid>
        
      </Grid>
    )}

  </ResponsiveContext.Consumer>
  </Grommet>
)

export default Landing
