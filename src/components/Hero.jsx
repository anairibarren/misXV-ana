import fotoInicio from "../assets/foto-inicio.JPG"

function Hero() {
  return (
    <section
      id="hero"
      className="w-full"
    >
      <img
        src={fotoInicio}
        alt="Ana XV"
        className="mt-24 w-full h-auto object-cover"
      />
    </section>
  )
}

export default Hero