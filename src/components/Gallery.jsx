import { useEffect, useState } from "react"

import foto1 from "../assets/foto1.jpg"
import foto2 from "../assets/foto2.jpg"
import foto3 from "../assets/foto3.jpg"
import foto4 from "../assets/foto4.jpg"
import foto5 from "../assets/foto5.jpg"

function Gallery() {

  const photos = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5
  ]

  const [current, setCurrent] = useState(0)

  // AUTO SLIDE

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 1) % photos.length)

    }, 1500)

    return () => clearInterval(interval)

  }, [photos.length])

  return (

    <section
      id="galeria"
      className=""
    >

      {/* FOTO */}

      <div className="w-full overflow-hidden">

        <img
          src={photos[current]}
          alt={`Foto del book ${current + 1}`}
          className="
            w-full
            h-auto
            object-cover
            transition-all
            duration-2000
          "
        />

      </div>

    </section>

  )

}

export default Gallery