import { CrossIcon } from './Icons'

const tones = {
  blue: 'from-primary to-primary-dark',
  slate: 'from-slate-500 to-slate-700',
  red: 'from-red-500 to-red-700',
  teal: 'from-teal-500 to-teal-700',
}

const iconSizes = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
}

/**
 * Neutral stand-in for photography. Replace with a real <img> once assets exist.
 */
export default function PlaceholderImage({
  label = 'Image placeholder',
  icon: Icon = CrossIcon,
  tone = 'blue',
  size = 'md',
  className = '',
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br text-white/90 ${tones[tone] ?? tones.blue} ${className}`}
    >
      <Icon className={iconSizes[size] ?? iconSizes.md} />
      <span className="px-3 text-center text-[10px] font-semibold tracking-widest uppercase opacity-80 sm:text-xs">
        {label}
      </span>
    </div>
  )
}
