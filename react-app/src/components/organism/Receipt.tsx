import { useInterval } from 'usehooks-ts';
import { ReceiptType } from '../../types/receipt';
import convertKRW from '../../utils/convertKRW';

type ReceiptProps = {
  receipt:ReceiptType|null
  showReceiptState:boolean
  hideReceipt:() => void
}

function Receipt({
  receipt,
  showReceiptState,
  hideReceipt,
}: ReceiptProps) {
  useInterval(() => {
    hideReceipt();
  }, showReceiptState ? 5000 : null);
  return (
    <div style={{
      width: '500px',
      textAlign: 'center',
      border: '1px solid black',
    }}
    >
      <h2>영수증</h2>

      <div>
        <h3>주문번호</h3>
        <p>{receipt?.id}</p>
      </div>

      <div>
        <h3>주문목록</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {receipt?.menu.map((menu) => (
            <li key={menu.id} style={{ marginBlock: '8px' }}>
              {menu.name}
              (
              {convertKRW(menu.price)}
              원)
            </li>
          ))}

        </ul>
        <p>
          {`총 가격: ${convertKRW(receipt?.totalPrice ?? 0)}원`}
        </p>
      </div>
    </div>
  );
}

export default Receipt;
