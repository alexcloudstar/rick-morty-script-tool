type ButtonProps = {
  text: string;
  onClick: () => void;
  scheme?: 'primary' | 'secondary';
};

const Button = ({ text, scheme = 'primary', onClick }: ButtonProps) => {
  const schemeClass = scheme === 'primary' ? 'bg-[#e4a788]' : 'bg-[#e89ac7]';

  return (
    <button
      onClick={onClick}
      className={`${schemeClass} px-[10px] py-[5px] mx-[10px] my-[5px] rounded-lg text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
