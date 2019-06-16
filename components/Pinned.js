import React from "react";
import Link from "next/link";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loading from "./Loading";
import Error from "./Error";
import "../static/scss/style.scss";
import { Box, Button, Grid, Text } from "grommet";
import { LinkNext, Github } from "grommet-icons";

const gitRepo = gql`
  query allPosts($queryString: String!, $repoString: String!) {
    repository(owner: $queryString, name: $repoString) {
      name
      url
      id
      description
      languages(last: 5) {
        nodes {
          id
          name
          color
        }
      }
      defaultBranchRef {
        name
        target {
          ... on Commit {
            history {
              totalCount
              nodes {
                additions
                deletions
              }
            }
          }
        }
      }
    }
  }
`;

const ownerList = ["vahurtad", "civic-app"];
const repoList = {
  "civic-app": 1,
  "nextjs-site": 0,
  traderfeed: 0,
  "gdax-tt": 0
};
function Pinned(props) {
  return (
    <>
      <Link prefetch href="/repo-list">
        <a> See More Projects.</a>
      </Link>
      {Object.keys(repoList).map(function(key, id) {
        return (
          <Query
            key={id}
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
                    reverse={true}
                    color="#403f4c"
                    key={data.repository.id}
                    target="blank"
                  />
                  <Box
                    className="repo-desc"
                    background="rgba(195,207,206,0.9)"
                    key={id}
                  >
                    <Text key={id}>{data.repository.description}</Text>
                    <br />
                    <Text color="#403f4c" weight={800}>
                      |{" "}
                    </Text>
                    {data.repository.languages.nodes.map(l => (
                      <>
                        <Text className="repo-lang" color="#403f4c" key={l.id}>
                          {l.name}{" "}
                        </Text>
                        <Text color="#403f4c" weight={800}>
                          {" "}
                          |{" "}
                        </Text>
                      </>
                    ))}
                  </Box>
                </Box>
              );
            }}
          </Query>
        );
      })}
    </>
  );
}

export default Pinned;
