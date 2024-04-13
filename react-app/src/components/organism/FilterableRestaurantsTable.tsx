import { useEffect, useState } from 'react';
import { Category } from '../../types/category';
import { MenuType, Restaurant } from '../../types/restaurant';
import FilterCategory from '../molecule/FilterCategory';
import Searchbar from '../molecule/Searchbar';
import RestaurantTable from './RestaurantsTable';

type FilterableRestaurantsTableProps = {
  setSelectedMenu:React.Dispatch<React.SetStateAction<MenuType[]>>
}
function FilterableRestaurantsTable({
  setSelectedMenu,
}: FilterableRestaurantsTableProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const categories:Category[] = ['전체', ...restaurants.map((res) => res.category)];

  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('전체');

  const filteredByCategoryRestaurants = selectedCategory === '전체'
    ? restaurants
    : restaurants.filter(
      (restaurant) => restaurant.category === selectedCategory,
    );

  const filteredByNameRestaurants = filteredByCategoryRestaurants.filter(
    (restaurant) => restaurant.name.includes(searchText),
  );

  useEffect(() => {
    async function getRestaurants() {
      const url = 'http://localhost:3000/restaurants';
      const response = await fetch(url);
      const data = await response.json();
      setRestaurants(data.restaurants);
    }
    getRestaurants();
  }, []);

  return (
    <>
      <Searchbar
        label="검색"
        placeholder="식당 이름"
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <FilterCategory
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <RestaurantTable
        restaurants={filteredByNameRestaurants}
        setSelectedMenu={setSelectedMenu}
      />
    </>
  );
}

export default FilterableRestaurantsTable;
