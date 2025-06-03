export const Input = ({ value, onChange, placeholder }) => (
  <input
    className="border border-gray-300 rounded px-2 py-1 w-full"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);
