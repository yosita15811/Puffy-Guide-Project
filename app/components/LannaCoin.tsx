"use client";

import { useId } from "react";

export default function LannaCoin({ className = "h-4 w-4" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const face = `lcFace-${uid}`;
  const rim = `lcRim-${uid}`;

  return (
    <svg viewBox="0 0 64 64" className={`inline-block shrink-0 ${className}`} aria-hidden="true">
      <defs>
        <radialGradient id={face} cx="34%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#FFF7D0" />
          <stop offset="42%" stopColor="#FFD34D" />
          <stop offset="76%" stopColor="#E59A16" />
          <stop offset="100%" stopColor="#C47C10" />
        </radialGradient>
        <linearGradient id={rim} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF4C8" />
          <stop offset="28%" stopColor="#F6C23A" />
          <stop offset="58%" stopColor="#B56E0A" />
          <stop offset="82%" stopColor="#F0B428" />
          <stop offset="100%" stopColor="#FFF1B2" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill={`url(#${rim})`} />
      <circle cx="32" cy="32" r="26.2" fill="#8A560C" />
      <circle cx="32" cy="32" r="24.6" fill={`url(#${face})`} />
      <circle cx="32" cy="32" r="27.6" fill="none" stroke="#FFF6D2" strokeWidth="1.15" strokeDasharray="0.8 1.55" strokeLinecap="round" opacity="0.92" />
      <circle cx="32" cy="32" r="21.5" fill="none" stroke="#FFF8E0" strokeWidth="0.6" opacity="0.8" />
      <ellipse cx="23.5" cy="19.5" rx="8.2" ry="4.4" fill="#fff" opacity="0.34" />
      <g fill="#FFF8EA">
        <circle cx="32" cy="14.6" r="1.15" />
        <path d="M32 15.6 L33.15 18.1 H30.85 Z" />
        <path d="M25.2 22.4 L32 17.2 L38.8 22.4 L37.1 23.1 L32 19.3 L26.9 23.1 Z" />
        <path d="M25.2 22.4 L23.7 20.2 L26.5 22 Z" />
        <path d="M38.8 22.4 L40.3 20.2 L37.5 22 Z" />
        <path d="M21 28 L32 20.8 L43 28 L40.7 28.9 L32 23.5 L23.3 28.9 Z" />
        <path d="M21 28 L19.1 25.5 L22.5 27.4 Z" />
        <path d="M43 28 L44.9 25.5 L41.5 27.4 Z" />
        <path d="M16.6 34.2 L32 24.8 L47.4 34.2 L44.5 35.2 L32 28.2 L19.5 35.2 Z" />
        <path d="M16.6 34.2 L14.3 31.1 L18.5 33.4 Z" />
        <path d="M47.4 34.2 L49.7 31.1 L45.5 33.4 Z" />
        <rect x="22.6" y="33.6" width="5" height="10.4" rx="0.7" />
        <rect x="36.4" y="33.6" width="5" height="10.4" rx="0.7" />
        <rect x="21.2" y="32.6" width="7.8" height="1.7" rx="0.45" />
        <rect x="35" y="32.6" width="7.8" height="1.7" rx="0.45" />
        <rect x="19.6" y="43.8" width="24.8" height="2.3" rx="0.5" />
        <rect x="16.8" y="46.1" width="30.4" height="2.7" rx="0.6" />
      </g>
    </svg>
  );
}
