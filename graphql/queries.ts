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

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query GetAllPostsByTopicQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
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

export const GET_POST_BY_POST_ID = gql`
  query GetPostByPostIdQuery($post_id: ID!) {
    getPostListByPostId(post_id: $post_id) {
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

export const GET_ALL_VOTES_BY_POST_ID = gql`
  query GetVotesByPostIdQuery($post_id: ID!) {
    getVotesByPostId(post_id: $post_id) {
      id
      created_at
      post_id
      upvote
      username
    }
  }
`;

export const GET_SUBREDDITS_WITH_LIMIT = gql`
  query GetSubredditsByLimitQuery($limit: Int!) {
    getSubredditListLimit(limit: $limit) {
      id
      created_at
      topic
    }
  }
`;
