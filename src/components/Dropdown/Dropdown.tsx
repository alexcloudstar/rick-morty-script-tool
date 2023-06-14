import React from 'react';

type DropdownProps<T> = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  data: T[];
};

const Dropdown = <T extends unknown>({ data, onChange }: DropdownProps<T>) => {
  return (
    <select className='border border-[#97ce4c] w-1/2' onChange={onChange}>
      {data?.map((item: any) => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
