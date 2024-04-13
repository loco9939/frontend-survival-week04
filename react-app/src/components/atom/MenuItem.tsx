type MenuItemProps = {
  name:string;
  price:number;
  btnText:string;
  onClickBtn:() => void
}

function MenuItem({
  name, price, btnText, onClickBtn,
}: MenuItemProps) {
  return (
    <li style={{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      columnGap: '16px',
    }}
    >
      <p style={{ marginBlock: '8px' }}>
        {name}
        (
        {price.toLocaleString('ko-kr')}
        원)
      </p>
      <button type="button" onClick={onClickBtn}>{btnText}</button>
    </li>
  );
}

export default MenuItem;
