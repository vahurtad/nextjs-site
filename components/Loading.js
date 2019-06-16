import React from "react";
import "../static/scss/style.scss";
import { Image, Box, Grid, Heading } from "grommet";

const Loading = () => (
  <Grid
    className="grid-layout"
    align="center"
    alignContent="center"
    alignSelf="center"
    justify="center"
  >
    <Box>
      <Heading level={1} color="#69ace2">
        Loading GraphQL
        <Image
          fit="contain"
          src="static\images\graphql.svg"
          width="100px"
          alignSelf="center"
        />{" "}
      </Heading>
    </Box>
  </Grid>
);
export default Loading;
