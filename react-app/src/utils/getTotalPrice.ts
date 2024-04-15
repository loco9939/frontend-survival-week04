import { MenuType } from '../types/restaurant';

export default function getTotalPrice(menu:MenuType[]) {
  return menu.reduce(
    (acc:number, item) => acc + item.price
    , 0,
  );
}
