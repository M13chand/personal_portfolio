const Button = ({ text, icon, backgroundColor, color, onClick, hover }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 shadow-sm rounded-lg flex justify-between items-baseline gap-2 ${backgroundColor} ${color} hover:${hover} outline-none focus:outline-none`}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
