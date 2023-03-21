import { useState } from 'react'
import './App.css'
import GalleryBar from './components/GalleryBar'
import Discover from './components/Discover'
import BanBar from './components/BanBar'

function App() {
  const [data, setData] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState("")
  const API_KEY = import.meta.env.VITE_API_KEY;
  let query = "https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=true&api_key="+ API_KEY;
  const [count, setCount] = useState(0);
  const [prev, setPrev] = useState([])
  const [banAttributes, setBanAttributes] = useState([]);

  const handleClicks = async () => {
    setIsLoading(true);
    const result = []
    try {
      const response = await fetch(query, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      // console.log('result is: ', JSON.stringify(result, null, 4));
      if (banAttributes.includes(result[0].breeds[0].weight.imperial) || banAttributes.includes(result[0].breeds[0].dog_friendly) || banAttributes.includes(result[0].breeds[0].life_span)) {
        console.log("TRUE")
        setIsLoading(false);
        handleClicks();
        return
      }
      setData(result);
      setPrev( prev => [...prev, result[0]])
      setCount(count + 1)
      
      
    } catch (err) {
      setErr(err.message);
    } finally {
      console.log(data[0])
      
      setIsLoading(false);
    }

  };

  const handleClick = async () => {
    handleClicks();
  }

  const handleBan = (e) => {
    setBanAttributes( banAttributes => [...banAttributes, e.target.value])
  }

  return (
    <div className="App">
      
    <GalleryBar cats={prev}/>
    <Discover cats={data} fetchData={handleClick} ban={handleBan}/>
    <BanBar banList={banAttributes}/>
    </div>
  )
}

export default App
