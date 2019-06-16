import React, { Component } from "react";
import Link from "next/link";
import Head from "./head";
import "../static/scss/style.scss";
import {
  WorldMap,
  Paragraph,
  Anchor,
  Image,
  Heading,
  ResponsiveContext,
  Grommet,
  Box,
  Button,
  Grid,
  Text
} from "grommet";
import Pinned from "./Pinned";
import { Down, Up, Mail, Document, Linkedin, Github } from "grommet-icons";

class Landing extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.top = React.createRef();
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
      behavior: "smooth"
    });
  };
  scrollTop = () => {
    this.top.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  render() {
    return (
      <Grommet full>
        <Head title="van hurtado" />
        {/* <Nav /> */}
        <ResponsiveContext.Consumer>
          {size => (
            <Grid
              className="grid-layout"
              align="start"
              alignContent="start"
              columns={["1/3", "2/3"]}
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
                    <span ref={this.top} />
                  </div>
                </div>
                <Heading level={1} className="hero title">
                  <Text>
                    Hello<Text>.</Text>
                  </Text>
                  <br />
                  <Text>
                    Hello<Text>.</Text>
                  </Text>
                  <Text className="name">
                    <br style={{ "margin-bottom": "0.75em" }} />
                    I'm <Text>Vanessa</Text>
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
                  I'm a casual gamer, and on my free time I enjoy learning about
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
              <Box className="socials">
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
                  href={`mailto:vanessa_hurtado@yahoo.com`}
                  target="blank"
                />
              </Box>
              <Box width={"100%"} className="map">
                <WorldMap
                  color="#403f4c"
                  continents={[
                    {
                      name: "South America",
                      color: "neutral-4",
                      onClick: name => {}
                    }
                  ]}
                  onSelectPlace={(lat, lon) => {}}
                  places={[
                    {
                      name: "Lima",
                      location: [-12.046374, -77.042793],
                      color: "blue",
                      onClick: name => {
                        alert(name);
                      }
                    }
                  ]}
                  selectColor="#403f4c"
                />
                <Anchor
                  className="pinned-link"
                  weight={800}
                  color="#403f4c"
                  label="See Pinned Projects."
                  reverse={true}
                  icon={<Down color="#403f4c" size="large" />}
                  onClick={this.scrollToView}
                />
              </Box>
            </Grid>
          )}
        </ResponsiveContext.Consumer>
        <Grid
          id="pinned"
          className="grid-layout pinned"
          align="end"
          alignContent="start"
          columns={["1/2", "1/2"]}
        >
          <Pinned />
          <span ref={this.myRef} />
        </Grid>
        <br />
        <Anchor
          icon={<Up color="#403f4c" size="large" />}
          weight={200}
          color="#403f4c"
          className="back-top"
          onClick={this.scrollTop}
        />
      </Grommet>
    );
  }
}

export default Landing;
