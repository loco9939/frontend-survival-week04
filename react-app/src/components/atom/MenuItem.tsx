import convertKRW from '../../utils/convertKRW';

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
        {convertKRW(price)}
        원)
      </p>
      <button
        type="button"
        name={`#${name}`}
        onClick={onClickBtn}
      >
        {btnText}
      </button>
    </li>
  );
}

export default MenuItem;
