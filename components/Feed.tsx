import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ALL_POSTS } from '../graphql/queries';
import Post from '../components/Post';

interface FeedProps {
  topic?: string;
}

function Feed({ topic }: FeedProps) {
  const { data, error } = useQuery(GET_ALL_POSTS);
  const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic;

  return (
    <div className="mt-5 space-y-4">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
