import  { useEffect, useState } from 'react'
const data =[
    {
      id:1,
      title:" always fresh & always crispy & always hot",
      image:"../../public/slide1.png",
    },
    {
      id:2,
      title:"we deliver the best quality food",
      image:"../../public/slide2.png",
    },
    {
      id:3,
      title:"the best pizza in town",
      image:"../../public/slide3.jpg",
    },
]



const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length)
    }, 5000)
    return () => clearInterval(interval)
  }
  , [])




  return (
    <div className=" flex flex-col lg:flex-row  h-[cal(100vh-6rem)] md:h-[cal(100vh-9rem)] bg-fuchsia-50">
        {/* Text container */}
        <div className=" flex items-center justify-center flex-col gap-8 text-red-500 font-bold flex-1">
            <h1 className=" md:p-10 text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl">{data[currentSlide].title}</h1>
            <button className=" bg-red-500 text-white py-4 px-8">Order Now</button>
        </div>

        {/* Image container */}
        <div className=" w-full relative flex-1">
            <img src={data[currentSlide].image} alt="" fill  className=" object-cover" />
        </div>
    </div>
  )
}

export default Slider