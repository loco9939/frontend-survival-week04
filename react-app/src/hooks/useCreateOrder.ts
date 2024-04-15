import URI from '../apis/apis.const';
import { MenuType } from '../types/restaurant';
import getTotalPrice from '../utils/getTotalPrice';

const url = `${URI}/orders`;

export default function useCreateOrder() {
  const createOrder = async (menu:MenuType[]) => {
    const totalPrice = getTotalPrice(menu);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const receipt = await response.json();

    return receipt;
  };

  return {
    createOrder,
  };
}
