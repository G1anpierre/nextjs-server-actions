import React from 'react'
import {deleteProduct} from '../actions'
import {ProductType} from '../types'

export const ButtonDelete = (product: ProductType) => {
  return (
    <form action={deleteProduct}>
      <input type="hidden" name="id" value={product.id} />
      <input type="hidden" name="product" value={product.product} />

      <button
        type="submit"
        className="absolute top-0 right-0 bg-orange-800 text-white p-1"
      >
        X
      </button>
    </form>
  )
}
