import {FiMoreHorizontal} from 'react-icons/fi'
import {VscTwitter} from 'react-icons/vsc'


const style = {
    wrapper: `flex-[0.7] px-8 flex flex-col`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center`,
    navContainer:  `flex-1`,
    profileButton:  `flex items-center mb-6 cursor-pointer hover`,
    profileLeft: `flex item-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899a6]`,
}

function Sidebar(){
    return(
        <div className={style.wrapper}>

            <div className={style.twitterIconContainer}>
                <VscTwitter></VscTwitter>
            </div>
        </div>
    )
}

export default Sidebar