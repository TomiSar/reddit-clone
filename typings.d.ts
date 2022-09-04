/* eslint-disable no-unused-vars */
type Comments = {
  id: number;
  created_at: string;
  post_id: number;
  text: string;
  username: string;
};

type Vote = {
  id: number;
  created_at: string;
  post_id: number;
  upvote: boolean;
  username: string;
};

type Subreddit = {
  id: number;
  created_at: string;
  topic: string;
};

type Post = {
  id: number;
  created_at: string;
  body: string;
  image: string;
  subreddit_id: number;
  title: string;
  username: string;
  votes: Vote[];
  comments: Comments[];
  subreddit: Subreddit[];
};
