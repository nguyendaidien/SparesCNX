import React, { useContext } from 'react'
import Part from '../components/Part'
import { PartContext } from '../state/part/context';

const Home = () => {
  const partContext = useContext(PartContext)
  const {
    selectors: { allParts }
  } = partContext
  const parts = allParts()

  return (
    <div>
      {parts.map((s, idx) => (
        <Part name={s.name} id={s.id} status={s.status} />
      ))}
    </div>
  )
}

export default Home
