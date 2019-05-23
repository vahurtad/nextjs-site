import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import '../static/scss/style.scss';
import { Grommet, Box, Button, Grid, Text } from "grommet";

const Home = () => (
  <Grommet full>
    <Head title="Home" />
    {/* <Nav /> */}

      {/* <div className="box">
        <div className="shape">
        </div>
      </div>
      <div className="box-bottom">
        <div className="shape">
        </div>
      </div> */}
      <Grid 
        fill
        columns={["medium", "flex"]}
        rows={["flex"]}
        gap="small"
        areas={[
                { name: "nav", start: [0, 0], end: [0, 0] },
                { name: "main", start: [1, 0], end: [1, 0] }
              ]}>
        <Box fill="horizontal" gridArea="nav"
             responsive="true" 
             border={{ color: 'brand', size: 'large' }}>

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
          </div>

        </Box>

        <Box gridArea="main" responsive="true" 
        border={{ color: 'light-2', size: 'large' }}  >

          <article className="about">
            <p className="description">
              Highly determined programmer alwayvs finding motivation in merging my hobbies with technology.

              I play video games with friends, and on my free time I enjoy learning about data science and other new technologies. 
            </p>
          </article>

        </Box>
      </Grid>  
  </Grommet>
)

export default Home
