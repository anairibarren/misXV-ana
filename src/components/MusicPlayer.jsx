import { Icon } from "@iconify/react"

function MusicPlayer({
  menuOpen,
  audioRef,
  isPlaying,
  setIsPlaying
}) {

  const toggleMusic = async () => {

    const audio = audioRef.current

    if (!audio) return

    try {

      if (audio.paused) {

        await audio.play()

        setIsPlaying(true)

      } else {

        audio.pause()

        setIsPlaying(false)

      }

    } catch (err) {

      console.log("Error al reproducir audio")

    }

  }

  return (

    <button
      onClick={toggleMusic}
      aria-label="Controlar música"
      className={`
        fixed
        right-[40px]
        bottom-[50px]
        w-[60px]
        h-[60px]
        rounded-full
        bg-[#1e2f5d]
        text-white
        flex
        items-center
        justify-center
        shadow-[0_18px_40px_#00000040]
        z-[999]
        transition-all
        duration-300
        hover:scale-110
        ${
          menuOpen
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }
      `}
    >

      <Icon
        icon={
          isPlaying
            ? "mdi:pause"
            : "mdi:play"
        }
        width="30"
      />

    </button>

  )

}

export default MusicPlayer