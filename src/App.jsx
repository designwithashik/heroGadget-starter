import { Outlet, useLoaderData } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { createContext, useState } from 'react'
import MyModal from './components/Modal';



export const ProductContext = createContext([]);
export const CartContext = createContext([]);


const App = () => {
  let [isOpen, setIsOpen] = useState(false)

  const { products, cart } = useLoaderData()
  const [cartArray, setCart] = useState(cart);
  const cartAlert = sessionStorage.getItem('alert')
  if (cart.length && cartAlert !== 'true') {
    sessionStorage.setItem('alert', 'true')
    setIsOpen(true)

  }
  return (
    
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cartArray, setCart]}>
      <Header />
      <div className=''>
      <Outlet />
      </div>
        <Footer />
        <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </CartContext.Provider>
      </ProductContext.Provider>
    
  )

}

export default App
