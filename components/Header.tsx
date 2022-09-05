import React from 'react';
import Image from 'next/image';
import { HomeIcon, ChevronDownIcon, SearchIcon, MenuIcon } from '@heroicons/react/solid';
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

function Header() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Link href="/">
          <Image
            objectFit="contain"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqM7Fp6ZYu1FicM6HHqjtbdqsfyf6kHuEyig&usqp=CAU"
            layout="fill"
          />
        </Link>
      </div>
      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search box */}
      <form
        className="flex flex-1 items-center space-x-2
      rounded-sm border border-gray-200 bg-gray-100 px-3 py-1"
      >
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>

      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {/* Sign in/Sign out */}
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden ml-4 lg:ml-0 lg:flex md:flex items-center space-x-2 cursor-pointer border rounded-md border-gray-200 p-2"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/000/403/original/signin.png"
              layout="fill"
              alt=""
              title="Sign Out"
            />
          </div>
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden ml-4 lg:ml-0 lg:flex md:flex items-center space-x-2 cursor-pointer border rounded-md border-gray-200 p-2"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/000/403/original/signin.png"
              layout="fill"
              alt=""
              title="Sign In"
            />
          </div>
          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </header>
  );
}

export default Header;
