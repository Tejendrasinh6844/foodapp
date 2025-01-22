import  { useState } from 'react'
const data =[
    {
      id:1,
      title:" always fresh & always crispy & always hot",
      image:"./images/slide1.png",
    },
    {
      id:2,
      title:"we deliver the best quality food",
      image:"./images/slide2.png",
    },
    {
      id:3,
      title:"the best pizza in town",
      image:"./images/slide3.png",
    },
]



const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <div className=" flex flex-col  h-[cal(100vh-6rem)] md:h-[cal(100vh-9rem)]">
        {/* Text container */}
        <div className="  h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
            <h1 className=" text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl">{data[currentSlide].title}</h1>
            <button className=" bg-red-500 text-white py-4 px-8">Order Now</button>
        </div>

        {/* Image container */}
        <div className=" w-full h-1/2 relative">
            <img src={data[currentSlide].image} alt="" fill  className=" object-cover" />
        </div>
    </div>
  )
}

export default Slider