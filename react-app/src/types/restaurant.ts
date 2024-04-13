import { Category } from './category';

export type MenuType = {
  id:string;
  name:string;
  price:number
}

export type Restaurant = {
  id:string;
  category:Category;
  name:string;
  menu:MenuType[];
}
