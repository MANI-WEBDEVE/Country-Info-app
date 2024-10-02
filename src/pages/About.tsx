import country from "../api/country.json";

const About = () => {
    return (
        <section className="w-full  bg-black h-full  ">
            <h1 className="text-center p-6 font-semibold p-xl text-white">
                This project is a web application that will show you some <br />{" "}
                information about countries.
            </h1>
            <div className="flex flex-wrap justify-start ml-[20px] mr-[20px] md:ml-[84px] md:mr-[84px] items-center">
                {country.map((item, index) => (
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={item.id}>
                        <div className="bg-black rounded-lg shadow-2xl p-4 border-2 border-white hover:shadow-md transition duration-300 ease-in-out">
                            <div className="flex items-center justify-between">
                                <h2 className="font-semibold text-xl text-white">{item.name}</h2>
                            </div>
                            <hr className="my-4 border-t-2 border-gray-300" />
                            <div className="flex items-center justify-between">
                                <h3 className="text-white">
                                    Capital: <span className="text-white font-medium">{item.capital}</span>
                                </h3>
                                <h3 className="text-white">
                                    Population: <span className="text-white text-sm">{item.population}</span>
                                </h3>
                            </div>
                            <hr className="my-4 border-t-2 border-gray-300" />
                            <p className="text-white">
                                Fact: <span className="text-white font-medium">{item.fact}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default About;
