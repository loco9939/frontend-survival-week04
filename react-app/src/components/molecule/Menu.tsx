import { MenuType } from '../../types/restaurant';
import MenuItem from '../atom/MenuItem';

type MenuProps = {
  menu:MenuType[]
  setSelectedMenu:React.Dispatch<React.SetStateAction<MenuType[]>>
}

function Menu({ menu, setSelectedMenu }: MenuProps) {
  return (
    <ul>
      {menu.map((item) => (
        <MenuItem
          key={item.id}
          name={item.name}
          price={item.price}
          btnText="선택"
          onClickBtn={() => setSelectedMenu(
            (prev) => [...prev, { ...item, id: Date.now().toString() }],
          )}
        />
      ))}
    </ul>
  );
}

export default Menu;
