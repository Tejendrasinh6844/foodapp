import CartIcon from './CartIcon';
import Menu from './Menu'
import  { NavLink  }  from "react-router";

const Navbar = () => {
  const user = false
  return ( 
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40 '>
{/* left links */}
     <div className="hidden md:flex gap-4 flex-1">
        <NavLink  to="/">HomePage</NavLink>
        <NavLink  to="/menu">Menu</NavLink>
        <NavLink  to="/contact">Contact</NavLink>
     </div>



      <div className='text-xl md:font-bold flex-1 md:text-center'>
      <NavLink  to="/">Logo</NavLink>
      </div>
{/* mobile menu  */}
      <div className='md:hidden'>
        <Menu/>
      </div>

{/* right links */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
         <div className=' md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <img src="../../public/phone.png" alt="" width={20} height={20} />
          <span>9123456789</span>
         </div>
       {!user ?  <NavLink  to="/login">Login</NavLink> : <NavLink  to="/order">Orders</NavLink> }
       <CartIcon/>
      </div>

    </div>
  )
}

export default Navbar