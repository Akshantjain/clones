import { getAuth } from '@firebase/auth'
import { UserCircleIcon } from '@heroicons/react/outline'
import { MainFeed } from '../components/MainFeed'
import { Buttons } from '../elements/Buttons'
import { FeedButtons } from '../elements/FeedButtons'
import { Main } from './templates/Main'

export const Feed = () => {
     const user = getAuth().currentUser;
    return (
        <Main >
            <div id="feed" className="h-screen bg-transparent">
                <div className="grid grid-cols-5 gap-2 mx-2">
                    <div className="relative pb-2 overflow-auto h-screen pt-18">
                        <FeedButtons user={user} />
                        <div className="absolute bottom-0">
                            Privacy!
                        </div>
                    </div>

                    <div id="mainFeed" className="col-span-3 h-screen overflow-auto">
                        <MainFeed user={user} />
                    </div>

                    {/* <div className="pb-2 overflow-scroll">
                    </div> */}
                </div>
            </div>
        </Main>
    )
}