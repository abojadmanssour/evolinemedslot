'use client';

type StarRatingProps = {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
};

export function StarRating({
  rating,
  size = 'md',
  showValue = false,
}: StarRatingProps) {
  const numericRating = Number(rating) || 0;

  const sizeClass = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  }[size];

  return (
    <span className={`inline-flex items-center gap-1 ${sizeClass}`}>
      <span
        className="tracking-wide text-amber-400"
        aria-label={`${numericRating.toFixed(1)} out of 5 stars`}
      >
        {'?????'}
      </span>

      {showValue && (
        <span className="text-white/80 text-sm">
          {numericRating.toFixed(1)}
        </span>
      )}
    </span>
  );
}
