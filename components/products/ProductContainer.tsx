import { fetchAllProducts } from '@/utils/actions'
import React from 'react'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
import Link from 'next/link'
import { Button } from '../ui/button'
import { LuLayoutGrid, LuList } from 'react-icons/lu'

async function ProductContainer({
  layout,
  search,
}: {
  layout: string
  search: string
}) {
  const products = await fetchAllProducts({search})
  const totalProducts = products.length
  const searchTerm = search ? `&search=${search}` : ''

  return (
    <>
      <section className="flex justify-between items-center">
        <div className="font-medium text-lg">
          <h4>
            {totalProducts} product{totalProducts > 1 && 's'}
          </h4>
        </div>
        <div className="flex gap-x-4">
          <Button
            variant={layout === 'grid' ? 'default' : 'ghost'}
            size="icon"
            asChild
          >
            <Link href={`/products?layout=grid${searchTerm}`}>
              <LuLayoutGrid />
            </Link>
          </Button>
          <Button
            variant={layout === 'list' ? 'default' : 'ghost'}
            size="icon"
            asChild
          >
            <Link href={`/products?layout=list${searchTerm}`}>
              <LuList />
            </Link>
          </Button>
        </div>
      </section>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  )
}

export default ProductContainer
