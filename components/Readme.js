import React from 'react';
import { Query } from 'react-apollo';
import { string } from 'prop-types';
import gql from 'graphql-tag';
import { DropButton, Image, Markdown, Box, Button, Paragraph } from 'grommet';
import { Close, LinkNext } from 'grommet-icons';
import '../static/scss/style.scss';
import Loading from './Loading';
import Error from './Error';

const readmeRepo = gql`
  query allPosts($queryString: String!, $repoString: String!) {
    repository(owner: $queryString, name: $repoString) {
      object(expression: "master:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
`;

const readme = {
  'civic-app': 'Civic',
  'lcf-generatepress': 'Handbook-Report'
};

class Readme extends React.Component {
  // static propTypes = PropTypes;

  state = {};

  onClose = () => {
    this.setState({ open: false });
    setTimeout(() => this.setState({ open: undefined }), 1);
  };

  render() {
    const { open } = this.state;
    const { name, url } = this.props;
    return (
      <Query
        query={readmeRepo}
        variables={{
          queryString: 'vahurtad',
          repoString: readme[name]
        }}
      >
        {({ loading, error, data }) => {
          if (error) return <Error message={error.message} />;
          if (loading) return <Loading />;
          return (
            <DropButton
              label="Read More"
              open={open}
              onClose={() => this.setState({ open: undefined })}
              dropAlign={{ top: 'top', left: 'left' }}
              dropContent={
                <Box className="readme full-body2">
                  <Button
                    label="CLOSE"
                    onClick={this.onClose}
                    icon={<Close color="#e84855" />}
                    alignSelf="end"
                    reverse
                    plain
                  />
                  <Markdown
                    components={{
                      p: {
                        component: Paragraph,
                        props: {
                          textAlign: 'start'
                        }
                      },
                      image: {
                        component: Image,
                        props: {
                          fit: 'cover',
                          a11yTitle: 'imageof',
                          fallback: 'loading img',
                          margin: 'large',
                          opacity: 'weak'
                        }
                      }
                    }}
                  >
                    {data.repository.object.text}
                  </Markdown>
                  <br style={{ 'margin-bottom': '1em' }} />
                  <Button
                    href={url}
                    label="Go to Repo"
                    icon={<LinkNext color="#403f4c" />}
                    reverse
                    color="#403f4c"
                    target="blank"
                    alignSelf="end"
                  />
                  <br />
                </Box>
              }
            />
          );
        }}
      </Query>
    );
  }
}

export default Readme;

Readme.propTypes = {
  name: string
};
