import { useState, useEffect } from "react"

import gift from "../assets/gift.GIF"

function GiftModal({ isOpen, onClose }) {

  const alias = "Jua.Iribarren"

  const banco = "Mercado Pago"

  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(alias)

      setCopied(true)

      setTimeout(() => {

        setCopied(false)

      }, 2000)

    } catch (err) {

      console.error("Error al copiar")

    }

  }

  // CERRAR CON ESC

  useEffect(() => {

    const handleKey = (e) => {

      if (e.key === "Escape") {

        onClose()

      }

    }

    if (isOpen) {

      document.addEventListener("keydown", handleKey)

    }

    return () => {

      document.removeEventListener("keydown", handleKey)

    }

  }, [isOpen, onClose])

  if (!isOpen) return null

  return (

    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
        backdrop-blur-sm
        px-4
      "
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[420px]"
      >

        {/* CUADRADO PRINCIPAL */}

        <div
          className="
            bg-[#1e2f5d]
            rounded-[4px]
            px-8
            py-10
            text-center
            shadow-xl
          "
        >

          {/* CUADRO INTERNO */}

          <div
            className="
              border
              border-white
              px-6
              py-10
            "
          >

            {/* GIFT */}

            <img
              src={gift}
              alt="Regalo"
              className="
                w-[70px]
                h-[70px]
                object-contain
                mx-auto
                mb-6
              "
            />

            {/* TITULO */}

            <h3
              className="
                text-[22px]
                font-semibold
                text-white
                tracking-[0.2em]
                mb-6
              "
              style={{
                fontFamily: "Montserrat, sans-serif"
              }}
            >
              REGALO
            </h3>

            {/* DATOS */}

            <div className="space-y-6">

              <div>

                <p className="text-sm text-white/80">
                  ALIAS:
                </p>

                <p className="text-lg text-white">
                  {alias}
                </p>

              </div>

              <div>

                <p className="text-sm text-white/80">
                  CUENTA:
                </p>

                <p className="text-lg text-white">
                  {banco}
                </p>

              </div>

            </div>

          </div>

          {/* BOTON COPIAR */}

          <button
            onClick={handleCopy}
            className="
              mt-8
              w-full
              py-3
              bg-white
              text-[#1e2f5d]
              px-8
              font-semibold
              text-sm
              tracking-[0.10rem]
              uppercase              
              rounded-full
            "
          >
            {copied ? "Alias copiado" : "Copiar alias"}
          </button>

          {/* BOTON CERRAR */}

          <button
            onClick={onClose}
            className="
              mt-4
              w-full
              border
              border-white
              text-white
              text-md
              px-8
              py-3
              font-semibold
              tracking-[0.10rem]
              text-sm
              uppercase              
              rounded-full
            "
          >
            Cerrar
          </button>

        </div>

      </div>

    </div>

  )

}

function GiftBlock() {

  const [isOpen, setIsOpen] = useState(false)

  return (

    <section
      id="gift"
      className="
        py-0
        mb-8
      "
    >

      {/* BLOQUE FRASE */}

      <div
        className="
          bg-white
          py-16
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
              bg-[#1e2f5d]
              rounded-full
              mb-8
            "
          />

          {/* TEXTO */}

          <p
            className="
              text-[#1e2f5d]
              text-[20px]
              md:text-[28px]
              leading-[1.8]
              tracking-[0.08em]
              uppercase
              max-w-3xl
            "
            style={{
              fontFamily: "Montserrat, sans-serif"
            }}
          >
            Hagamos que sea una noche{" "}
            <span className="font-extrabold">
              ¡inolvidable!
            </span>
          </p>

          {/* LINEA INFERIOR */}

          <div
            className="
              w-[90px]
              h-[2px]
              bg-[#1e2f5d]
              rounded-full
              mt-8
            "
          />

        </div>

      </div>


      {/* BLOQUE REGALO */}

      <div
        className="
          flex
          justify-center
        "
      >

        <div
          className="
            max-w-[700px]
            w-full
            mx-auto
            px-6
            text-center
            py-12
          "
          style={{
            backgroundColor: "#1e2f5d",
            color: "#ffffff",
            fontFamily: "Montserrat, sans-serif"
          }}
        >

          {/* ICONO */}

          <img
            src={gift}
            alt="Regalo"
            className="
              w-[90px]
              h-[90px]
              md:w-[110px]
              md:h-[110px]
              object-contain
              mx-auto
              mb-6
            "
          />

          {/* TITULO */}

          <h2
            className="
              text-[22px]
              md:text-[24px]
              font-semibold
              tracking-[0.2em]
              mb-6
            "
          >
            REGALO
          </h2>

          {/* TEXTO */}

          <p
            className="
              text-[16px]
              md:text-[18px]
              leading-[1.7]
              space-y-2
              max-w-[520px]
              mx-auto
            "
          >
            Nada es más importante que tu presencia, pero si deseas hacerme un presente puedes depositarlo en la siguiente cuenta.
          </p>

          {/* BOTON */}

          <button
            onClick={() => setIsOpen(true)}
            className="
              mt-8
              bg-white
              text-[#1e2f5d]
              px-8
              py-3
              font-bold
              text-sm
              tracking-[0.12em]
              uppercase
              transition
              rounded-full
            "
          >
            VER CUENTA
          </button>

        </div>

      </div>

      <GiftModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

    </section>

  )

}

export default GiftBlock