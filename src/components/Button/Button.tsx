import React, { FC } from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className='bg-[#e4a788] px-[10px] py-[5px] mx-[10px] my-[5px] rounded-lg text-white'
  >
    {text}
  </button>
);

export default Button;
