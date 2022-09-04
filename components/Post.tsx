import React, { useState } from 'react';
import {
  ArrowUpIcon,
  ArrowDownIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from '@heroicons/react/outline';
import Avatar from './Avatar';
import TimeAgo from 'react-timeago';

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  const [vote, setVote] = useState(0);

  function voteUp() {
    setVote(vote + 1);
    console.log('Thumbs Up 👍!!');
  }

  function voteDown() {
    if (vote > 0) {
      setVote(vote - 1);
      console.log('Thumbs Down 👎!!');
    }
  }

  return (
    <div className="flex cursor-pointer rounded-md border border-gray-400 bg-white shadow-sm hover:border hover:border-gray-600">
      {/* Votes */}
      <div className="flex flex-col items-center justify-start space-y-1 rounded-1-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon className="voteButtons hover:text-green-900" onClick={() => voteUp()} />
        <p className="text-black font-bold text-xs">{vote}</p>
        <ArrowDownIcon className="voteButtons hover:text-red-900" onClick={() => voteDown()} />
      </div>

      <div className="p-3 pb-3">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <Avatar seed={post.subreddit[0]?.topic} />
          <p className="text-xs text-gray-400">
            <span className="font-bold text-black hover:text-blue-400 hover:underline">
              r/{post.subreddit[0]?.topic}
            </span>{' '}
            📝Posted by user: {post.username}{' '}
            <TimeAgo className="text-gray-800" date={post.created_at} />
          </p>
        </div>

        {/* Body */}
        <div className="py-4 ">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2 text-sm font-light">{post.body}</p>
        </div>

        {/* Image */}
        <img className="w-full" src={post.image} alt="" />

        {/* Footer */}
        <div className="flex space-x-4 text-gray-400">
          <div className="postButtons">
            <ChatAltIcon className="h-6 w-6" />
            <p className="">{post.comments.length} Comments</p>
          </div>
          <div className="postButtons">
            <GiftIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Award</p>
          </div>
          <div className="postButtons">
            <ShareIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Share</p>
          </div>
          <div className="postButtons">
            <BookmarkIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Save</p>
          </div>
          <div className="postButtons">
            <DotsHorizontalIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;