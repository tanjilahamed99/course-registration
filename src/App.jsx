import './App.css'
import Header from './component/Header/Header'
import Cards from './component/cards/cards'
import Cart from './component/cart/Cart'

function App() {

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='flex'>
        <Cards></Cards>
        <Cart></Cart>
      </div>
    </div>
  )
}

export default App
