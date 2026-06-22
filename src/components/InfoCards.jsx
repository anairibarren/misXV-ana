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
      className="
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
      "
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

      {/* DIVISOR */}
      {showDivider && (
        <div
          className="w-[80px] h-[2px] rounded-full my-4"
          style={{ backgroundColor: textColor }}
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

      {/* BOTÓN */}
      {button && (
        <div className="w-full flex flex-col items-center">

          <div
            className="
              w-[100px]
              h-[4px]
              mt-[14px]
              mb-[20px]
              mx-auto
              rounded-full
              bg-[#c5baa7]
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
              rounded-full
            "
            style={{
              backgroundColor: "#E1DACF",
              color: "white"
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
      { threshold: 0.2 }
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
      className="py-0 "
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

        {/* CUÁNDO */}
        <InfoBlock
          background="#c5baa7"
          textColor="#FFFFFF"
          image={calendar}
          title="¿CUÁNDO?"
        >
          <p>29 DE AGOSTO DE 2026</p>
          <p>| 21:00 HS - 05:00 HS |</p>
        </InfoBlock>

        {/* DÓNDE */}
        <InfoBlock
          textColor="#c5baa7"
          image={pin}
          title="¿DÓNDE?"
          button={true}
          link="https://maps.app.goo.gl/dAyam8ZLhgbXVAoy6"
        >
          <p className="text-lg font-medium">
            Malevo Eventos
          </p>
        </InfoBlock>

        {/* DRESS CODE */}
        <InfoBlock
          background="#c5baa7"
          textColor="#FFFFFF"
          image={diamond}
          title="DRESS CODE"
          showDivider={true}
        >
          <div className="space-y-3">

            <p className="text-lg">
              <span className="font-semibold uppercase">
                ELEGANTE
              </span>
            </p>

            <p
              className="
                text-[15px]
                md:text-[14px]
                max-w-[340px]
                mx-auto
              "
            >
              Evitar el color azul.
            </p>

          </div>
        </InfoBlock>

      </div>

    </section>
  )
}

export default InfoCards