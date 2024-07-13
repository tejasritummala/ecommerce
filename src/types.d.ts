export type Product = {
  productId: string
  name: string
  description: string
  price: string
  category: string
  stockQuantity: number
  image: string[]
}

declare const require: {
  context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp
  ): {
    keys(): string[]
    <T>(id: string): T
    <T>(id: string): T
    resolve(id: string): string
  }
}
