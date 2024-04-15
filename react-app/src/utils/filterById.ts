import { MenuType } from '../types/restaurant';

export default function filterById(menu:MenuType[], id:string) {
  return menu.filter((item) => item.id !== id);
}
