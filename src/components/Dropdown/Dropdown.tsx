import React from 'react';

type DropdownProps<T> = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  data: T[];
};

const Dropdown = <T extends unknown>({
  data,
  onChange,
  placeholder,
}: DropdownProps<T>) => {
  return (
    <select className='border border-[#97ce4c] w-1/2' onChange={onChange}>
      <option value='' selected disabled>
        {placeholder}
      </option>
      {data?.map((item: any) => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
