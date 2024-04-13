import { MenuType, Restaurant } from '../../types/restaurant';
import RestaurantHeaderRow from '../atom/RestaurantHeaderRow';
import RestaurantRow from '../atom/RestaurantRow';

type RestaurantTableProps = {
  restaurants: Restaurant[]
  setSelectedMenu:React.Dispatch<React.SetStateAction<MenuType[]>>
}

function RestaurantTable({
  restaurants,
  setSelectedMenu,

}: RestaurantTableProps) {
  return (
    <table>
      <thead>
        <RestaurantHeaderRow />
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantRow
            key={restaurant.id}
            restaurant={restaurant}
            setSelectedMenu={setSelectedMenu}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
