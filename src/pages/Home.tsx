import {MoveRight} from "lucide-react"
import { NavLink } from "react-router-dom"
const Home = () => {
  return (
    <main className="bg-black w-full h-screen ">
      <div className="flex items-center justify-center gap-3  p-6 max-[430px]:flex-col     ">
        <div className="mt-6">
            <h1 className="text-5xl font-bold tracking-tighter text-white mt-6">
                Welcome to Info World
            </h1>
            <p className="text-md text-white mt-6 max-w-md tracking-wide">
                This is a web application where you can find some information about the world.
                Like the capital of each country, the languages spoken, the area, border countries, 
                and much more. You can also contact me if you want to know more about a specific country.
            </p>
            <NavLink to={"/"}>
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full px-6 py-2 text-white font-bold flex items-center gap-2 hover:shadow-lg transition duration-300 ease-in-out mt-6">
                    Explore
                    <MoveRight className="w-6 h-6" />
                </button>
            </NavLink>
        </div>
        <div className="mt-6 flex items-center justify-center">
            <img src="./img.png" width={"530px"} alt="" style={{ backgroundColor: 'transparent' }} />
        </div>
      </div>
    </main>
  )
}

export default Home
 