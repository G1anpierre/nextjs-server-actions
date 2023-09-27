import React from 'react'

import {ProductType} from '../types'

export const ImageProduct = (product: ProductType) => {
  return (
    <div className="row-start-1 row-span-3">
      <div className="h-full">
        <img
          src={product.image}
          alt={product.product}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  )
}
