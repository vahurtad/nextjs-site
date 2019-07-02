import React, { Component } from 'react';
import Link from 'next/link';
import '../static/scss/style.scss';
import {
  Button,
  WorldMap,
  Paragraph,
  Anchor,
  Heading,
  ResponsiveContext,
  Grommet,
  Box,
  Grid,
  Text
} from 'grommet';
import { Next, Down, Up, Mail, Document, Linkedin, Github } from 'grommet-icons';
import Head from './head';
import Pinned from './Pinned';

class Landing extends Component {
  constructor() {
    super();
    this.down = React.createRef();
    this.up = React.createRef();
    this.state = { 
      pe: false,
      sf: false, 
      location: '', 
      background: '2' 
    };
  }

  componentDidMount() {
    this.scrollToView();
    this.scrollTop();
  }

  scrollToView = () => {
    this.down.current.scrollIntoView({
      behavior: 'smooth'
    });
    this.setState({background :'1'})
  };

  scrollTop = () => {
    setTimeout(() => {
      // scrollIntoView only working with timeout ¯\_(ツ)_/¯ 
      this.up.current.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
    
    this.setState({background :'2'})
  };

  onSelectPlace = ([lat, lon]) => {
    const { pe, sf } = this.state;
    if (lat === -11.376121998318009) {
      if (lon === -75.56989247311827) {
        this.setState({ pe: !pe });
        if (pe) this.setState({ location: '' });
        else this.setState({ location: 'Lima' });
      }
    } else if (lat === 38.667966663699666) {
      if (lon === -121.3763440860215) {
        this.setState({ sf: !sf });
        if (sf) this.setState({ location: '' });
        else this.setState({ location: 'Bay Area' });
      }
    }
  };

  render() {
    const { pe, sf, location } = this.state;
    return (
      <>

        <ResponsiveContext.Consumer>
          {() => (
            <Grid
              className="grid-layout"
              align="start"
              alignContent="start"
              columns={['1/3', '2/3']}
            >
              <Box
                className="first-box"
                fill="horizontal"
                direction="row"
                flex="grow"
                justify="start"
              >
                <div className="box">
                  <div className="shape">
                    <span ref={this.up} />
                  </div>
                </div>
                <Heading a11yTitle='hello world' level={1} className="hero title">
                  <Text className="hello">
                    Hello
                    <Text>.</Text>
                  </Text>
                  <br />
                  <Text className="world">
                    World
                    <Text>.</Text>
                  </Text>
                  <Text className="name" a11yTitle='i`m vanessa'>
                    <br style={{ 'margin-bottom': '0.75em' }} />
                    I`m
                    <Text> Vanessa</Text>
                    <Text>.</Text>
                  </Text>
                </Heading>
              </Box>
              <Box flex="grow" justify="start" className="description">
                <Paragraph className="about">
                  <Text weight={800} className="heading-bold">
                    About.
                    <br />
                  </Text>
                  Highly determined programmer always finding motivation in
                  merging my hobbies with technology.
                  <br />
                  <br />
                  I`m a casual gamer, and on my free time I enjoy learning about
                  data, statistics and other new technologies.
                </Paragraph>
                <Paragraph className="education">
                  <br />
                  <Text weight={800} className="heading-bold">
                    Education.
                    <br />
                  </Text>
                  B.S., Computer Science
                  <br />
                  University of California, Santa Cruz
                  <br />
                  Graduated 2016
                </Paragraph>
              </Box>
              <Box className="socials" a11yTitle='social links to find me'>
                <Text weight={800} className="heading-bold">
                  <br />
                  Find me here.
                  <br />
                  <br />
                </Text>
                <Anchor
                  icon={<Github color="#403f4c" size="large" />}
                  label="Github"
                  href="https://github.com/vahurtad"
                  target="blank"
                />
                <Anchor
                  icon={<Linkedin color="#403f4c" size="large" />}
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/hurtadovanessa/"
                  target="blank"
                />
                <Anchor
                  icon={<Document color="#403f4c" size="large" />}
                  label="Resume"
                  href="https://drive.google.com/file/d/1ltOYN02gCaA473H596rsJ-doAjHwxzFd/view"
                  target="blank"
                />
                <Anchor
                  icon={<Mail color="#403f4c" size="large" />}
                  label="Email me"
                  href="mailto:vanessa_hurtado@yahoo.com"
                  target="blank"
                />
              </Box>
            </Grid>
          )}
        </ResponsiveContext.Consumer>
        <Anchor
          className="pinned-link"
          weight={800}
          color="#403f4c"
          label="See Pinned Projects."
          reverse
          icon={<Down color="#403f4c" size="medium" />}
          onClick={this.scrollToView}
        />
        <Box
          className="map"
          ref={this.down}
          // onMouseOver={() => this.setState({ over: true })}
          // onMouseOut={() => this.setState({ over: false })}
        >
          <Paragraph className="" alignSelf="center">
            {'From '}
            {pe ? (
              <Text className="location-text" weight={800}>
                {`${location}, Peru`}
              </Text>
            ) : (
              ' Lima, Peru '
            )}
            {' to the '}
            {sf ? (
              <Text className="location-text" weight={800}>
                {`${location}`}
              </Text>
            ) : (
              ' Bay Area'
            )}
            {'.'}
          </Paragraph>
          <WorldMap
            a11yTitle='map showing where i am from'
            alignSelf="center"
            height="350"
            color="#403f4c"
            legend
            continents={[
              {
                name: 'South America',
                color: '#e84855'
              },
              {
                name: 'North America',
                color: '#e84855'
              }
            ]}
            onSelectPlace={place => {
              this.onSelectPlace(place);
            }}
            places={[
              {
                name: 'Lima',
                location: [-12.046374, -77.042793],
                color: pe ? '#69ace2' : '#403f4c',
                id: 'lima'
              },
              {
                name: 'SF',
                location: [37.553152, -122.302895],
                color: sf ? '#69ace2' : '#403f4c',
                id: 'bayarea'
              }
            ]}
            selectColor="#403f4c"
          />
        </Box>
        
        <Heading level={1} className='pinned-title'>Pinned Projects.</Heading>
        <Anchor
          href='/repo-list'
          className='see-more'
          icon={<Next color="#403f4c" size="medium" />}
          weight={200}
          color="#403f4c"
          label='See More Projects.'
          reverse
        />
        <Grid
          a11yTitle='see my pinned repos'
          id="pinned"
          className="grid-layout pinned"
          align="end"
          alignContent="start"
          columns={['1/2', '1/2']}
        >
          <Pinned />
        </Grid>
        <br />
        <Anchor
          icon={<Up color="#403f4c" size="medium" />}
          weight={200}
          color="#403f4c"
          className="back-top"
          onClick={this.scrollTop}
          label='Back to Top'
          reverse
        />
      </>
    );
  }
}

export default Landing;
