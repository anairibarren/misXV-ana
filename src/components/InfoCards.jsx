import { useEffect, useRef, useState } from "react"

import calendar from "../assets/calendar.WEBP"
import pin from "../assets/pin.gif"
import diamond from "../assets/diamond.WEBP"

function InfoBlock({
  background,
  textColor,
  image,
  title,
  children,
  showDivider = false,
  button = false,
  link
}) {

  return (

    <div
      className={`
        w-full
        rounded-none
        px-8
        mt-8
        py-12
        flex
        flex-col
        items-center
        justify-center
        text-center
        transition
      `}
      style={{
        backgroundColor: background,
        color: textColor,
        fontFamily: "Montserrat, sans-serif"
      }}
    >

      {/* ICONO */}

      <img
        src={image}
        alt={title}
        className="
          w-[90px]
          h-[90px]
          md:w-[110px]
          md:h-[110px]
          object-contain
          mb-6
        "
      />

      {/* TITULO */}

      <h3
        className="
          text-[20px]
          md:text-[22px]
          font-semibold
          tracking-[0.2em]
          mb-4
        "
      >
        {title}
      </h3>

      {/* LINEA DIVISORA */}

      {showDivider && (
        <div
          className="
            w-[80px]
            h-[2px]
            my-4
          "
          style={{
            backgroundColor: textColor
          }}
        />
      )}

      {/* CONTENIDO */}

      <div
        className="
          text-[16px]
          md:text-[18px]
          leading-[1.7]
          space-y-2
        "
      >
        {children}
      </div>

      {/* BOTON */}

      {button && (

        <div className="w-full flex flex-col items-center">

          {/* LINEA */}

          <div
            className="
              w-[100px]
              h-[4px]
              bg-[#a0b8e1]
              mt-[14px]
              mb-[20px]
              mx-auto
              rounded-full
            "
          />

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-8
              py-3
              font-semibold
              text-sm
              tracking-[0.12em]
              uppercase
              transition
              rounded-full
            "
            style={{
              backgroundColor:
                background === "#ffffff"
                  ? "#1e2f5d"
                  : "#ffffff",

              color:
                background === "#ffffff"
                  ? "#ffffff"
                  : "#1e2f5d"
            }}
          >
            COMO LLEGAR
          </a>

        </div>

      )}

    </div>

  )

}

function InfoCards() {

  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef(null)

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setIsVisible(true)
          observer.disconnect()

        }

      },

      {
        threshold: 0.2
      }

    )

    if (sectionRef.current) {

      observer.observe(sectionRef.current)

    }

    return () => observer.disconnect()

  }, [])

  return (

    <section
      id="info"
      ref={sectionRef}
      className="py-0"
    >

      <div
        className={`
          w-full
          grid
          grid-cols-1
          md:grid-cols-3
          ${isVisible ? "animate-slide-left" : "opacity-0"}
        `}
      >

        <h2 className="sr-only">
          Información del evento
        </h2>

        {/* BLOQUE 1 — CUANDO */}

        <InfoBlock
          background="#1e2f5d"
          textColor="#ffffff"
          image={calendar}
          title="¿CUÁNDO?"
        >

          <p>
            10 DE OCTUBRE DE 2026
          </p>

          <p>
            | 21:00hs |
          </p>

        </InfoBlock>

        {/* BLOQUE 2 — DONDE */}

        <InfoBlock
          background="#ffffff"
          textColor="#1e2f5d"
          image={pin}
          title="¿DÓNDE?"
          button={true}
          link="https://maps.app.goo.gl/icPzJ4cVTqQ5YLLa7"
        >

          <p>
            H'OMARA EVENTOS
          </p>

        </InfoBlock>

        {/* BLOQUE 3 — DRESS CODE */}

        <InfoBlock
          background="#1e2f5d"
          textColor="#ffffff"
          image={diamond}
          title="DRESS CODE"
          showDivider={true}
        >

          <div className="space-y-3">

            <p>
              ELEGANTE SPORT
            </p>

            <p
              className="
                text-[15px]
                md:text-[14px]
                text-white
                max-w-[340px]
                mx-auto
              "
            >
              Evitar los colores:
              blanco, azul y plateado
            </p>

          </div>

        </InfoBlock>

      </div>

    </section>

  )

}

export default InfoCards