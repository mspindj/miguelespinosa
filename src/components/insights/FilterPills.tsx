import { motion } from "framer-motion";
import { filterOptions, type FilterValue } from "@/lib/articles";

interface FilterPillsProps {
  activeFilter: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

const FilterPills = ({ activeFilter, onFilterChange }: FilterPillsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {filterOptions.map((option) => (
        <motion.button
          key={option.value}
          onClick={() => onFilterChange(option.value)}
          className={`
            relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            border backdrop-blur-md
            ${
              activeFilter === option.value
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-white/5 text-muted-foreground border-white/10 hover:border-white/20 hover:text-foreground"
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {option.label}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterPills;
