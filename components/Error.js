import React from 'react'
import '../static/scss/style.scss';
import { Box, Grid, Heading, Text } from "grommet";

const Error = (props) => (
    <Grid
    className="grid-layout"
    align="center"
    alignContent="center"
    alignSelf="center"
    justify="center"
    >
        <Box>
            <Heading level={1} color="#e84855">Encountered Error</Heading>  
            <Text>{props.message}</Text>  
        </Box>

    </Grid>
   
    
)
export default Error