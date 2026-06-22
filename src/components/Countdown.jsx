import { useEffect, useRef, useState } from "react"

function Countdown() {

const eventDate = new Date("2026-08-29T21:00:00")

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
    horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((difference / 1000 / 60) % 60),
    segundos: Math.floor((difference / 1000) % 60)
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
    { threshold: 0.3 }
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
    className="pb-8 pt-8"
  >

    {/* TITULO */}
    <div
      className={`
        flex flex-col items-center text-center mb-6
        ${isVisible ? "animate-slide-left" : "opacity-0"}
      `}
    >

      <span
        className="text-[28px] md:text-[22px] tracking-[0.35em] text-[#c5baa7] font-medium uppercase"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        MIS <strong className="font-bold">XV</strong>
      </span>

      <h2
        className="text-[92px] md:text-[110px] leading-none text-[#c5baa7] -mt-1"
        style={{ fontFamily: "Allura" }}
      >
        Ana
      </h2>

    </div>

    {/* CONTADOR */}
    <div
      className="flex justify-center gap-3 text-center flex-wrap mb-24"
      aria-live="polite"
    >
      <TimeBox number={timeLeft.dias} label="DÍAS" />
      <TimeBox number={timeLeft.horas} label="HORAS" />
      <TimeBox number={timeLeft.minutos} label="MINUTOS" />
      <TimeBox number={timeLeft.segundos} label="SEGUNDOS" />
    </div>

    {/* FRASE */}
    <div className="bg-[#c5baa7] py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

        <div className="w-[90px] h-[5px] bg-[#E1DACF] rounded-full mb-8" />

        <p
          className="text-white text-[18px] md:text-[22px] leading-[2] tracking-[0.08em] uppercase max-w-3xl"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Una noche, un sueño, un recuerdo para toda la vida
        </p>

        <div className="w-[90px] h-[5px] bg-[#E1DACF] rounded-full mt-8" />

      </div>
    </div>

  </section>
)
}

function TimeBox({ number, label }) {
return (
  <div className="min-w-[80px] flex flex-col items-center">

    <span
      className="text-4xl font-bold text-[#8B7355]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {number}
    </span>

    <span
      className="text-[12px] font-semibold tracking-[0.25em] mt-3 text-[#8B7355]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {label}
    </span>

  </div>
)
}

export default Countdown