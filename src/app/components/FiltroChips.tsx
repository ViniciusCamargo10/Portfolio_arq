import { motion } from 'motion/react';

interface FiltroChipsProps {
  filters: string[];
  activeFilters: string[];
  onFilterToggle: (filter: string) => void;
}

export function FiltroChips({ filters, activeFilters, onFilterToggle }: FiltroChipsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const isActive = activeFilters.includes(filter);
        
        return (
          <motion.button
            key={filter}
            onClick={() => onFilterToggle(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              isActive
                ? 'bg-[var(--color-primary)] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-pressed={isActive}
          >
            {filter}
          </motion.button>
        );
      })}
    </div>
  );
}