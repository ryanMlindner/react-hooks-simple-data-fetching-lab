import React, {useState, useEffect} from "react";

const APIURL = "https://dog.ceo/api/breeds/image/random"

export default function App() {

  const [dogImage, setDogImage] = useState(false);

  useEffect(() => {
    fetch(APIURL)
    .then(r => r.json())
    .then(data => setDogImage(data.message))
  }, [])

  if (!dogImage) return <p>Loading...</p>
  return (
    <img src={dogImage} alt="A Random Dog"/>
  )
}