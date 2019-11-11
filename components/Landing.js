import React, { Component } from 'react';
import '../static/scss/style.scss';
import {
  Button,
  WorldMap,
  Paragraph,
  Anchor,
  Heading,
  ResponsiveContext,
  Box,
  Grid,
  Text
} from 'grommet';
import {
  Next,
  Down,
  Up,
  Mail,
  Document,
  Linkedin,
  Github,
  Favorite
} from 'grommet-icons';
import Pinned from './Pinned';

class Landing extends Component {
  constructor() {
    super();
    this.down = React.createRef();
    this.up = React.createRef();
    this.state = {
      pe: false,
      sf: false,
      location: ''
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
  };

  scrollTop = () => {
    setTimeout(() => {
      // scrollIntoView only working with timeout ¯\_(ツ)_/¯
      this.up.current.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
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
              <Grid
                className="first-box"
                align="start"
                alignContent="start"
                rows={['1/3', '2/3']}
              >
                <span ref={this.up} />
                <Heading
                  a11yTitle="hello world"
                  level={1}
                  className="hero title"
                >
                  <Text className="hello">
                    Hello
                    <Text>.</Text>
                  </Text>
                  <br />
                  <Text className="world">
                    World
                    <Text>.</Text>
                  </Text>
                  <Text className="name" a11yTitle="i`m vanessa">
                    <br style={{ 'margin-bottom': '0.75em' }} />
                    I`m
                    <Text> Vanessa</Text>
                    <Text>.</Text>
                  </Text>
                </Heading>
                <Box className="socials" a11yTitle="social links to find me">
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
                    href="https://drive.google.com/file/d/1oNC15Mskk4_fYVvxLzk2PwtZsDAq5q0g/view"
                    target="blank"
                  />
                  <Anchor
                    icon={<Mail color="#403f4c" size="large" />}
                    label="Email me"
                    href="mailto:vahurtad@gmail.com"
                    target="blank"
                  />
                </Box>
              </Grid>
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

                <Paragraph className="currently">
                  <br />
                  <Text weight={800} className="heading-bold">
                    Doing Now.
                    <br />
                  </Text>
                  DataCamp - Quantitative Analyst with R
                </Paragraph>
                <Paragraph className="certificates">
                  <br />
                  <Anchor
                    href="https://github.com/vahurtad/certificates"
                    icon={<Next color="#403f4c" size="medium" />}
                    weight={200}
                    color="#403f4c"
                    label={
                      <Text weight={800} className="heading-bold">
                        Certificates.
                      </Text>
                    }
                    reverse
                  />
                  <br />
                  <br />
                  Importing Data in R (Part 1)
                  <br />
                  Intermediate R for Finance
                  <br />
                  Introduction to R
                  <br />
                  Introduction to the Tidyverse
                  <br />
                  Pivot Tables with Spreadsheets
                  <br />
                  Probability Puzzles in R
                  <br />
                  Working with Web Data in R
                </Paragraph>
              </Box>
              <Button
                alignSelf="center"
                className="pinned-link"
                weight={800}
                color="#403f4c"
                label="See Pinned Projects."
                reverse
                icon={<Down color="#403f4c" size="medium" />}
                onClick={this.scrollToView}
              />
            </Grid>
          )}
        </ResponsiveContext.Consumer>

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
            a11yTitle="Worldmap"
            alignSelf="center"
            height="350"
            viewBox="-250 0 940 460"
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

        <Text weight={800} className="pinned-title heading-bold">
          Pinned Projects.
          <br />
        </Text>
        <Anchor
          href="/repo-list"
          className="see-more"
          icon={<Next color="#403f4c" size="medium" />}
          weight={200}
          color="#403f4c"
          label="See More Projects."
          reverse
        />
        <Grid
          a11yTitle="see my pinned repos"
          id="pinned"
          className="grid-layout pinned"
          align="end"
          alignContent="start"
          columns={['1/2', '1/2']}
        >
          <Pinned />
          <Button
            icon={<Up color="#403f4c" size="medium" />}
            weight={200}
            color="#403f4c"
            className="back-top"
            onClick={this.scrollTop}
            label="Back to Top"
          />
        </Grid>
        <br />

        <Paragraph
          className="madeby"
          alignSelf="center"
          align="center"
          alignContent="center"
          style={{ textAlign: 'center', maxWidth: '100%', fontSize: '14px' }}
        >
          Made by:
          <Text style={{ fontSize: '16px' }}>
            Me
            <Favorite color="#e84855" size="small" />
          </Text>
          <br />
          Designed by:
          <Text style={{ fontSize: '16px' }}>
            Me
            <Favorite color="#e84855" size="small" />
          </Text>
        </Paragraph>
      </>
    );
  }
}

export default Landing;
