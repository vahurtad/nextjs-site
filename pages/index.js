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
    {size => (
      <Grid
        className="grid-layout"
        align="end"
        alignContent="start"
        columns={['1/3','2/3']}
        rows={size !== 'small' && { count: 'fill', size: '1/3' }}
        gap="small"
              >
        <Box 
        className="first-box"
          fill="horizontal"
          direction="row"
          flex='grow' justify='start' 
          responsive="true" 
          border={{ color: 'brand', size: 'large' }}
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
          </div>

          <div className="box-bottom">
          <div className="shape">
          </div>
        </div>
                    
          <Image
            className='bg-img'
            fit="cover"
            src="/static/images/vector2.jpg"
            style={{
              display:'inline-block',
              background: 'linear-gradient(0deg,rgba(195,207,206,0.8),rgba(195,207,206,0.8))',
              position:'relative',
              display:'block',
              height:'200px', 
              width:'auto',
              
            }}
          />

          
        </Box>
        
        <Box 
          responsive="true" 
          flex='grow' justify='start'
          border={{ color: 'light-2', size: 'large' }}  >

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
