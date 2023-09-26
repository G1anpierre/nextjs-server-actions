import {z} from 'zod'

export const productSchema = z.object({
  id: z.string(),
  product: z.string(),
  price: z.string(),
  image: z.string(),
})

export type ProductType = z.infer<typeof productSchema>

export const OnlyProductInfoSchema = productSchema.pick({
  product: true,
  price: true,
})

export const productsSchema = z.array(productSchema)
