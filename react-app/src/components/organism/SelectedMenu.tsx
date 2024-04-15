import useCreateOrder from '../../hooks/useCreateOrder';
import { ReceiptType } from '../../types/receipt';
import { MenuType } from '../../types/restaurant';
import convertKRW from '../../utils/convertKRW';
import filterMenuById from '../../utils/filterById';
import getTotalPrice from '../../utils/getTotalPrice';

import MenuItem from '../atom/MenuItem';

type SelectedMenuProps = {
  selectedMenu:MenuType[]
  setSelectedMenu:React.Dispatch<React.SetStateAction<MenuType[]>>
  setReceipt:React.Dispatch<React.SetStateAction<ReceiptType | null>>
  showReceipt:() => void
}

function SelectedMenu({
  selectedMenu,
  setSelectedMenu,
  setReceipt,
  showReceipt,
}:
SelectedMenuProps) {
  const totalPrice = getTotalPrice(selectedMenu);

  const { createOrder } = useCreateOrder();

  const cancelOrder = (id:string) => {
    setSelectedMenu((prevMenu) => filterMenuById(prevMenu, id));
  };

  const handleOrder = async () => {
    if (!selectedMenu.length) {
      return;
    }

    const receipt = await createOrder(selectedMenu);

    setReceipt(receipt);
    setSelectedMenu([]);
    showReceipt();
  };
  return (
    <div style={{ width: '300px' }}>
      <h2>점심 바구니</h2>
      <ul>
        {selectedMenu.map((menu) => (
          <MenuItem
            key={menu.id}
            name={menu.name}
            price={menu.price}
            btnText="취소"
            onClickBtn={() => cancelOrder(menu.id)}
          />
        ))}
      </ul>
      <button type="button" onClick={handleOrder}>
        {`합계: ${convertKRW(totalPrice)}원 주문`}
      </button>
    </div>
  );
}

export default SelectedMenu;
