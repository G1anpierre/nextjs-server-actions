import {addProduct} from './actions'
import {productsSchema} from './types'
import {ButtonDelete} from './components/ButtonDelete'
import {CardInfo} from './components/CardInfo'
import {ImageProduct} from './components/ImageProduct'
import {auth} from '@clerk/nextjs'

export default async function Home() {
  async function getData() {
    const res = await fetch(
      'https://65116ed9829fa0248e400d0f.mockapi.io/products',
      {
        cache: 'no-cache',
        next: {
          tags: ['products'],
        },
      },
    )

    const products = await res.json()
    const validatedProducts = productsSchema.parse(products)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return validatedProducts
  }
  const products = await getData()
  const {userId} = auth()

  console.log('userId :', userId)

  return (
    <main className="flex min-h-screen flex-col p-2 space-y-10 container mx-auto">
      <h1 className="text-2xl text-center">Products</h1>
      <form
        className="flex flex-col gap-2 mb-4 w-full"
        action={async e => {
          'use server'
          addProduct(e)
        }}
      >
        <input
          type="text"
          className="border border-black rounded-lg p-2 w-full md:w-1/3 mx-auto"
          name="product"
          placeholder="Enter product name"
        />
        <input
          type="text"
          className="border border-black rounded-lg p-2 w-full md:w-1/3 mx-auto"
          name="price"
          placeholder="Enter price"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-lg w-full md:w-1/3 mx-auto"
        >
          Add Product
        </button>
      </form>
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 grid-flow-rows mx-auto gap-4 w-full">
        {products.map(product => (
          <li
            key={product.id}
            className="grid grid-rows-5 gap-3 bg-gray-300 rounded-lg p-2 relative h-96 w-full"
          >
            <ImageProduct {...product} />
            <ButtonDelete {...product} />
            <CardInfo {...product} />
          </li>
        ))}
      </ul>
    </main>
  )
}
