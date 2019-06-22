import React from 'react'
import {string} from 'prop-types';
import '../static/scss/style.scss';
import { Box, Grid, Heading, Text } from 'grommet';

const Error = (props) => {
  const {message} = props;
  return (
    <Grid
      className="grid-layout"
      align="center"
      alignContent="center"
      alignSelf="center"
      justify="center"
    >
      <Box>
        <Heading level={1} color="#e84855">Encountered Error</Heading>
        <Text>{message}</Text>  
      </Box>
    </Grid> 
  )}
export default Error

Error.propTypes = {
  message: string
}