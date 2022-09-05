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
      created_at
      subreddit_id
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

export const ADD_COMMENT = gql`
  mutation AddCommentMutation($post_id: ID!, $username: String!, $text: String!) {
    insertComment(post_id: $post_id, text: $text, username: $username) {
      id
      created_at
      post_id
      text
      username
    }
  }
`;
