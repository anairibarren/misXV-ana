import foto from "../assets/footer-photo.jpg"
import avion from "../assets/avion.webp"

function Footer() {

  return (

    <footer className="w-full text-center">

      {/* IMAGEN FULL WIDTH */}

      <img
        src={foto}
        alt="Juana"
        className="
          w-full
          h-auto
          object-cover
        "
      />

      {/* CONTENIDO */}

      <div
        className="
          mt-8
          mb-24
          bg-white
          flex
          flex-col
          items-center
          justify-center
        "
      >

        {/* AVION */}

        <img
          src={avion}
          alt="Avión"
          className="
            w-[90px]
            md:w-[110px]
            object-contain
            mb-2
          "
        />

        {/* TEXTO */}

        <p
          className="
            text-[30px]
            md:text-[32px]
            text-[#C5BAA7]
            tracking-[0.2em]
            uppercase
            font-semibold
          "
          style={{
            fontFamily: "Montserrat, sans-serif"
          }}
        >
          Te espero
        </p>

      </div>

    </footer>

  )

}

export default Footer