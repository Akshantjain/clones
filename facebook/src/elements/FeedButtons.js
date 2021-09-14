import { BookmarkIcon, ClockIcon, FlagIcon, NewspaperIcon, ShoppingCartIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid"
import classNames from "classnames"
import { Fragment } from "react"
import { Buttons } from "./Buttons"

export const FeedButtons = ({user}) => {
    const style = "h-7 w-7 mr-3"
    const className = "p-3 hover:bg-gray-300"
    return (
        <div className="w-full border-b-2 border-gray-300">
            <Buttons className={classNames(className, "")}>
                <UserCircleIcon className={classNames(style, "text-green-600")}/>
                <span>{user.displayName}</span>
            </Buttons>
            <Buttons className={classNames(className, "")}>
                <UsersIcon className={classNames(style, "text-blue-600")} />
                <span>Friends</span>
            </Buttons>
            <Buttons className={classNames(className, "")}>
                <FlagIcon className={classNames(style, "text-red-600")} />
                <span>Pages</span>
            </Buttons>
            <Buttons className={classNames(className, "")}>
                <ShoppingCartIcon className={classNames(style, "text-blue-600")} />
                <span>Marketplace</span>
            </Buttons>
            <Buttons className={classNames(className, "")}>
                <ClockIcon className={classNames(style, "text-yellow-600")} />
                <span>Memories</span>
            </Buttons>
            <Buttons className={classNames(className, "")}>
                <BookmarkIcon className={classNames(style, "text-purple-600")} />
                <span>Saved</span>
            </Buttons>
            <Buttons className={classNames(className, "")}>
                <NewspaperIcon className={classNames(style, "text-blue-600")} />
                <span>News</span>
            </Buttons>
        </div>
    )
}