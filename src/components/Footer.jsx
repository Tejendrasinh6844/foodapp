import  { NavLink  }  from "react-router";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20  xl:p-40 text-red-500 flex items-center justify-between">
      <NavLink to="/" className=" font-bold text-xl">
        Footer Logo
      </NavLink>
      <p>&copy; ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer