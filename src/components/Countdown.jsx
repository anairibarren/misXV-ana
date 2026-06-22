import { useEffect, useRef, useState } from "react"

function Countdown() {

  const eventDate = new Date("2026-10-10T21:00:01")

  const calculateTimeLeft = () => {

    const difference = eventDate - new Date()

    if (difference <= 0) {

      return {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
      }

    }

    return {

      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),

      horas: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutos: Math.floor(
        (difference / 1000 / 60) % 60
      ),

      segundos: Math.floor(
        (difference / 1000) % 60
      ),

    }

  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef(null)

  // TIMER

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft(calculateTimeLeft())

    }, 1000)

    return () => clearInterval(timer)

  }, [])

  // SCROLL REVEAL

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setIsVisible(true)
          observer.disconnect()

        }

      },

      {
        threshold: 0.3
      }

    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()

  }, [])

  return (

    <section
      id="countdown"
      ref={sectionRef}
      className="pb-8"
    >

      <div>

        {/* TITULO */}

        <div
          className={`
            flex
            flex-col
            items-center
            text-center
            mb-5
            ${isVisible ? "animate-slide-left" : "opacity-0"}
          `}
        >

          {/* MIS XV */}

          <span
            className="
              text-[30px]
              md:text-[22px]
              tracking-[0.35em]
              text-[#1e2f5d]
              font-medium
              uppercase
            "
            style={{
              fontFamily: "Montserrat, sans-serif"
            }}
          >
            MIS <strong className="font-bold">XV</strong>
          </span>


          {/* NOMBRE */}

          <h2
            className="
              text-[92px]
              md:text-[110px]
              leading-none
              text-[#1e2f5d]
              -mt-1
            "
            style={{
              fontFamily: "Allura"
            }}
          >
            Juana
          </h2>

        </div>

        {/* CONTADOR */}

        <div
          className="
            flex
            justify-center
            gap-3
            text-center
            flex-wrap
            mb-24
          "
          aria-live="polite"
        >

          <TimeBox number={timeLeft.dias} label="DÍAS" />

          <TimeBox number={timeLeft.horas} label="HORAS" />

          <TimeBox number={timeLeft.minutos} label="MINUTOS" />

          <TimeBox number={timeLeft.segundos} label="SEGUNDOS" />

        </div>

      </div>


      {/* FRASE */}

      <div
        className="
          bg-[#1e2f5d]
          py-10
          px-6
        "
      >

        <div
          className="
            max-w-4xl
            mx-auto
            flex
            flex-col
            items-center
            text-center
          "
        >

          {/* LINEA SUPERIOR */}

          <div
            className="
              w-[90px]
              h-[2px]
              bg-white
              rounded-full
              mb-8
            "
          />

          {/* TEXTO */}

          <p
            className="
              text-white
              text-[18px]
              md:text-[22px]
              leading-[2]
              tracking-[0.08em]
              uppercase
              max-w-3xl
            "
            style={{
              fontFamily: "Montserrat, sans-serif"
            }}
          >
            Hay momentos que no se pueden borrar, personas que no se pueden olvidar y recuerdos como estos que siempre voy a atesorar.
          </p>

          {/* LINEA INFERIOR */}

          <div
            className="
              w-[90px]
              h-[2px]
              bg-white
              rounded-full
              mt-8
            "
          />

        </div>

      </div>

    </section>

  )
}

function TimeBox({ number, label }) {

  return (

    <div
      className="
        min-w-[80px]
        flex
        flex-col
        items-center
      "
    >

      <span
        className="
          text-4xl
          font-bold
          text-[#1e2f5d]
        "
        style={{
          fontFamily: "Montserrat, sans-serif"
        }}
      >
        {number}
      </span>

      <span
        className="
          text-[12px]
          font-semibold
          tracking-[0.25em]
          mt-3
          text-[#1e2f5d]
        "
        style={{
          fontFamily: "Montserrat, sans-serif"
        }}
      >
        {label}
      </span>

    </div>

  )
}

export default Countdown