interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search...',
}: SearchBarProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          className="size-5 text-gray-400 transition-colors duration-200 dark:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="dark:focus:border-primary-400 dark:focus:ring-primary-400 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-white py-3 pr-3 pl-10 leading-5 transition-colors duration-200 placeholder:text-gray-500 focus:ring-2 focus:outline-none focus:placeholder:text-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
      />
    </div>
  );
}
