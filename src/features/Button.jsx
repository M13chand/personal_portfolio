const Button = ({ text, onclick }) => {
  return (
    <div>
      <button
        onClick={onclick}
        className="px-3 py-2 border-2 shadow-sm rounded-lg flex justify-between items-baseline
        gap-2 bg-orange-400 text-white">
        {text}
      </button>
    </div>
  );
};
export default Button;
