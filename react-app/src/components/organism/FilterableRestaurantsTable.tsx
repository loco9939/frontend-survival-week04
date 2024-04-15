import { useState } from 'react';
import useFetchRestaurants from '../../hooks/useFetchRestaurants';
import { Category } from '../../types/category';
import { MenuType } from '../../types/restaurant';
import filterRestaurants from '../../utils/filterRestaurants';
import FilterCategory from '../molecule/FilterCategory';
import Searchbar from '../molecule/Searchbar';
import RestaurantTable from './RestaurantsTable';

type FilterableRestaurantsTableProps = {
  setSelectedMenu:React.Dispatch<React.SetStateAction<MenuType[]>>
}
function FilterableRestaurantsTable({
  setSelectedMenu,
}: FilterableRestaurantsTableProps) {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('전체');

  const restaurants = useFetchRestaurants();

  const categories:Category[] = [
    '전체',
    ...restaurants.map((res) => res.category),
  ];

  const filteredRestaurants = filterRestaurants(
    restaurants,
    { category: selectedCategory, searchText },
  );

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
        restaurants={filteredRestaurants}
        setSelectedMenu={setSelectedMenu}
      />
    </>
  );
}

export default FilterableRestaurantsTable;
