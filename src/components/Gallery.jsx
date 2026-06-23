import { useEffect, useState } from "react"

function Gallery() {
  const photos = [
    "/images/foto1.jpg",
    "/images/foto2.jpg",
    "/images/foto3.jpg",
    "/images/foto4.jpg",
    "/images/foto5.jpg",
  ]

  const [current, setCurrent] = useState(0)

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="galeria"
      className="bg-[#F6F1E8]"
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