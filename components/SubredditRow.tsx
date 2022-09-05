import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import Avatar from './Avatar';
import Link from 'next/link';

interface SubredditRowProps {
  index: number;
  topic: string;
}

function SubredditRow({ index, topic }: SubredditRowProps) {
  return (
    <div className="flex items-center space-x-2 border-t-2 bg-white px-4 py-2 last:rounded-b dark:bg-gray-900 dark:border-t-gray-850">
      <p className="dark:text-gray-300 font-medium"></p>
      {index + 1}
      <ChevronUpIcon className="h-4 w-4 flex-shrink-0 text-green-400" />
      <Avatar seed={`/subreddit/${topic}`} />
      <p className="flex-1 truncate dark:text-gray-300 font-medium">r/{topic}</p>
      <Link href={`/subreddit/${topic}`}>
        <span className="cursor-pointer rounded-full bg-blue-500 px-3 text-white dark:bg-gray-300">
          <span className="dark:text-gray-900 font-medium">Vote</span>
        </span>
      </Link>
    </div>
  );
}

export default SubredditRow;
