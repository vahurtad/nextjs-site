import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loading from "./Loading";
import Error from "./Error";
import "../static/scss/style.scss";
import {
  Anchor,
  Heading,
  ResponsiveContext,
  Grommet,
  Box,
  Button,
  Grid,
  Text
} from "grommet";
import { LinkNext, Github } from "grommet-icons";

const gitRepo = gql`
  query allPosts($queryString: String!) {
    user(login: $queryString) {
      login
      url
      repositories(
        first: 50
        isFork: false
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          id
          isArchived
          isPrivate
          name
          url
          description
          languages(last: 5) {
            nodes {
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
    }
  }
`;

const gitRepoVars = {
  queryString: "vahurtad"
};

function Repo(props) {
  return (
    <Query query={gitRepo} variables={gitRepoVars}>
      {({ loading, error, data }) => {
        if (error) return <Error message={error.message} />;
        if (loading) return <Loading />;
        return (
          <>
            <Heading
              level={1}
              style={{
                "text-align": "center",
                "max-width": "100%"
              }}
            >
              <Anchor
                href={data.user.url}
                color="#403f4c"
                icon={<Github size="large" />}
                primary
                label={data.user.login}
              />
            </Heading>

            <ResponsiveContext.Consumer>
              {size => (
                <Grid
                  className="grid-layout repo"
                  align="end"
                  alignContent="start"
                  columns={["1/2", "1/2"]}
                >
                  {data.user.repositories.nodes.map(repo =>
                    !repo.isPrivate && !repo.isArchived ? (
                      <Box
                        className="repo-card"
                        fill="vertical"
                        direction="column"
                        flex="grow"
                        justify="start"
                        key={repo.id}
                      >
                        <Button
                          href={repo.url}
                          label={repo.name}
                          icon={<LinkNext color="#403f4c" />}
                          reverse={true}
                          color="#403f4c"
                          target="blank"
                        />
                        <Box
                          className="repo-desc"
                          background="rgba(195,207,206,0.9)"
                        >
                          <Text>{repo.description}</Text>
                          <br />
                          <Text color="#403f4c" weight={800}>
                            |{" "}
                          </Text>
                          {repo.languages.nodes.map(l => (
                            <>
                              <Text className="repo-lang" color="#403f4c">
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
                    ) : (
                      ""
                    )
                  )}
                </Grid>
              )}
            </ResponsiveContext.Consumer>
          </>
        );
      }}
    </Query>
  );
}

export default Repo;
