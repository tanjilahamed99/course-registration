import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Cards from './component/cards/cards'
import Cart from './component/cart/Cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function App() {

  const hours = () => {
    toast.error('You dont have enough credit hour');
  };

  const multipleAdded = () => {
    toast.error('Already added this course');
  };

  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  const [credits, setCredit] = useState(0)
  const [remaining, setRemaining] = useState(20)


  const handleCart = (card, price, credit, id) => {
    let hourCheck = credits + credit;
    const reWrite = carts.find((item) => item.id === id)
    if (reWrite) {
      multipleAdded();
    } else {
      if (remaining < 0 || hourCheck > 20) {
        hours()
      } else {
        setCarts([...carts, card])
        setTotal(total + price);
        const newRemaining = remaining - credit;
        setRemaining(newRemaining)
        setCredit(credits + credit)
      }
    }
  }


  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='flex flex-col-reverse md:flex-row gap-2'>
        <Cards handleCart={handleCart}></Cards>
        <ToastContainer />
        <Cart carts={carts} total={total} credits={credits} remaining={remaining}></Cart>
      </div>
    </div>
  )
}

export default App
