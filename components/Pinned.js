import React from 'react';
import Link from 'next/link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { DropButton, Image, Markdown, Box, Button, Text, Paragraph, Anchor } from 'grommet';
import { Close, LinkNext } from 'grommet-icons';
import Loading from './Loading';
import Error from './Error';
import '../static/scss/style.scss';

const shortid = require('shortid');

const gitRepo = gql`
  query allPosts($queryString: String!, $repoString: String!) {
    repository(owner: $queryString, name: $repoString) {
      name
      url
      id
      description
      homepageUrl
      languages(last: 5) {
        edges {
          size
          node {
            id
            name
            color
          }
        }
      }
      object(expression: "master:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
`;

const ownerList = ['vahurtad', 'civic-app'];
const repoList = {
  'civic-app': 1,
  'nextjs-site': 0,
  'traderfeed': 0,
  'lcf-generatepress': 0
};
const Quote = ({ children, ...rest }) => (
  <Box
    pad="medium"
    round="medium"
    border={{
      side: 'all',
      color: 'brand',
      size: '1px'
    }}
    {...rest}
  >
    <Text>
        {children}
    </Text>
  </Box>
);

const Pre = ({ children }) => (
  <Box
    as="pre"
    background="#403f4c"
    pad="small"
    round="small"
  >
    <Text>
      <code>
        {children}
      </code>
    </Text>
  </Box>
);

const iff = (condition, then, otherwise) => condition ? then : otherwise;

class Pinned extends React.Component {
  state = {};

  onClose = () => {
    this.setState({ open: false });
    setTimeout(() => this.setState({ open: undefined }), 1);
  };

  render(){ 
    const { open } = this.state;
    return(
      <>
        <Link prefetch href="/repo-list">
          <a href="/repo-list"> See More Projects.</a>
        </Link>
        {Object.keys(repoList).map((key) => (
          <Query
            key={shortid.generate()}
            query={gitRepo}
            variables={{
              queryString: ownerList[repoList[key]],
              repoString: key
            }}
          >
            {({ loading, error, data }) => {
              if (error) return <Error message={error.message} />;
              if (loading) return <Loading />;
              return (
                <Box
                  className="repo-card pinned"
                  fill="vertical"
                  direction="column"
                  flex="grow"
                  justify="start"
                  key={data.repository.id}
                >
                  <Button
                    href={data.repository.url}
                    label={data.repository.name}
                    icon={<LinkNext color="#403f4c" />}
                    reverse
                    color="#403f4c"
                    key={data.repository.id}
                    target="blank"
                  />
                  <Box
                    className="repo-desc"
                    background="rgba(195,207,206,0.9)"
                    key={shortid.generate()}
                  >
                    <Text key={shortid.generate()}>{data.repository.description}</Text>
                    <br style={{'margin-bottom': '1em'}} />
                    {
                      data.repository.name === 'civic-app' || data.repository.object === null ?
                        
                        (
                          <Anchor
                            href={data.repository.homepageUrl}
                            label={data.repository.homepageUrl}
                            icon={<LinkNext color="#403f4c" />}
                            reverse
                            color="#403f4c"
                            target="blank"
                            alignSelf='end'
                          />
                        )
                        :
                        (
                          <DropButton
                            label='Read More'
                            open={open}
                            onClose={() => this.setState({ open: undefined })}
                            dropAlign={{ top: 'top', left: 'left' }}
                            dropContent={
                              (
                                <Box className='readme'>
                                  <Button 
                                    label='CLOSE'
                                    onClick={this.onClose} 
                                    icon={<Close color='#e84855' />} 
                                    alignSelf='end' 
                                    reverse 
                                    plain 
                                  />
                                  <Markdown
                                    components={{
                                      blockquote: {
                                        component: Quote
                                      },
                                      pre: {
                                        component: Pre
                                      },
                                      p: {
                                        component: Paragraph,
                                        props: {
                                          textAlign: 'start'
                                        }
                                      },
                                      image :{
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
                                  <br style={{'margin-bottom': '1em'}} />
                                  <Button
                                    href={data.repository.url}
                                    label='Go to Repo'
                                    icon={<LinkNext color="#403f4c" />}
                                    reverse
                                    color="#403f4c"
                                    key={data.repository.id}
                                    target="blank"
                                    alignSelf='end'
                                  />
                                  <br />
                                </Box>
                              )
                            }
                          />
                        )
                    }
                   
                    <br style={{'margin-bottom': '1em'}} />
                    <Text color="#403f4c" weight={800}>
                        |
                    </Text>
                    {data.repository.languages.edges.map(l => (
                      <>
                        <Text className="repo-lang" color="#403f4c" key={l.id}>
                          {l.node.name}
                        </Text>
                        <Text color="#403f4c" weight={800}>
                            |
                        </Text>
                      </>
                    ))}
                  </Box>
                </Box>
              );
            }}
          </Query>
        ))}
      </>
    )} 
}
export default Pinned;
