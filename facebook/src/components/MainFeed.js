import { EmojiHappyIcon, PhotographIcon, UserCircleIcon, VideoCameraIcon, ThumbUpIcon, ChatAlt2Icon, ShareIcon } from "@heroicons/react/solid"
import { EmojiHappyIcon as EmojiHappyIconSolid, PhotographIcon as PhotographIconSolid, UserCircleIcon as UserCircleIconSolid, VideoCameraIcon as VideoCameraIconSolid, ThumbUpIcon as ThumbUpIconSolid, ChatAlt2Icon as ChatAlt2IconSolid, ShareIcon as ShareIconSolid, DotsHorizontalIcon } from "@heroicons/react/outline"

import { Buttons } from "../elements/Buttons"
import { Fragment } from 'react'
import classNames from "classnames"

const Story = () => {
    return (
        <div></div>
    )
}

const Stories = () => {
    return (
        <div></div>
    )
}

const NewPost = ({ user, buttonStyle }) => {
    return (
        <div className="bg-white rounded-lg p-3 z-10 shadow grid grid-rows-2 divide-y divide-gray-200">
            <div className="flex items-center justify-center mb-3">
                <UserCircleIcon className="h-10 w-10" />
                <button className="rounded-full bg-gray-100 w-full mx-2 p-2 pl-3 hover:bg-gray-200 text-gray-500 text-left">What's on your mind, {user.displayName.split(" ")[0]}?</button>
            </div>
            <div className="grid grid-cols-3">
                <Buttons className={buttonStyle}>
                    <VideoCameraIcon className="mr-1 h-6 w-6 text-red-500" />
                    <span className="text-sm">Live Video</span>
                </Buttons>
                <Buttons className={buttonStyle}>
                    <PhotographIcon className="mr-1 h-6 w-6 text-green-400" />
                    <span className="text-sm">Photo/Video</span>
                </Buttons>
                <Buttons className={buttonStyle}>
                    <EmojiHappyIcon className="mr-1 h-6 w-6 text-yellow-400" />
                    <span className="text-sm">Feeling/Activity</span>
                </Buttons>
            </div>
        </div>
    )
}

const NewRoom = () => {
    return (
        <div className="bg-white rounded-lg p-3 z-10 shadow grid">
            <div className="flex items-center justify-center">
                <button className="flex items-center border-2 border-blue-100 rounded-full  mx-2 p-2 px-3 text-gray-500 hover:bg-gray-100 text-left text-sm text-blue-500 font-bold px-1">
                    <VideoCameraIcon className="h-6 w-6 text-purple-500 mr-1" />
                    Create Room
                </button>
            </div>
        </div>
    )
}

const Post = ({buttonStyle, data}) => {
    return (
        <div key={data.id} className="grid bg-white rounded-md shadow">
            <div id="postDetails" className="flex items-center px-4 py-2">
                <UserCircleIcon className="h-10 w-10 mx-2" />
                <div>
                    <p className="text-sm"><b>{data.postBy}</b>{' '}<span className="text-gray-500">{data.reason}</span></p>
                    <p className="text-xs font-semibold text-gray-500">{data.postedOn}{', '}{data.postedTime}</p>
                </div>
                <button className="rounded-full hover:bg-gray-200 ml-auto p-1">
                    <DotsHorizontalIcon className="h-6 w-6 text-gray-500"/>
                </button>
            </div>
            <div id="postContent">
                <div className="px-6 py-1">
                    <p>{data.content.text}</p>
                </div>
                {data.content.type === 'img-single' && 
                    <div>

                    </div>
                }
            </div>
            <div id="actionButtons" className="grid grid-cols-3 border-t border-b border-gray-200 mx-4">
                <Buttons className={classNames(buttonStyle, "mb-1 py-1", {"text-gray-600": data.stats.likes > 0})}>
                    {data.stats.likes > 0 ? <ThumbUpIcon className={classNames("mr-1 h-6 w-6 text-blue-500")} /> : <ThumbUpIconSolid className={classNames("mr-1 h-6 w-6")} />}
                    <span className="text-sm">Like</span>
                </Buttons>
                <Buttons className={classNames(buttonStyle, "mb-1 py-1", {"text-gray-600": data.stats.comments > 0})}>
                    {data.stats.comments > 0 ? <ChatAlt2Icon className={classNames("mr-1 h-6 w-6 text-green-400")} /> : <ChatAlt2IconSolid className={classNames("mr-1 h-6 w-6 ")} />}
                    <span className="text-sm">Comment</span>
                </Buttons>
                <Buttons className={classNames(buttonStyle, "mb-1 py-1", {"text-gray-600": data.stats.shares > 0})}>
                    {data.stats.shares > 0 ? <ShareIcon className={classNames("mr-1 h-6 w-6 text-yellow-400")} /> : <ShareIconSolid className={classNames("mr-1 h-6 w-6 ")} />}
                    <span className="text-sm">Share</span>
                </Buttons>
            </div>
            <div id="postComments"></div>
        </div>
    )
}

const Posts = (props) => {
    const data = {
        id: 10,
        content: {
            type: "img-single",
            url: "",
            text: "Feeling Relaxed!",

        },
        postBy: "Akshant Jain",
        postedOn: "Sept 2, 2021",
        postedTime: '1:00 PM', 
        stats: {
            likes: 1,
            comments: 0,
            shares: 0
        },
        location: "Local",
        status: "public",
        reason: "updated cover photo"
    }
    return (
        <Fragment>
            <Post {...props} data={data} />
            <Post {...props} data={data} />
            <Post {...props} data={data} />
            <Post {...props} data={data} />
            <Post {...props} data={data} />
        </Fragment>
    )
}

export const MainFeed = (props) => {
    const buttonStyle = "justify-center mt-1 hover:bg-gray-100"
    return (
        <div className="container mx-auto max-w-2xl grid gap-y-3 overflow-y-auto pb-2 pt-18 ">
            <Stories />
            <NewPost {...props} buttonStyle={buttonStyle} />
            <NewRoom />
            <Posts buttonStyle={buttonStyle}/>
        </div>
    )
}
