import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ButtonComponent from './components/ButtonComponent'
import Login from './components/Login'
import MovieList from './components/MovieList'
import MemeList from './components/MemeList'

function App() {

  const [number, setNumber] = useState(0);

  const [myValue, setValue] = useState("");

  const [greetings, setGreetings] = useState("Bienvenidos a mi web!");

  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact Us"
  }

  const condition = true;

  const [user, setUser] = useState({})

   // useEffect(() =>{
  //   console.log("Ejecución cada vez que se renderiza el componente raíz")
  // })

  useEffect(() =>{
    console.log("Ejecuión con cada cambio de la variable reactiva user.")
  }, [user])

  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo);
  }

  const [showMovies, setShowMovies] = useState(true);

  let myPlaceHolder = "Escribe aquí";

  const addOne = () =>{
    //number++;
    setNumber(number + 1);
    console.log(number);
  }

  const sayHello = () =>{
    console.log("Hello");
  }

  const handleChange = (e) =>{
    console.log(e.target.value);
  }

  return (
    <>
    <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

    <main className="main-content">
      <MemeList></MemeList>
    </main>

    
    </>
  )
}

export default App
