
const CartIcon = () => {
  return (
    <div href="/cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5 ">
        <img src="../../public/cart.png" alt="" fill />

      </div>
      <span>Cart (3)</span>
    </div>
   
  )
}

export default CartIcon