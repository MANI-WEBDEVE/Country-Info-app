import { NavLink } from "react-router-dom"

const Header = () => {
    const menuBar = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Country",
            path: "/country",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ]


    return (
        <header className=" bg-[#1F1F1F] h-[5.4rem]">
            <div className="container mx-auto  p-6 ">
                <div className="flex items-center justify-around">
                    <div className="logo text-3xl font-bold tracking-tighter bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        <NavLink to="/">
                            <h1 className="uppercase">Info_World</h1>
                        </NavLink>
                    </div>
                    <ul className="flex  items-center justify-center gap-8 font-semibold  text-md text-white">
                        {
                            menuBar.map((item, index) => (
                                <li key={index}>
                                    <NavLink to={item.path}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
