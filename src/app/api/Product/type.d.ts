interface IProduct {
  _id: string
  code: string
  name: string
  price: number
  createdAt?: string
  updatedAt?: string
  currency: any
}

interface ProductProps {
  product: IProduct
}

type ShowProductType = {
  product: IProduct
}