'use client';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav
      className="flex items-center gap-2"
      aria-label="Pagination"
    >
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-2 rounded-lg border border-cream3 bg-white
                   text-sm text-gray-600 disabled:opacity-40
                   disabled:cursor-not-allowed hover:border-teal
                   transition-colors"
      >
        Previous
      </button>

      <span className="px-3 py-2 text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>

      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-2 rounded-lg border border-cream3 bg-white
                   text-sm text-gray-600 disabled:opacity-40
                   disabled:cursor-not-allowed hover:border-teal
                   transition-colors"
      >
        Next
      </button>
    </nav>
  );
}
