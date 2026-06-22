import { Icon } from "@iconify/react"
import passport from "../assets/pasaporte.png"

function Navbar({ menuOpen, setMenuOpen }) {

  const phone = "5492323512051"

  const message = encodeURIComponent(
  "Hola Juanita! Confirmo la asistencia a tu fiesta!.\n\nCantidad de personas:\n\nRestricción alimentaria:"
  )

  const whatsappLink = `https://wa.me/${phone}?text=${message}`

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

    setMenuOpen(false)

  }

  return (

    <header className="fixed top-4 left-0 w-full z-50 flex justify-center">

      <div className="w-full max-w-6xl mx-4">

        <nav
          aria-label="Navegación principal"
          className="
            flex
            items-center
            justify-between
            px-5
            h-16
            bg-white
            rounded-full
            shadow-[0_16px_30px_rgba(15,23,42,0.08)]
            backdrop-blur-md
          "
        >

          {/* LOGO */}

          <a
            href="#hero"
            aria-label="Ir al inicio"
            className="flex items-center gap-3 text-[#1e2f5d]"
          >

            {/* PASAPORTE */}

            <img
              src={passport}
              alt="Pasaporte del evento"
              className="w-10 h-8 object-contain"
            />

            {/* TEXTO */}

            <div
              className="
                flex
                items-center
                gap-2
                leading-none
              "
            >

              {/* JUANA */}

              <span
                className="
                  text-[20px]
                "
              >
                Juana
              </span>

              {/* AVION */}

              <Icon
                icon="mdi:airplane-takeoff"
                width="20"
                className="text-[#1e2f5d]"
              />

              {/* MIS XV */}

              <span
                className="
                  text-[20px]
                  text-[#1e2f5d]
                "
              >
                Mis XV
              </span>

            </div>

          </a>


          {/* NAV DESKTOP */}

          <div className="hidden md:flex flex-1 justify-center items-center gap-6">

            <a
              href="#hero"
              className="flex items-center gap-1 font-medium text-[#1e2f5d]"
            >

              <Icon
                icon="mdi:home-outline"
                width="18"
                className="md:hidden"
              />

              Inicio

            </a>

            <a
              href="#info"
              className="flex items-center gap-1 font-medium text-[#1e2f5d]"
            >

              <Icon
                icon="mdi:information-outline"
                width="18"
                className="md:hidden"
              />

              Sobre el evento

            </a>

            <button
              onClick={scrollToCountdown}
              className="flex items-center gap-1 font-medium text-[#1e2f5d]"
            >

              <Icon
                icon="mdi:clock-outline"
                width="18"
                className="md:hidden"
              />

              Cuenta regresiva

            </button>

          </div>


          {/* BOTON CONFIRMAR DESKTOP */}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              md:flex
              ml-8
              px-7
              py-2
              rounded-full
              text-sm
              font-semibold
              bg-[#1e2f5d]
              text-white
              hover:opacity-90
              transition
            "
          >
            Confirmar asistencia
          </a>


          {/* HAMBURGER */}

          <button
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="
              md:hidden
              flex
              flex-col
              items-center
              justify-center
              gap-[5px]
              w-9
              h-9
              rounded-full
              bg-white
            "
          >

            <span className="w-5 h-[2px] bg-black"></span>

            <span className="w-5 h-[2px] bg-black"></span>

          </button>

        </nav>

      </div>


      {/* OVERLAY */}

      {menuOpen && (

        <div
          className="fixed inset-0 bg-black/20 z-40"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />

      )}


      {/* MOBILE DRAWER */}

      <div
        className={`
          fixed
          top-0
          right-0
          bottom-0
          w-[min(320px,78vw)]
          bg-white
          rounded-l-3xl
          p-6
          flex
          flex-col
          justify-between
          shadow-[-18px_0_40px_rgba(15,23,42,0.32)]
          transition-transform
          duration-300
          z-50
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* LINKS */}

        <nav
          aria-label="Menú móvil"
          className="flex flex-col gap-8 mt-10"
        >

          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-[16px] font-medium text-[#1e2f5d]"
          >

            <Icon icon="mdi:home-outline" width="20" />

            Inicio

          </a>

          <a
            href="#info"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-[16px] font-medium text-[#1e2f5d]"
          >

            <Icon icon="mdi:information-outline" width="20" />

            Sobre el evento

          </a>

          <button
            onClick={scrollToCountdown}
            className="flex items-center gap-3 text-[16px] font-medium text-[#1e2f5d]"
          >

            <Icon icon="mdi:clock-outline" width="20" />

            Cuenta regresiva

          </button>

        </nav>


        {/* BOTON CONFIRMAR */}

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="
            w-full
            flex
            items-center
            justify-center
            bg-[#1e2f5d]
            text-white
            font-semibold
            py-3
            rounded-full
          "
        >
          Confirmar asistencia
        </a>

      </div>

    </header>

  )

}

export default Navbar