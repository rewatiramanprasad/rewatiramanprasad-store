import SectionTitle from '@/components/global/SectionTitle'
import { fetchUserFavorite } from '@/utils/actions'
import ProductsGrid from '@/components/products/ProductsGrid'

async function FavoritesPage() {
  const favorites = await fetchUserFavorite()
  if (favorites.length === 0)
    return <SectionTitle text="You have no favorite yet" />
  return (
    <div>
      <SectionTitle text="Favorites" />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  )
}

export default FavoritesPage
