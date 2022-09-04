import { gql } from '@apollo/client';

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query SubredditByTopicQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query GetAllPostsQuery {
    getPostList {
      id
      created_at
      body
      image
      subreddit_id
      title
      username
      comments {
        id
        created_at
        post_id
        text
        username
      }
      subreddit {
        id
        created_at
        topic
      }
      votes {
        id
        created_at
        post_id
        upvote
        username
      }
    }
  }
`;
