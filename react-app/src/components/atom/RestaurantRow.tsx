import { MenuType, Restaurant } from '../../types/restaurant';
import Menu from '../molecule/Menu';

type RestaurantRowProps = {
  restaurant:Restaurant
  setSelectedMenu:React.Dispatch<React.SetStateAction<MenuType[]>>
}

function RestaurantRow({
  restaurant,
  setSelectedMenu,

}: RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <Menu menu={restaurant.menu} setSelectedMenu={setSelectedMenu} />
      </td>
    </tr>
  );
}

export default RestaurantRow;
