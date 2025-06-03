export const Card = ({ children, className = '' }) => (
  <div className={`bg-white shadow rounded ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`p-2 ${className}`}>{children}</div>
);
