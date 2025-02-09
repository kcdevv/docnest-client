const Input = ({ refV, label, placeholder, type="text" }: InputType) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium">{label}</label>
      <input
        ref={refV}
        type={type}
        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
