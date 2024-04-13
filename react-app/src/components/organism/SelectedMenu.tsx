import { ReceiptType } from '../../types/receipt';
import { MenuType } from '../../types/restaurant';
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
  const totalPrice = selectedMenu.reduce(
    (acc:number, menu) => acc + menu.price
    , 0,
  );

  const cancelOrder = (id:string) => {
    setSelectedMenu((prev) => {
      const curr = prev.filter((menu) => menu.id !== id);
      return curr;
    });
  };

  const handleOrder = async () => {
    const URL = 'http://localhost:3000/orders';
    const body = { menu: selectedMenu, totalPrice };
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const { id, order } = await response.json();
    setReceipt({ id, ...order });
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
        {`합계: ${totalPrice.toLocaleString('ko-kr')}원 주문`}
      </button>
    </div>
  );
}

export default SelectedMenu;
