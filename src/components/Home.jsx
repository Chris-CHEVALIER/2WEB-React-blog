import { useState } from 'react'
import MagicButton from './MagicButton'

export default function Home () {
  const [textColor, setTextColor] = useState('red')

  return (
    <>
      <h2 style={{ color: textColor }}>Hello World!</h2>
      <MagicButton changeColor={() => setTextColor('blue')} />
    </>
  )
}
