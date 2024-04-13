import { ChangeEvent, useRef } from 'react';

type SearchbarProps = {
  label:string;
  placeholder:string;
  searchText:string;
  setSearchText:(text:string) => void
}

function Searchbar({
  label, placeholder, searchText, setSearchText,
}: SearchbarProps) {
  const id = useRef(`search-${label}`);

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchText(value);
  };
  return (
    <div style={{ marginBlock: '16px' }}>
      <label htmlFor={id.current} style={{ marginRight: '8px' }}>{label}</label>
      <input
        type="text"
        id={id.current}
        placeholder={placeholder}
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}

export default Searchbar;
