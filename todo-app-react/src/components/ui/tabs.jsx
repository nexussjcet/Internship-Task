export const Tabs = ({ defaultValue, onValueChange, className, children }) => (
  <div className={className}>{children}</div>
);

export const TabsList = ({ children, className }) => (
  <div className={`flex gap-2 ${className}`}>{children}</div>
);

export const TabsTrigger = ({ value, children }) => (
  <button className="px-3 py-1 bg-gray-200 rounded">{children}</button>
);
