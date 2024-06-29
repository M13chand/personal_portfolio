const Button = ({ text, icon, backgroundColor, color, onclick }) => {
  return (
    <div>
      <button
        onClick={onclick}
        style={{ backgroundColor: backgroundColor, color: color }}
        className="px-6 py-2  shadow-sm rounded-lg flex justify-between items-baseline
        gap-2 bg-orange-600 text-white hover:bg-orange-500  ">
        {text}
        {icon}
      </button>
    </div>
  );
};
export default Button;
