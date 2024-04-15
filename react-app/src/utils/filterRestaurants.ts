import { Category } from '../types/category';
import { Restaurant } from '../types/restaurant';

export default function filterRestaurants(
  restaurants:Restaurant[],
  { category, searchText }:{category:Category, searchText:string},
) {
  const filteredByCategoryRestaurants = category === '전체'
    ? restaurants
    : restaurants.filter(
      (restaurant) => restaurant.category === category,
    );

  const filteredByNameRestaurants = filteredByCategoryRestaurants.filter(
    (restaurant) => restaurant.name.includes(searchText),
  );

  return filteredByNameRestaurants;
}
