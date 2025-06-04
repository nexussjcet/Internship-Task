import { FilterType } from '../types/todo';

interface TodoFilterProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

export function TodoFilter({ filter, setFilter }: TodoFilterProps) {
  return (
    <div className="flex justify-center gap-2">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 border-2 border-black rounded-md transition-all ${
          filter === 'all' 
            ? 'bg-black text-white translate-y-[2px]' 
            : 'bg-white hover:bg-gray-100 active:translate-y-[2px]'
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('active')}
        className={`px-4 py-2 border-2 border-black rounded-md transition-all ${
          filter === 'active' 
            ? 'bg-black text-white translate-y-[2px]' 
            : 'bg-white hover:bg-gray-100 active:translate-y-[2px]'
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`px-4 py-2 border-2 border-black rounded-md transition-all ${
          filter === 'completed' 
            ? 'bg-black text-white translate-y-[2px]' 
            : 'bg-white hover:bg-gray-100 active:translate-y-[2px]'
        }`}
      >
        Completed
      </button>
    </div>
  );
}
