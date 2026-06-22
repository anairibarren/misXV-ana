import { useState, useEffect } from "react"
import gift from "../assets/gift.GIF"

function GiftModal({ isOpen, onClose }) {

  const alias = "anaprina"
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
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60
        backdrop-blur-sm
        px-4
      "
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[420px]"
      >

        {/* CAJA BEIGE (TODO DENTRO) */}
        <div
          className="
            bg-[#C5BAA7]
            rounded-[10px]
            px-8
            py-10
            text-center
            shadow-2xl
          "
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >

          {/* ICONO */}
          <img
            src={gift}
            alt="Regalo"
            className="w-[70px] h-[70px] mx-auto mb-6"
          />

          {/* TITULO */}
          <h3 className="text-[22px] font-semibold mb-6 text-white">
            REGALO
          </h3>

          {/* INFO */}
          <div className="space-y-6 text-white mb-8">

            <div>
              <p className="text-lg">ALIAS:</p>
              <p className="text-lg font-semibold">{alias}</p>
            </div>

            <div>
              <p className="text-lg">CUENTA:</p>
              <p className="text-lg font-semibold">{banco}</p>
            </div>

          </div>

          {/* BOTÓN COPIAR (AHORA DENTRO) */}
          <button
            onClick={handleCopy}
            className="
              w-[80%]
              py-3
              bg-[#E1DACF]
              text-white
              font-bold
              text-sm
              uppercase
              rounded-[15px]
              shadow-md
            "
          >
            {copied ? "Alias copiado" : "Copiar alias"}
          </button>

          {/* BOTÓN CERRAR (DENTRO TAMBIÉN) */}
          <button
            onClick={onClose}
            className="
              mt-3
              w-[80%]
              py-3
              border border-white
              text-white
              font-bold
              text-sm
              uppercase
              rounded-[15px]
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

    <section>

      {/* FRASE */}
      <div className="py-16 px-6">

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          <div className="w-[90px] h-[2px] bg-[#c5baa7] rounded-full mb-8" />

          <p
            className="
              text-[#c5baa7]
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
            <span className="font-extrabold text-[#c5baa7]">
              ¡inolvidable!
            </span>
          </p>

          <div className="w-[90px] h-[2px] bg-[#c5baa7] rounded-full mt-8" />

        </div>
      </div>

      {/* BLOQUE REGALO */}
      <div className="flex justify-center">

        <div
          className="
            max-w-[700px]
            w-full
            mx-auto
            px-6
            text-center
            py-12
            bg-[#c5baa7]
          "
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "white"
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
              mb-6
              text-white
            "
          >
            REGALO
          </h2>

          {/* TEXTO */}
          <p
            className="
              text-[14px]
              md:text-[18px]
              leading-[1.5]
              max-w-[550px]
              mx-auto
              text-white
            "
          >
            Habrá una urna en el salón para quien desee dejar un regalo presencial.
            También podés dejar tu regalo mediante la cuenta de Mercado Pago.
          </p>

          {/* BOTÓN */}
          <button
            onClick={() => setIsOpen(true)}
            className="
              mt-8
              bg-[#D4CCBC]
              text-white
              px-8
              py-3
              font-bold
              text-sm
              tracking-[0.12em]
              uppercase
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