import './App.css'
import NavbarComponent from "./assets/cmponent/NavbarComponent"
import Header from "./assets/cmponent/Header"
import Services from "./assets/cmponent/Services"
// import Footer from "./assets/cmponent/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function App() {
  // const [count, setCount] = useState(0)
  
 const [index , setIndex] = useState (0);
 const [name , setName] = useState ('kinda');

 useEffect( () =>{
  console.log('index changed')

  setName(name + index)
 } , [index]);


  return (
    <>

    <NavbarComponent />
    <Header />
    <Services />

    <div className='text-center my-5'>
    <Button 
      onClick = {() =>{
  
        setIndex(index + 1) ;
      } }

    variant="primary">Increment by 1
    </Button>
    <Button className='ms-3 my-5'
      onClick = {() =>{
  
        setIndex(index + -1) ;
      } }

    variant="primary">Decrement by 1
    </Button>


    <Button className='ms-3'
        onClick = {() => {
          setName('kinda Ghanem') ;
        } }
       variant="primary">change name to kinda Ghanem
    </Button>
    <Button onClick={() =>{
        setName('kinda')
      }}
        variant="primary">change name to kinda
    </Button>

    <div>{index}</div>
    {/* <Button className='ms-3 my-5'
      onClick = {() =>{
  
        setIndex(index + -1) ;
      } }

    variant="primary">Changenama to kinda
    </Button> */}
    <div>{name}</div>

    </div>

    {/* <Footer /> */}

    </>
  )
}

export default App
