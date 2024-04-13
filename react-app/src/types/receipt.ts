import { MenuType } from './restaurant';

export type ReceiptType = {
  id:string;
  menu:MenuType[]
  totalPrice:number
}
