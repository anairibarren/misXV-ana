import { Icon } from "@iconify/react"
import sobre from "../assets/rsvp.gif"

function RSVP() {

  const phone = "5492323221286"

  const message = encodeURIComponent(
`Hola Ana! Te confirmo mi asistencia a tu fiesta!

Cantidad de personas:

Restricción alimentaria:`
  )

  const whatsappLink = `https://wa.me/${phone}?text=${message}`

  return (

    <section
      id="asistencia"
      className="
        bg-white
        flex
        justify-center
        py-[70px]
        mb-10
      "
    >

      <div className="max-w-[900px] w-full px-6 text-center">

        {/* ICONO */}
        <div className="flex justify-center mb-[25px]">
          <img
            src={sobre}
            alt="Confirmar asistencia"
            className="w-[120px] animate-bounce"
          />
        </div>

        {/* TITULO */}
        <h2
          className="
            text-[30px]
            font-bold
            text-[#C5BAA7]
            uppercase
            leading-[1.2]
          "
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Confirmá tu asistencia
        </h2>

        {/* LINEA */}
        <div
          className="
            w-[160px]
            h-[5px]
            bg-[#E1DACF]
            mt-[20px]
            mb-[28px]
            mx-auto
            rounded-full
          "
        />

        {/* TEXTO */}
        <div
          className="
            leading-[1.2]
            text-[#D4CCBC]
            mb-[40px]
            max-w-[500px]
            mx-auto
          "
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >

          <p className="uppercase tracking-[0.08em] font-semibold text-lg text-[#D4CCBC]">
            ANTES DEL  29 de julio de 2026
          </p>

          <p className="mt-3 text-sm">
            En caso de tener alguna restricción alimentaria, por favor informarlo al confirmar asistencia.
          </p>

        </div>

        {/* BOTÓN */}
        <div className="flex justify-center">

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-[10px]
              bg-[#D4CCBC]
              text-white
              px-9
              py-4
              rounded-full
              font-bold
              text-md
              tracking-[0.12rem]
              uppercase
              shadow-md
            "
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Confirmar asistencia

            <Icon icon="mdi:arrow-right" width="20" />

          </a>

        </div>

      </div>

    </section>
  )
}

export default RSVP