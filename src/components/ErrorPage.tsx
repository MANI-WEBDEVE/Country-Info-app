import { Link, useRouteError } from "react-router-dom"

interface ErrorType {
    statusText: string
    data: string 
    status: number
}

const ErrorPage = (): JSX.Element => {
    const error  = useRouteError() as ErrorType;

    return (
        <div className="flex h-screen items-center justify-center text-white bg-black">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-2">{error.status}</h1>
                <h2 className="text-3xl font-light">Oops, something went wrong!</h2>
                <p className="text-xl mt-3">{error.data}</p>
                <p className="text-xl mt-3">{error.statusText}</p>
                <Link to="/">
                    <Button />
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage


const Button = () => {
    return (

        <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 mt-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group ">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">GoBack</span>
            <span className="relative invisible">Goback</span>
        </button>

    )
}
