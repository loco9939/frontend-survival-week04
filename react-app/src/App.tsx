import { useState } from 'react';
import { useBoolean, useLocalStorage } from 'usehooks-ts';
import FilterableRestaurantsTable from './components/organism/FilterableRestaurantsTable';
import Receipt from './components/organism/Receipt';
import SelectedMenu from './components/organism/SelectedMenu';
import { ReceiptType } from './types/receipt';
import { MenuType } from './types/restaurant';

export default function App() {
  const { value: showReceiptState, setFalse: hideReceipt, setTrue: showReceipt } = useBoolean();

  const [selectedMenu, setSelectedMenu] = useLocalStorage<MenuType[]>('selectedMenu', []);
  const [receipt, setReceipt] = useState<ReceiptType|null>(null);
  return (
    <>
      <h1>푸드코트 키오스크</h1>

      <SelectedMenu
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        setReceipt={setReceipt}
        showReceipt={showReceipt}
      />

      <FilterableRestaurantsTable setSelectedMenu={setSelectedMenu} />

      {showReceiptState ? (
        <Receipt
          receipt={receipt}
          showReceiptState={showReceiptState}
          hideReceipt={hideReceipt}
        />
      ) : (
        <p>[영수증 나오는 곳]</p>
      )}

    </>
  );
}
