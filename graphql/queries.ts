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

// export const GET_SUBREDDIT_BY_TOPIC = gql`
//   query SubredditByTopicQuery {
//     getSubredditListByTopic(topic: $topic) {
//       id
//       topic
//       created_at
//     }
//   }
// `;
