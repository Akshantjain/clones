import React from 'react';
import { FaFacebook, FaSearch } from "react-icons/fa";
import { UserGroupIcon as UserGroupIconSolid, ShoppingBagIcon as ShoppingBagIconSolid, PlayIcon as PlayIconSolid,  HomeIcon as HomeIconSolid, ViewGridIcon, ChatIcon, BellIcon, ChevronDownIcon} from '@heroicons/react/solid'
import { UserGroupIcon, ShoppingBagIcon, PlayIcon,  HomeIcon, UserCircleIcon } from '@heroicons/react/outline'
import { getCurrentUser } from '../hooks/auth/currentUser';
import { useLocation, useHistory } from 'react-router-dom';

function Header() {
  const location = useLocation().pathname;
  const history = useHistory()
  const user = getCurrentUser();

  return (
        <header id="header" className="fixed w-full top-0 flex gap-2 bg-white shadow-md z-50 m-0 px-3 items-center">
          <div className="inline-flex space-x-3 py-2">
            <button><FaFacebook className="text-fb text-5xl z-10 "/></button>
            <div className=" flex inline-flex items-center rounded-3xl bg-gray-200 ">
              <FaSearch className="my-1 ml-3 text-xl group-focus:hidden text-gray-400" />
              <input placeholder="Search Facebook" className="bg-transparent ml-3 py-1 focus:outline-none font-medium"></input>
            </div>
          </div>

          <div className="inline-grid grid-cols-4 gap-x-4 mx-auto">
            <button onClick={() => {history.push('/')}} className="h-full items-center flex hover:bg-gray-100 rounded-full px-4">
              {location === '/' ? 
                <HomeIconSolid className="mx-2 my-2 h-7 w-7 text-fb"/> : 
                <HomeIcon className="mx-2 my-2 h-7 w-7 text-group-400"/>
              }
            </button>
            <button onClick={() => {history.push('/watch')}} className="h-full items-center flex hover:bg-gray-100 rounded-full px-4">
              {location === '/watch' ? 
                <PlayIconSolid className="mx-2 my-2 h-7 w-7 text-fb"/> : 
                <PlayIcon className="mx-2 my-2 h-7 w-7 text-group-400"/>
              }
            </button>
            <button onClick={() => {history.push('/marketplace')}} className="h-full items-center flex hover:bg-gray-100 rounded-full px-4">
              {location === '/marketplace' ? 
                <ShoppingBagIconSolid className="mx-2 my-2 h-7 w-7 text-fb"/> : 
                <ShoppingBagIcon className="mx-2 my-2 h-7 w-7 text-group-400"/>
              }
            </button>
            <button onClick={() => {history.push('/groups')}} className="h-full items-center flex hover:bg-gray-100 rounded-full px-4">
              {location === '/groups' ? 
                <UserGroupIconSolid className="mx-2 my-2 h-7 w-7 text-fb"/> : 
                <UserGroupIcon className="mx-2 my-2 h-7 w-7 text-group-400"/>
              }
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="h-full items-center flex hover:bg-gray-100 rounded-full px-2">
              <UserCircleIcon className="mr-2 my-2 h-7 w-7" />
              <span className="font-bold">{user.displayName.split(" ")[0]}</span>
            </button>
            <button className="h-full items-center flex bg-gray-200 rounded-full hover:bg-gray-300">
              <ViewGridIcon className="m-2 h-7 w-7" />
            </button>
            <button className="h-full items-center flex bg-gray-200 rounded-full hover:bg-gray-300">
              <ChatIcon className="m-2 h-7 w-7" />
            </button>
            <button className="h-full items-center flex bg-gray-200 rounded-full hover:bg-gray-300">
              <BellIcon className="m-2 h-7 w-7" />
            </button>
            <button className="h-full items-center flex bg-gray-200 rounded-full hover:bg-gray-300">
              <ChevronDownIcon className="m-2 h-7 w-7" />
            </button>
          </div>

        </header>
    )
}

export default Header
