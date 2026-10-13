import React from 'react';

interface BrandMarkProps {
  background: 'dark' | 'light';
  className?: string;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ background, className }) => {
  const foreground = background === 'dark' ? '#ffffff' : '#0f172a';
  const accent = background === 'dark' ? '#2dd4bf' : '#0f766e';

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      viewBox="0 0 48 48"
    >
      <path
        d="M20 15v3l-7 7v10"
        stroke={accent}
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeWidth="4.5"
      />
      <path
        d="M14 4h27l4 4v6l-4 4H14l-3-3V7l3-3Zm15 4h5v4h-5Zm8 0h5v4h-5Zm-19 5h4v5h-4ZM7 33h33l4 4v5l-4 4H7l-4-4v-5l4-4Zm12 4h4v4h-4Zm7 0h4v4h-4Zm7 0h4v4h-4ZM11 33h4v5h-4Z"
        fill={foreground}
        fillRule="evenodd"
      />
    </svg>
  );
};