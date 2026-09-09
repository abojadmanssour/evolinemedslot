type VerifiedBadgeProps = {
  className?: string;
};

export function VerifiedBadge({ className = '' }: VerifiedBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full
                  bg-teal text-white text-xs font-medium ${className}`}
    >
      <span aria-hidden="true">?</span>
      Verified
    </span>
  );
}
