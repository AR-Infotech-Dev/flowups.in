import { useRef } from 'react'
import Hero from '../components/Hero'
import LandingSections from '../components/LandingSections'

function Home() {
  const pageRef = useRef(null)

  const handlePointerMove = (event) => {
    if (!pageRef.current || event.pointerType === 'touch') return

    const x = (event.clientX / window.innerWidth - 0.5) * 2
    const y = (event.clientY / window.innerHeight - 0.5) * 2
    pageRef.current.style.setProperty('--scene-x', x.toFixed(3))
    pageRef.current.style.setProperty('--scene-y', y.toFixed(3))
  }

  const resetPerspective = () => {
    pageRef.current?.style.setProperty('--scene-x', '0')
    pageRef.current?.style.setProperty('--scene-y', '0')
  }

  return (
    <div
      className="home-3d"
      ref={pageRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPerspective}
    >
        <Hero />
        <LandingSections />
    </div>
  )
}

export default Home
