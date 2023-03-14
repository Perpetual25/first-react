import './App.css';
import Navbar from './components/Navbar';
import img from  './components/assets/destination/image-titan.webp'

const App = () => {
  return (
    <div className='main'>
       <Navbar/>
       <section className='section1'>
       <div className='world'>
        <div className='destination'>
          <p className='pick'><span>01</span>PICK YOUR DESTINATION</p>
          <img src={img} alt='pic' />
        </div>
        
        </div>
         <div className='notes'>
        <div className='list2'>
         <ul className='ull'>
            <li>Moon</li>
            <li>Mars</li>
            <li>Europa</li>
            <li>Titan</li>
         </ul>
         <div className='mars'>
          <h1>MARS</h1>
        </div>
        <div>
          <p> Don't forget to pack your hiking boots. You'll need them <br/> you'll need them to tackle 
        olympus Mons, the tallest planetary Mountain in <br/> our Solar system. It's two and a half times the size of <br/> Everest!</p>
        </div>
        </div>
        </div>
        </section>
        </div>
      
  )
}

export default App