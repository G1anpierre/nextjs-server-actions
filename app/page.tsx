import {addProduct} from './actions'
import {productsSchema} from './types'
import {ButtonDelete} from './components/ButtonDelete'
import {CardInfo} from './components/CardInfo'

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

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <form className="flex flex-col gap-2 mb-4" action={addProduct}>
        <input
          type="text"
          className="border border-black rounded-lg p-2"
          name="product"
        />
        <input
          type="text"
          className="border border-black rounded-lg p-2"
          name="price"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">
          Add Product
        </button>
      </form>
      <ul className="grid grid-cols-8 grid-flow-rows mx-auto gap-4">
        {products.map(product => (
          <li key={product.id} className="bg-gray-300 rounded-lg p-2 relative">
            <ButtonDelete {...product} />
            <CardInfo {...product} />
          </li>
        ))}
      </ul>
    </main>
  )
}
