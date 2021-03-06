import Sidebar from '../components/Sidebar'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b]`,
  content: `max-w-[1400px] w-2/3 flex justify-between text-white`,
}

export default function Home(){
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
          <Sidebar></Sidebar>
          <h2>Feed</h2>
          <h2>Widget</h2>
      </div>
    </div>
 
  )
}
