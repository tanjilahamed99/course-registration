import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Cards from './component/cards/cards'
import Cart from './component/cart/Cart'

function App() {

  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  const [credits, setCredit] = useState(0)
  const [remaining, setRemaining] = useState(20)


  const handleCart = (card, price, credit) => {
    setCarts([...carts, card])
    setTotal(total + price);
    setCredit(credits + credit)
    const newRemaining = remaining - credit;
    setRemaining(newRemaining)
  }


  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='flex flex-col-reverse md:flex-row gap-2'>
        <Cards handleCart={handleCart}></Cards>
        <Cart carts={carts} total={total} credits={credits} remaining={remaining}></Cart>
      </div>
    </div>
  )
}

export default App
