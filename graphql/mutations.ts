import { gql } from '@apollo/client';

export const ADD_POST = gql`
  mutation PostMutation(
    $title: String!
    $body: String!
    $image: String!
    $username: String!
    $subreddit_id: ID!
  ) {
    insertPost(
      title: $title
      body: $body
      image: $image
      username: $username
      subreddit_id: $subreddit_id
    ) {
      id
      subreddit_id
      created_at
      title
      body
      image
      username
    }
  }
`;

export const ADD_SUBREDDIT = gql`
  mutation PostSubredditMutation($topic: String!) {
    insertSubreddit(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;
