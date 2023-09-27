'use client'
import React, {useState} from 'react'
import {ProductType} from '../types'
import {updateProduct} from '../actions'

export const CardInfo = (product: ProductType) => {
  const [isEditing, isSetEditing] = useState(false)
  const [productInfo, setProductName] = useState({
    product: product.product,
    price: product.price,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName({...productInfo, [e.target.name]: e.target.value})
  }

  return (
    <div className="flex flex-col h-full w-full row-start-4">
      {isEditing ? (
        <form
          action={e => {
            updateProduct(e)
            isSetEditing(false)
          }}
          className="flex flex-col gap-1 h-full"
        >
          <input
            type="hidden"
            name="id"
            value={product.id}
            className="border border-black rounded-lg"
          />
          <input
            type="text"
            name="product"
            value={productInfo.product}
            onChange={handleChange}
            className="border border-black rounded-lg p-1"
          />
          <input
            type="text"
            name="price"
            value={productInfo.price}
            onChange={handleChange}
            className="border border-black rounded-lg p-1"
          />

          <div className="flex justify-between mt-auto">
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-lg"
            >
              Update
            </button>
            <button
              onClick={() => isSetEditing(false)}
              className="p-2 bg-red-500 text-white rounded-lg"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div
          onDoubleClick={() => isSetEditing(true)}
          className="cursor-pointer row-start-4 flex flex-col gap-2"
        >
          <h2 className="text-2xl">{product.product}</h2>
          <p>{product.price}</p>
        </div>
      )}
    </div>
  )
}
