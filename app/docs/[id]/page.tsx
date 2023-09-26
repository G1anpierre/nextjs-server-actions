import React from 'react'

const Dinamic = ({params}: {params: {id: string}}) => {
  return <div>Dinamic {params.id}</div>
}

export default Dinamic
