import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { useRef, useState } from "react"

import Gate from "./pages/Gate"
import Home from "./pages/Home"

import musica from "./assets/musica.mp3"

// Wrapper para poder usar navigate dentro del Gate
function GateWrapper({ startMusic }) {

  const navigate = useNavigate()

  const handleEnter = () => {

    navigate("/home")

  }

  return (
    <Gate
      onEnter={handleEnter}
      startMusic={startMusic}
    />
  )

}

function App() {

  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)

  const startMusic = async () => {

    const audio = audioRef.current

    if (!audio) return

    try {

      audio.loop = true
      audio.volume = 0.5

      await audio.play()

      setIsPlaying(true)

    } catch (err) {

      console.log("Error audio", err)

    }

  }

  return (

    <BrowserRouter>

      {/* AUDIO GLOBAL */}
      <audio
        ref={audioRef}
        preload="auto"
      >
        <source
          src={musica}
          type="audio/mpeg"
        />
      </audio>

      <Routes>

        {/* GATE */}
        <Route
          path="/"
          element={
            <GateWrapper
              startMusic={startMusic}
            />
          }
        />

        {/* HOME */}
        <Route
          path="/home"
          element={
            <Home
              audioRef={audioRef}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          }
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App