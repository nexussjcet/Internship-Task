export const Button = ({ onClick, children, variant = 'default', size = 'md' }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
  >
    {children}
  </button>
);
