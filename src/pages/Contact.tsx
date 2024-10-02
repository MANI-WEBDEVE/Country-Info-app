
const Contact = () => {
  return (
    <section className="bg-black w-full h-screen text-white">
      <h1 className="text-4xl font-bold text-center text-white  pt-8" >Contact Us</h1>
      <div className="flex items-center justify-center flex-col gap-6 mt-6">
        <input type="text" className="bg-transparent border-2 border-white rounded-md p-2 w-80" placeholder="Name" style={{transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateY(45deg)', background: 'transparent'}}/>
        <input type="text" className="bg-transparent border-2 border-white rounded-md p-2 w-80" placeholder="Email" style={{transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateY(45deg)', background: 'transparent'}}/>
        <textarea name="" id="" className="bg-transparent border-2 border-white rounded-md p-2 w-80" placeholder="Message" rows={6} style={{transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateY(45deg)', background: 'transparent'}}></textarea>
        <button className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-md hover:shadow hover:shadow-purple-500 transition-all duration-300 ease-in-out hover:translate-z-10">Send</button>
      </div>
    </section>
  )
}

export default Contact