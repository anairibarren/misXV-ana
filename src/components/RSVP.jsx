import { Icon } from "@iconify/react"
import sobre from "../assets/rsvp.gif"

function RSVP() {

  const phone = "5492323512051"

  const message = encodeURIComponent(
  "Hola Juanita! Confirmo la asistencia a tu fiesta!.\n\nCantidad de personas:\n\nRestricción alimentaria:"
  )

  const whatsappLink = `https://wa.me/${phone}?text=${message}`

  return (

    <section
      id="asistencia"
      className="
        bg-white
        flex
        justify-center
        py-[50px]
        transition-all
        duration-700
        mb-8
      "
    >

      <div
        className="
          max-w-[900px]
          w-full
          px-6
          text-center
        "
      >

        {/* ANIMACION SOBRE */}

        <div className="flex justify-center mb-[30px]">

          <img
            src={sobre}
            alt="Confirmar asistencia"
            className="
              w-[120px]
              animate-bounce
            "
          />

        </div>

        {/* TITULO */}

        <h2
          className="
            text-[30px]
            font-extrabold
            text-[#1e2f5d]
            leading-[1.15]
            uppercase
          "
          style={{
            fontFamily: "Montserrat, sans-serif"
          }}
        >
          Confirmá tu asistencia
        </h2>

        {/* LINEA */}

        <div
          className="
            w-[200px]
            h-[6px]
            bg-[#a0b8e1]
            mt-[14px]
            mb-[28px]
            mx-auto
            rounded-full
          "
        />

        {/* TEXTO */}

        <div
          className="
            text-[16px]
            leading-[1.5]
            text-[#6b7280]
            mb-[38px]
            max-w-[700px]
            mx-auto
          "
          style={{
            fontFamily: "Montserrat, sans-serif"
          }}
        >

          <p className="uppercase tracking-[0.08em]">
            Antes del 30 de septiembre 2026
          </p>

          <p className="text-sm mt-2">
            En caso de tener alguna restricción alimentaria, por favor informarlo al confirmar asistencia.
          </p>

        </div>

        {/* BOTON */}

        <div className="flex justify-center">

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-[10px]
              bg-[#1e2f5d]
              text-white
              text-[16px]
              font-regular
              rounded-full
              px-9
              py-4
              font-semibold
              text-sm
              tracking-[0.10rem]
              uppercase
              cursor-pointer
            "
            style={{
              fontFamily: "Montserrat, sans-serif"
            }}
          >
            Confirmar asistencia

            <Icon
              icon="mdi:arrow-right"
              width="20"
            />

          </a>

        </div>

      </div>

    </section>

  )

}

export default RSVP