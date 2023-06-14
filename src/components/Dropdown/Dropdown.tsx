import React from 'react';

type DropdownProps<T> = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  data: T[];
  value: string;
};

const Dropdown = <T extends unknown>({
  data,
  onChange,
  placeholder,
  value,
}: DropdownProps<T>) => (
  <select
    className='border border-[#97ce4c] w-1/2'
    onChange={onChange}
    value={value}
    id=''
  >
    <option value='selectValue'>Please select value</option>
    {data?.map((item: any) => (
      <option key={item.id} value={item.name}>
        {item.name}
      </option>
    ))}
  </select>
);

export default Dropdown;
