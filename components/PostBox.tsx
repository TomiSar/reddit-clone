import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import Avatar from './Avatar';
import { LinkIcon, PhotographIcon } from '@heroicons/react/outline';
import { useForm } from 'react-hook-form';

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  postUrllink: string;
  subReddit: string;
};

function PostBox() {
  const { data: session } = useSession();
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);
  const [linkBoxOpen, setLinkBoxOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (formData) => {
    console.log(formData);
  });

  return (
    <form
      className="sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2"
      onSubmit={onSubmit}
    >
      <div className="flex items-center space-x-3">
        <Avatar />
        <input
          {...register('postTitle', { required: true })}
          className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          disabled={!session}
          type="text"
          placeholder={
            session ? 'Create a new post by entering a title!' : 'Sign in to post content'
          }
        />
        <PhotographIcon
          className={`h-6 cursor-pointer text-gray-300 ${imageBoxOpen && 'text-blue-300'}`}
          onClick={() => setImageBoxOpen(!imageBoxOpen)}
        />
        <LinkIcon
          className={`h-6 cursor-pointer text-gray-300 ${linkBoxOpen && 'text-orange-500'}`}
          onClick={() => setLinkBoxOpen(!linkBoxOpen)}
        />
        {/* <LinkIcon className="h-6 text-gray-300" /> */}
      </div>

      {!!watch('postTitle') && (
        <div className="flex flex-col py-2">
          {/* Body */}
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body:</p>
            <input
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              {...register('postBody')}
              type="text"
              placeholder="Text (optional)"
            />
          </div>

          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subreddit:</p>
            <input
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              {...register('subReddit', { required: true })}
              type="text"
              placeholder="i.e. ReactJS"
            />
          </div>

          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Image URL:</p>
              <input
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                {...register('postImage')}
                type="text"
                placeholder="Image URL (Optional...)"
              />
            </div>
          )}
          {linkBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">URL link:</p>
              <input
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                {...register('postUrllink')}
                type="text"
                placeholder="URL link (Optional...)"
              />
            </div>
          )}

          {!!Object.keys(errors).length && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === 'required' && <p>- A Post Title is required</p>}
              {errors.subReddit?.type === 'required' && <p>- A Subreddit is required</p>}
            </div>
          )}

          {!!watch('postTitle') && (
            <button
              className="max-w-full rounded-3xl bg-blue-400 mt-2 p-2 mx-3 text-white font-medium dark:bg-orange-500 dark:hover:brightness-110"
              type="submit"
            >
              Create Post
            </button>
          )}
        </div>
      )}
    </form>
  );
}

export default PostBox;
