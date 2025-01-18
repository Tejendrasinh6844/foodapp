
import  { useState } from 'react'
import { NavLink } from 'react-router'
import CartIcon from './CartIcon'

const links = [
  {id:1, title:"Homepage", url:"/"},  
  {id:2, title:"Menu", url:"/menu"},  
  {id:3, title:"Working Hours", url:"/"},  
  {id:4, title:"Contact", url:"/"},  
]



const Menu = () => {
  const [open, setOpen] = useState(false)
  const changeOpen=()=>{
    setOpen(!open)
  }
  const closeMenu=()=>{
    setOpen(false)
  }
const user = false


  return (
    <div>
       {!open ? (<img src="../../public/open.png" alt="" width={20} height={20} onClick={changeOpen} />) : (
        <img src="../../public/close.png" alt="" width={20} height={20}  onClick={changeOpen}  />
       )
       } 
    {open &&  <div className=" bg-red-500 text-white absolute left-0 top-24 h-[100vh - 6rem] flex  flex-col items-center justify-center text-3xl gap-8 w-full z-10">
{
links.map((link)=>(

    <NavLink key={link.id} to={link.url} onClick={closeMenu} >{link.title}</NavLink>

))
}
{!user ? <NavLink to={"/login"} onClick={closeMenu} >Login</NavLink> : <NavLink to={"/order"} onClick={closeMenu} >Orders</NavLink>} 

      <NavLink to="/cart" onClick={closeMenu}>
       <CartIcon/>
      </NavLink>
      </div>
}
      

    </div>
  )
}

export default Menu