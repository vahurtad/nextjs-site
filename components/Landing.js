import React,  { Component }  from 'react'
import Head from './head'
import '../static/scss/style.scss';
import { Paragraph, Anchor,Image,Heading,ResponsiveContext, Grommet, Box, Button, Grid, Text } from "grommet";
import Pinned from './Pinned';
import { Mail, Document,Linkedin,LinkNext, Github } from 'grommet-icons';

class Landing extends Component{
  constructor() {
    super()
    this.myRef = React.createRef();
  }
  // handleClick = () => alert(this.myRef.current.value)
  // componentDidMount() {
  //   document.title = 'Components - ';
  //   this.scrollToView();
  // }

  // componentDidUpdate() {
  //   this.scrollToView();
  // }
  scrollToView = () => {
    this.myRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }

  render(){
    return (
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
            ref={this.myRef}
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
            <Text><br/>I'm <Text>Vanessa</Text><Text>.</Text></Text>
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
          <Paragraph className="about">
            <Text weight={800} className="heading-bold">About.<br/></Text> 
              Highly determined programmer always finding motivation in merging my hobbies with technology.
              <br/>
              <br/>
              I'm a casual gamer, and on my free time I enjoy learning about data, statistics and other new technologies. 
          </Paragraph>
          <Paragraph className="education">
            <br/>
            <Text weight={800} className="heading-bold">Education.<br/></Text> 
            B.S., Computer Science<br/>
            University of California, Santa Cruz<br/>
            Graduated 2016
          </Paragraph>
       
          <Text weight={800} className='heading-bold'><br/>Find me here.<br/><br/></Text>
          <Anchor icon={<Github color="#403f4c" size="large"/>} label="Github" href="#" />
          <Anchor icon={<Linkedin color="#403f4c" size="large"/>} label="LinkedIn" href="#" />
          <Anchor icon={<Document color="#403f4c" size="large"/>} label="Resume" href="#" />
          <Anchor
          icon={<Mail color="#403f4c" size="large" />}
          label="Email me"
          href={`mailto:vanessa_hurtado@yahoo.com`}
          />
          <Anchor weight={800} color="#403f4c" className='heading-bold' onClick={this.scrollToView}><br/>See Pinned Projects.</Anchor>

        </Box>
        <Grid
          id="pinned"
          className="grid-layout pinned"
          align="end"
          alignContent="start"
          columns={['1/2','1/2']}
        >
          <Pinned />
          <span ref={this.myRef} />
          <Anchor weight={800} color="#403f4c" className='heading-bold' onClick={this.scrollToView}><br/>Back Top.</Anchor>
        </Grid>
        
      </Grid>
    )}

  </ResponsiveContext.Consumer>
  </Grommet>

    )
  }
  
}

export default Landing
