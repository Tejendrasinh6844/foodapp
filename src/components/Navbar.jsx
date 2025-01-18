import CartIcon from './CartIcon';
import Menu from './Menu'
import  { NavLink  }  from "react-router";

const Navbar = () => {
  const user = false
  return ( 
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-2/4'>

     <div className="hidden md:flex gap-4">
        <NavLink  to="/">HomePage</NavLink>
        <NavLink  to="/menu">Menu</NavLink>
        <NavLink  to="/contact">Contact</NavLink>
     </div>



      <div className='text-xl md:font-bold'>
      <NavLink  to="/">Logo</NavLink>
      </div>
{/* mobile menu  */}
      <div className='md:hidden'>
        <Menu/>
      </div>

      <div className="hidden md:flex gap-4 items-center">
         <div className=' flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
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