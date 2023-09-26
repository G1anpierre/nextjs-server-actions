'use server'
import {revalidateTag} from 'next/cache'
import {OnlyProductInfoSchema} from './types'

export const addProduct = async (e: FormData) => {
  const product = e.get('product')?.toString()
  const price = e.get('price')?.toString()

  if (!product || !price) return

  const newProduct = OnlyProductInfoSchema.parse({
    product,
    price,
  })

  const res = await fetch(
    'https://65116ed9829fa0248e400d0f.mockapi.io/products',
    {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  revalidateTag('products')
}

export const deleteProduct = async (e: FormData) => {
  const id = e.get('id')?.toString()

  if (!id) return

  const res = await fetch(
    `https://65116ed9829fa0248e400d0f.mockapi.io/products/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  revalidateTag('products')
}

export const updateProduct = async (e: FormData) => {
  const id = e.get('id')?.toString()
  const product = e.get('product')?.toString()
  const price = e.get('price')?.toString()

  if (!id || !product || !price) return

  const newProduct = OnlyProductInfoSchema.parse({
    product,
    price,
  })

  const res = await fetch(
    `https://65116ed9829fa0248e400d0f.mockapi.io/products/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  revalidateTag('products')
}
