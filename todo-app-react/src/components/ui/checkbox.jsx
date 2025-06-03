export const Checkbox = ({ checked, onCheckedChange }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={onCheckedChange}
    className="w-4 h-4"
  />
);
