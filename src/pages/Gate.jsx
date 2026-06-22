import { useState } from "react"
import { Icon } from "@iconify/react"

function Gate({
  onEnter,
  startMusic
}) {

  const [loading, setLoading] = useState(false)

  const [fadeOut, setFadeOut] = useState(false)

  const handleEnter = async () => {

    setLoading(true)

    try {

      await startMusic()

      setFadeOut(true)

      setTimeout(() => {

        onEnter()

      }, 600)

    } catch (err) {

      console.log("Error audio", err)

      setLoading(false)

    }

  }

  return (

    <div
      className={`
        fixed
        inset-0
        flex
        flex-col
        items-center
        justify-center
        bg-white
        text-[#1e2f5d]
        text-center
        px-6
        transition-opacity
        duration-700
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >

      {/* TITULO */}

      <h1
        className="
          text-[35px]
          md:text-[58px]
          font-semibold
          tracking-[0.15em]
          uppercase
          mb-4
        "
        style={{
          fontFamily: "Montserrat, sans-serif"
        }}
      >
        Mis XV Juana
      </h1>

      {/* FRASE */}

      <p
        className="
          text-[12px]
          md:text-[16px]
          leading-[2]
          tracking-[0.2em]
          uppercase
          max-w-[800px]
          mb-12
        "
        style={{
          fontFamily: "Montserrat, sans-serif"
        }}
      >
        La vida es un viaje, no un destino.
        <br />
        Ingresa a mi aventura.
      </p>

      {/* BOTON */}

      <button
        onClick={handleEnter}
        className="
          px-10
          py-4
          bg-[#1e2f5d]
          text-white
          uppercase
          tracking-[0.15em]
          font-semibold
          flex
          items-center
          gap-3
          transition
          hover:opacity-90
        "
        style={{
          fontFamily: "Montserrat, sans-serif"
        }}
      >

        <Icon
          icon="mdi:airplane-takeoff"
          width="22"
        />

        {loading ? "Ingresando..." : "Ingresar"}

      </button>

    </div>

  )

}

export default Gate