import { Icon } from "@iconify/react"

function Navbar({ menuOpen, setMenuOpen }) {

  const phone = "5492323221286"

  const message = encodeURIComponent(
    "Hola Ana! Te confirmo mi asistencia a tu fiesta!\n\nCantidad de personas:\n\nRestricción alimentaria:"
  )

  const whatsappLink = `https://wa.me/${phone}?text=${message}`

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
            shadow-lg
          "
        >

          {/* LOGO */}

          <a
            href="#hero"
            aria-label="Ir al inicio"
            className="
              flex
              items-center
              gap-2
              text-[#C5BAA7]
            "
          >

            <span className="text-[20px]">
              Ana
            </span>

            <span className="text-[18px]">
              -
            </span>

            <span className="text-[20px]">
              Mis XV
            </span>

          </a>

          {/* NAV DESKTOP */}

          <div className="hidden md:flex flex-1 justify-center items-center gap-8">

            <a
              href="#hero"
              className="font-medium text-[#8B7355]"
            >
              Inicio
            </a>

            <a
              href="#info"
              className="font-medium text-[#8B7355]"
            >
              Sobre el evento
            </a>

            <button
              onClick={scrollToCountdown}
              className="font-medium text-[#8B7355]"
            >
              Cuenta regresiva
            </button>

          </div>

          {/* BOTÓN DESKTOP */}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              md:flex
              items-center
              justify-center
              px-7
              py-3
              rounded-full
              bg-[#8B7355]
              text-[#F6F1E8]
              font-semibold
              text-sm
              uppercase
              tracking-[0.10rem]
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
              justify-center
              items-center
              gap-[5px]
              w-10
              h-10
              rounded-full
            "
          >

            <span className="w-5 h-[2px] rounded-full bg-[#C5BAA7]" />

            <span className="w-5 h-[2px] rounded-full bg-[#C5BAA7]" />

          </button>

        </nav>

      </div>

      {/* OVERLAY */}

      {menuOpen && (

        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMenuOpen(false)}
        />

      )}

      {/* MENU MOBILE */}

      <div
        className={`
          fixed
          top-0
          right-0
          bottom-0
          w-[320px]
          bg-white
          p-6
          flex
          flex-col
          justify-between
          shadow-xl
          transition-transform
          duration-300
          z-50
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        <nav className="flex flex-col gap-8 mt-10">

          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className="
              flex
              items-center
              gap-3
              text-[#D4CCBC]
              font-semibold
            "
          >

            <Icon
              icon="mdi:home-outline"
              width="20"
            />

            Inicio

          </a>

          <a
            href="#info"
            onClick={() => setMenuOpen(false)}
            className="
              flex
              items-center
              gap-3
              text-[#D4CCBC]
              font-semibold
            "
          >

            <Icon
              icon="mdi:information-outline"
              width="20"
            />

            Sobre el evento

          </a>

          <button
            onClick={scrollToCountdown}
            className="
              flex
              items-center
              gap-3
              text-[#D4CCBC]
              font-semibold
            "
          >

            <Icon
              icon="mdi:clock-outline"
              width="20"
            />

            Cuenta regresiva

          </button>

        </nav>

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
            bg-[#C5BAA7]
            text-white         
            py-3
            rounded-full
            font-medium
            uppercase
            tracking-[0.10rem]
          "
        >
          Confirmar asistencia
        </a>

      </div>

    </header>

  )
}

export default Navbar