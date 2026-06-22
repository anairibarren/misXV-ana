import { Icon } from "@iconify/react"
import videoHero from "../assets/hero-video.mp4"
import fotoInicio from "../assets/foto-inicio.JPG"

function Hero() {

  // SCROLL COUNTDOWN

  const scrollToCountdown = () => {

    const section = document.getElementById("countdown")

    if (!section) return

    const yOffset = -120

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset

    window.scrollTo({
      top: y,
      behavior: "smooth"
    })

  }

  return (

    <section
      id="hero"
      aria-labelledby="hero-title"
      className="
        relative
        overflow-hidden
        bg-white
        pb-10
      "
    >

      {/* VIDEO DE FONDO */}

      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      >

        <source src={videoHero} type="video/mp4" />

      </video>

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-white/70
        "
      />

      {/* CONTENIDO */}

      <div className="relative z-10">

        {/* BLOQUE TEXTO */}

        <div
          className="
            max-w-4xl
            mx-auto
            px-6
            md:px-10
            pt-32
            md:pt-36
          "
        >

          {/* TITULO */}

          <h1
            id="hero-title"
            className="
              font-extrabold
              text-[40px]
              leading-[1.08]
              text-[#1e2f5d]
              mb-6
              max-w-[700px]
              md:text-[64px]
            "
          >
            Un viaje muy especial comienza
          </h1>

          {/* PARRAFO */}

          <p
            className="
              text-[14px]
              leading-[1.8]
              font-medium
              text-[#6b7280]
              max-w-[520px]
              mb-8
            "
          >
            Te invito a celebrar una noche única.
            Será un momento lleno de magia,
            sueños y recuerdos inolvidables.
          </p>

          {/* BOTON */}

          <button
            onClick={scrollToCountdown}
            aria-label="Ir a la cuenta regresiva"
            className="
              inline-flex
              items-center
              justify-center
              gap-[8px]
              px-8
              py-3
              rounded-full
              bg-[#1e2f5d]
              text-white
              font-semibold
              text-[16px]
              w-full
              max-w-[300px]
            "
          >

            Despeguemos

            <Icon
              icon="mdi:airplane-takeoff"
              width="20"
            />

          </button>

        </div>

        {/* IMAGEN FULL WIDTH */}

        <div className="mt-20">

          <img
            src={fotoInicio}
            alt=""
            className="
              w-full
              h-auto
              object-cover
            "
          />

        </div>

      </div>

    </section>

  )

}

export default Hero